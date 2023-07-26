import React from "react";

import s from "./Item.module.css";

import {useNavigate} from "react-router-dom";

export const Item: React.FC = () => {

    const navigate = useNavigate()

    const onBackClickHandler = () => {
        navigate("/")
    }

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <button onClick={onBackClickHandler} className={s.button}>back</button>
                <h2 className={s.title}>Current item</h2>
            </div>
        </div>
    )
}