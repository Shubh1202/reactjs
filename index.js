import React from 'react';
import ReactDOM from 'react-dom/client';
import BascicJSX from './basic-jsx';
import AdvanceJSX  from './advance-jsx';
import ConditionJsx from './condition-jsx';
import ConditionalJSX from './conditional-jsx'
import MenuList from './map-function.js';
import KeyAttribute from './key-attribute';

import "./App.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <BascicJSX />
        <AdvanceJSX />
        <ConditionJsx />
        <ConditionalJSX />
        <MenuList />
        <KeyAttribute />
    </>
)
