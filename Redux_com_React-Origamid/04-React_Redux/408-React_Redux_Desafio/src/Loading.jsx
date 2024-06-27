import React from 'react'
import style from './loading.module.css'
const Loading = () => {
    return (
        <div className={style.spinner}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Loading