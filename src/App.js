import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [mydata, setData] = useState([]);
  const [selectedSection, setSelectedSection] = useState('all');

  const sectionUrls = {
    all: 'https://inshorts.me/news/all?offset=0&limit21',
    top: 'https://inshorts.me/news/top?offset=0&limit=21',
    trending: 'https://inshorts.me/news/trending?offset=0&limit=21',
    science: 'https://inshorts.me/news/topics/science',
    entertainment: 'https://inshorts.me/news/topics/entertainment',
    sports: 'https://inshorts.me/news/topics/sports',
  };

  const apiget = () => {
    fetch(sectionUrls[selectedSection])
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json.data.articles);
      });
  };

  useEffect(() => {
    apiget();
    const interval = setInterval(() => {
      apiget();
    }, 500000);
    return () => clearInterval(interval);
  }, [selectedSection]);

  return (
    <>
      <Navbar setSelectedSection={setSelectedSection} />

      <Container fluid>
        <Row xs={1} md={3} className="g-4">
          {mydata.map((value) => (
            <Col key={value.id} className="container-fluid mt-4">
              <Card>
                <Card.Img variant="top" src={value.imageUrl} height="275px" />
                <Card.Body>
                  <Card.Title>{value.title}</Card.Title>
                  <Card.Text>{value.content}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
