import 'regenerator-runtime/runtime'
import React from 'react'
import { login, logout } from './utils'
import './global.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home';
import NewPoll from './Components/NewPoll';
import PollingStation from './Components/PollingStation';


import getConfig from './config'
const { networkId } = getConfig(process.env.NODE_ENV || 'development')

export default function App() {
  const changeCandidatesFunction = async(prompt) => {
    console.log(prompt);
    let namePair = await window.contract.getCandidatePair({prompt:prompt});
    localStorage.setItem("Candidate1",namePair[0]);
    localStorage.setItem("Candidate2",namePair[1]);
    localStorage.setItem("prompt",prompt);
    window.location.replace(window.location.href+"PollingStation");
  }
  return (
    <Router>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
      <Nav.Link href="/NewPoll">New Pole</Nav.Link>
      <Nav.Link onClick={window.accountId===""?login:logout}>
        {window.accountId===""?"login":window.accountId}
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
<Switch>
  <Route exact path="/"><Home changeCandidates={changeCandidatesFunction}/></Route>
  <Route exact path="/PollingStation"><PollingStation/></Route>
  <Route exact path="/NewPoll"><NewPoll/></Route>
</Switch>
</Router>
  )
}