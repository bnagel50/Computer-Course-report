import React from 'react';
import { Container, Row } from 'react-bootstrap/Container';
// import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  // const location = useLocation();
  // const navigate = useNavigate();
  return (
    <footer>
      style={{
        widht: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center"
      }} 

      <Container>
        <Row>
          <col className='text-center py-3'>Copyright &copy; NO BS CS</col>
        </Row>
      </Container>

    </footer>
  );
};

export default Footer;