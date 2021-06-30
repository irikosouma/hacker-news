import React from 'react'
//styles
import {WrapItem} from './index.styles'
export default function News({data, onClickDelete}) {
    // console.log('onclick', onClickDelete)
    const openNewTab = () => {
        window.open(`${data.url}`)
    }
    // const deleteNews = () => {
    //     console.log('delete')
    // }
    // const handleDelete = (index) => {
    //     console.log('index', index)
    // }
    return (
        <WrapItem>
            <h3 className="news-title">{data.title}</h3>
            <div className="point-comment">
                {data.points} by {data.author} | {data.num_comments} comments
            </div>
            <div className="wrap-btn">
                {/* <button onClick={openNewTab} className="btn-style read-more">Read More</button> */}
                <a className="btn-style read-more" href={`${data.url}`} target="blank" >Read More</a>
                <button onClick={onClickDelete} className="btn-style delete">Remove</button>
            </div>
        </WrapItem>
    )
}
