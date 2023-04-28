import React from "react";
import { Card, Container } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <Card>
        <Card.Header>ABOUT</Card.Header>
        <Card.Body>
          <Card.Title>Shopping Cart</Card.Title>
          <Card.Text>
            This is a React TypeScript shopping cart app built using Vite and
            React Bootstrap. The app allows users to add products to their cart,
            adjust the quantity of each product, and remove products from the
            cart.
          </Card.Text>
          <h6>Built With</h6>
          <ul>
            <li>TypeScript</li>
            <li>React</li>
            <li>React Bootstrap</li>
            <li>Vite</li>
          </ul>
          <h6>Features</h6>
          <ul>
            <li>Add products to cart</li>
            <li>Increase or decrease quantity of each product in cart</li>
            <li>Remove products from cart</li>
            <li>
              View list of products in cart with their name, price, total price,
              and option to remove them
            </li>
            <li>Responsive design</li>
          </ul>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default About;
