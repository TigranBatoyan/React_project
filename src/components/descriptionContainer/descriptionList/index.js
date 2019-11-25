import React, {Component} from 'react';
import './descriptionList.css'

class Description extends Component {
    render() {
        const{item} = this.props
        return (
            <div className='right_item'>
                <div className={'row_header'}>
                    <nav className={'bold_font'}>{item.author}</nav>
                    <nav>{item.title}</nav>
                </div>
                <div>{item.description}</div>
            </div>
        )
    }
}

export default Description