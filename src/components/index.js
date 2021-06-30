import React, { useState, useEffect, useRef } from 'react'
//styled
import {Wrap} from './index.styles'
//components
import News from './NewsItem'
export default function MainPage() {

    const [valueInput, setValueInput] = useState('REACT')
    const [list, setList] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [total, setTotal] = useState(0)
    const timer = useRef(null)
    useEffect(() => {
        let api = `https://hn.algolia.com/api/v1/search?query=${valueInput}&page=${currentPage}`
        fetch(`${api}`)
        .then(response => response.json())
        .then(json => {
            setList(json.hits)
            setTotal(json.nbPages)
            console.log('get data', json)
        })
        .catch(
            err => {
                console.log('resquest failed', err)
            }
        )

    }, [])
    const handleChange = (e) => {
        // console.log('onchange did work')
        let newValue = e.target.value;
        setValueInput(newValue)
        if(timer.current) {
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(() => {
            requestApi(newValue)
        }, 2000);
    }
    const requestApi = (value) => {
        let newApi =  `https://hn.algolia.com/api/v1/search?query=${value}&page=${currentPage}`
        fetch(`${newApi}`)
        .then(response => response.json())
        .then(json => {
            setList(json.hits)
        })
        .catch(err => {
            console.log(err)
        }
        )
    }
    const handlePrev = (page) => {
        let newPage = page - 1;
        if(page === 0) {
            setCurrentPage(total - 1)
        }
        else {
            setCurrentPage(newPage)
        }
    }
    const handleNext = (page) => {
        let newPage = page + 1;
        if(newPage === total) {
            setCurrentPage(0)
        }
        else {
            setCurrentPage(newPage)
        }
    }
    useEffect(() => {
        requestApi(valueInput)
    }, [currentPage])
    const onClickDelete = (indexDelete) => {
        const newList = list.filter((item, index) => indexDelete !== index ? item : "")

        setList(newList)
    }
    //api https://hn.algolia.com/api/v1/search?query=react&page=0
    return (
        <Wrap>
            <div className="wrap-search-title">
                <h3 className="title">Search Hacker News</h3>
                <input className="input-style" type="text" defaultValue={valueInput}  onChange={(e) => handleChange(e)} />
                <div className="pagination-btn">
                    <button className="btn-style" onClick={() => handlePrev(currentPage)}>Prev</button>
                    <span className="number-style">
                    {currentPage + 1} of {total}
                    </span>
                    <button className="btn-style" onClick={() => handleNext(currentPage)}>Next</button>
                </div>
            </div>
            <div className="wrap-news">
                {list.length !== 0 ? 
                <>
                {list.map((item, index) => (
                    <News key={index} data={item} onClickDelete={() => onClickDelete(index)}/>
                ))}
                </>
                : ""
            }
            </div>
        </Wrap>
    )
}
