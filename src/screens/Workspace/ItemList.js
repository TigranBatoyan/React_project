import React from "react";

const ItemList = ({post}) => {
    return (
        <div className='right_item'>
            <div className={'row_header'}>
                <nav className={'bold_font'}>{post.author}</nav>
                <nav>{post.title}</nav>
            </div>
            <div>{post.description}</div>
        </div>
    )
}
export default ItemList