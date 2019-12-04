import React, {Component} from 'react';
import Description from "./descriptionList";
import './descriptionContainer.css'
import {getPosts} from "../../API";
import { Spinner } from "react-bootstrap";

class Descriptions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            descriptions: [],
            loading: true
        }
    }

    componentDidMount() {
           getPosts.then(data => {
               this.setState({
                   descriptions: data,
                   loading: false
               })
           })
        }

    render() {

        const {descriptions, loading} = this.state

        return (
            <div className="container_item-right">
                <div className="right_item-main" id="description">
                    {
                        loading && <Spinner animation="border" variant="primary" />
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