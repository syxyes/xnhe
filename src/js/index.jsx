import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import Navbar from "./navbar";

import Left from "./left";
import Right from "./right";


class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <p></p>
          <p></p>
          <Container fluid={true}>
            <Row>
              <Col xs={12} sm={12} md={12} lg={{ size: 6, offset: 3 }}>
                <Left />
              </Col>
              <Col xs={12} sm={12} md={12} lg={3}>
                <Right />
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));

/*
import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();
*/