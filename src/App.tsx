import React from 'react';
import './App.css';
//import styled from "styled-components";

import 'rsuite/dist/styles/rsuite-default.css';
//import {Button} from 'rsuite'
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import ErrorPage from "./pages/error/ErrorPage";
import SamplePage from "./pages/sample/SamplePage";
import IndexPage from './pages/index/IndexPage';

/*
const STitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;`

const SWrapper = styled.section`
  padding:4em;
  background: papayawhip`

const SButton = styled(Button)`
  background-color:red;
  
  &:hover{
    background-color:green;
  }
`

*/


function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/">
                  <IndexPage/>
              </Route>
              <Route exact path="/sample">
                  <SamplePage/>
              </Route>
              <Route path="*" component={ErrorPage} />
          </Switch>
      </Router>

  );
}

export default App;
