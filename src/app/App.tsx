import React from 'react';
import './App.css';

import {Navigate, Route, Routes} from 'react-router-dom';

import {BasicLayout} from "../common/components/basic-layout/BasicLayout";

import Header from '../common/components/header/Header';
import {PageNotFound} from "../common/components/page-not-found/PageNotFound";
import {ItemsList} from "../features/items-list/Items-list";
import { Item } from '../features/item/Item';

const App = () => {
  return (
    <div className="App">
        <BasicLayout>
            <Header/>

            <Routes>
                <Route path={'/'} element={<Navigate to={'/items'}/>}/>

                <Route path={'/items'} element={<ItemsList/>}/>
                <Route path={'/items/:itemID'} element={<Item/>}/>

                <Route path={'/error404'} element={<PageNotFound/>}/>
                <Route path={'*'} element={<Navigate to={'/error404'}/>}/>
            </Routes>

        </BasicLayout>
    </div>
  );
}

export default App;
