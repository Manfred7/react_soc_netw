import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {RerenderEntireTree} from "./render";
import state from "./redux/state";

//addPost('test test test');


RerenderEntireTree(state);

