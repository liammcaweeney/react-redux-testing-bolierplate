import React from "react";
import ReactDom from "react-dom"
import App from "./components/App";
import Root from "./Root";
import { BrowserRouter as Router} from "react-router-dom";

ReactDom.render(
    <Root>
        <Router>
            <App/>
        </Router>
    </Root>,
    document.querySelector('#root'))