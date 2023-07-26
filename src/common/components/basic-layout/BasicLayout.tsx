import React, {ReactNode} from 'react';
import s from './BasicLayout.module.css';

type BasicLayoutProps = {
    children: ReactNode
}

export const BasicLayout: React.FC<BasicLayoutProps> = ({children}) => {
    return (
        <>
            <div className={s.line}/>
            <div className={s.wrapper}>
                <div className={s.container}>
                    {children}
                </div>
            </div>
        </>
    );
};