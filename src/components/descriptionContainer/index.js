import React, {Component} from 'react';
import Description from "./descriptionList";
import './descriptionContainer.css'
import {url, endpoint_blog} from "../../Costants/costants";

class Descriptions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            descriptions: [],
            loading: true
        }
    }

    componentDidMount() {
            fetch(`${url}${endpoint_blog}`)
                .then(response => {
                    if (response.ok && response.status === 200) {
                        return response.json()
                            .then(data => {
                                this.setState({
                                    descriptions: data,
                                    loading: false
                                })
                            })
                    }
                }).catch(err => {
                console.log('Error', err)
            })
        }

    render() {

        const {descriptions, loading} = this.state

        return (
            <div className="container_item-right">
                <div className="right_item-main" id="description">
                    {
                        loading && <div>...Loading</div>
                    }
                    {
                        descriptions.map((description, index) => {
                            return <Description key={index} item={description} />
                        })
                    }
                </div>
                <footer></footer>
            </div>
        )
    }
}

export default Descriptions