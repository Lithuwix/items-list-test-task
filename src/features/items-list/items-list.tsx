import React from 'react';

import s from './items-list.module.css'

export const ItemsList: React.FC = () => {
    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>Items list</h2>
            <div className={s.buttons_container}>
                <button className={`${s.button} ${s.export_btn}`}>EXPORT AS .XLS</button>
                <button className={`${s.button} ${s.create_btn}`}>CREATE ITEM</button>
            </div>
        </div>
    )
}