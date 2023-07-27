import React from 'react';

import s from './Items-list.module.css'
import {useAppSelector} from "../../common/hooks/hooks";
import {CurrentItem} from "./ui/current-item/CurrentItem";

export const ItemsList: React.FC = () => {

    const itemsList = useAppSelector(state => state.itemsList.itemsList)

    return (
        <>
            <div className={s.wrapper}>
                <h2 className={s.title}>Items list</h2>
                <div className={s.buttons_container}>
                    <button className={`${s.button} ${s.export_btn}`}>export as .XLS</button>
                    <button className={`${s.button} ${s.create_btn}`}>create item</button>
                </div>
            </div>
            <div>
                {itemsList.map((item) => {
                    return (
                        <CurrentItem key={item.id} item={item}/>
                    )
                })}
            </div>
        </>
    )
}