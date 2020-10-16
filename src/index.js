//index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import ReactHome from './ReactPage/ReactHome';
//           浏览器  as:重命名        链接（封装的是a标签）

ReactDOM.render(
  <ReactHome/>,
  document.getElementById('root')
);