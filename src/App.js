// App.js
import React from 'react';
import { Navbar, Container, Card, CardGroup } from 'react-bootstrap';

// App component
function App() {
  return (
    <>
      {/* React Fragment */}
      <div className="App">
        {/* Navbar */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">My React App</Navbar.Brand>
          </Container>
        </Navbar>

        {/* Heading */}
        <h1 className="text-center mt-4">Welcome to My First React Project</h1>

        {/* Cards */}
        <CardGroup className="m-4">
          <Card>
            <Card.Body>
              <Card.Title>Card One</Card.Title>
              <Card.Text>This is the first card description.</Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Card Two</Card.Title>
              <Card.Text>This is the second card description.</Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Card Three</Card.Title>
              <Card.Text>This is the third card description.</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </>
  );
}

export default App;
