import React from "react";

import s from "./CurrentItem.module.css";

import {NavLink} from "react-router-dom";

type CurrentItemProps = {
    item: { title: string, description: string, id: string, price: number, picture: string }
}

export const CurrentItem: React.FC<CurrentItemProps> = ({item}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.picture}>pic</div>
            <div>
                <div className={s.title_container}>
                    <NavLink to={`/items/${item.id}`}>
                        <span className={s.title}>{item.title}</span>
                    </NavLink>
                </div>
                <div className={s.description}>{item.description}</div>
            </div>
            <div>
                <div className={s.id}>ID: {item.id}</div>
                <div className={s.price}>${item.price}</div>
                <div className={s.actions}>
                    <button className={s.button}>edit</button>
                    <div>del</div>
                </div>
            </div>
        </div>
    )
}