import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, ButtonGroup, Form } from "react-bootstrap";
import NavBar from "./Navbar";

const MainPage = () => {
  const [fromState, setFromState] = useState('');
  const [toState, setToState] = useState('');
  const [fromCur, setFromCur] = useState('rub');
  const [toCur, setToCur] = useState('usd');

  const handleFromChange = (e) => {
    const value = e.target.value;
    const getCurrency = async () => {
      const response = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCur}.json`);
      const result = value * response.data[fromCur][toCur];
      
      if (value === '') {
        setFromState('');
        setToState('');
      }
      if (Number(value)) {
        setFromState(value);
        setToState(result);
      }
    }

    getCurrency();
  }

  const handleToChange = (e) => {
    const value = e.target.value;
    const getCurrency = async () => {
      const response = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${toCur}.json`);
      const result = value * response.data[toCur][fromCur];
      
      if (value === '') {
        setFromState('');
        setToState('');
      }
      if (Number(value)) {
        setToState(value);
        setFromState(result);
      }
    }

    getCurrency();   
  }

  return (
    <>
    <NavBar />
    <Container className="" id="converter">
      <Row className="justify-content-around">
        <Col className="converter-side">
            <Row>
              <h5>I have</h5>
            </Row>
            <Row>
                <ButtonGroup>
                    <Button id="rub" variant={fromCur === 'rub' ? "primary" : "secondary"} onClick={() => setFromCur('rub')}>RUB</Button>
                    <Button id="usd" variant={fromCur === 'usd' ? "primary" : "secondary"} onClick={() => setFromCur('usd')}>USD</Button>
                    <Button id="eur" variant={fromCur === 'eur' ? "primary" : "secondary"} onClick={() => setFromCur('eur')}>EUR</Button>
                </ButtonGroup>
            </Row>
            <Row>
              <Form onSubmit={(e) => {e.preventDefault()}}>
                <Form.Group className="mb-3">
                <Form.Control className="form-control" as="input" value={fromState} onChange={handleFromChange} />
                </Form.Group>
              </Form>
            </Row>
        </Col>
        <Col className="converter-side">
            <Row>
              <h5>Want to buy</h5>
            </Row>
            <Row>
              <ButtonGroup>
                  <Button variant={toCur === 'rub' ? "primary" : "secondary"} onClick={() => setToCur('rub')}>RUB</Button>
                  <Button variant={toCur === 'usd' ? "primary" : "secondary"} onClick={() => setToCur('usd')}>USD</Button>
                  <Button variant={toCur === 'eur' ? "primary" : "secondary"} onClick={() => setToCur('eur')}>EUR</Button>
                </ButtonGroup>
            </Row>
            <Row>
              <Form onSubmit={(e) => {e.preventDefault()}}>
                <Form.Group className="mb-3">
                <Form.Control as="input" value={toState} onChange={handleToChange} />
              </Form.Group>
              </Form>
            </Row>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default MainPage;
