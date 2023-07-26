import React from 'react';

import s from './PageNotFound.module.css';

import { useNavigate } from 'react-router-dom';

import {ErrorImage} from "./error-page-svg/ErrorIcon";

export const PageNotFound: React.FC = () => {

    const navigate = useNavigate()

    const onClickHandler = () => {
        navigate("/")
    }

    return (
        <>
            <div className={s.title}>Ooops!</div>
            <div className={s.subtitle}>page not found!</div>
            <div className={s.image_container}>
                <ErrorImage/>
            </div>
            <div className={s.button_container}>
                <button onClick={onClickHandler} className={s.button}>Back to homepage</button>
            </div>
        </>
    );
};