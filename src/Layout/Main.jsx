import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import Left from '../Pages/Shared/Left/Left';
import Right from '../Pages/Shared/Right/Right';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from 'react-router-dom';
const Main = () => {
    return (
        <div>
            <Header></Header>
            <div>
<div>
    <Container>
<Row >
        <Col  lg="3">
          <Left></Left>
        </Col>
        <Col lg="6"><Outlet></Outlet></Col>
        <Col lg="3">
          <Right></Right>
        </Col>
      </Row>
      </Container>
</div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;