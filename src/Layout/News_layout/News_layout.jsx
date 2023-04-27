// import React from 'react';
import Header from '../../Pages/Shared/Header/Header';
import Footer from '../../Pages/Shared/Footer/Footer';
import Right from '../../Pages/Shared/Right/Right';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from 'react-router-dom';
const News_layout = () => {
  
    return (
        <div>
            <Header></Header>
            <div>
            <Container>
<Row >
       
        <Col lg="9"><Outlet></Outlet></Col>
        <Col lg="3">
          <Right></Right>
        </Col>
      </Row>
      </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default News_layout;