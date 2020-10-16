//index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './TaoBaoPages/App'
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
//           浏览器  as:重命名        链接（封装的是a标签）

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);