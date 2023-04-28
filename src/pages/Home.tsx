import React from "react";
import { Card, Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Card border="secondary">
        <Card.Body>
          <Card.Title>To use this app, follow these steps:</Card.Title>
          <ol>
            <li>Navigate to the store page</li>
            <li>Add a product to the cart using the "Add to Cart" button</li>
            <li>
              Increase or decrease the quantity of the product in the cart using
              the "+" and "-" buttons
            </li>
            <li>Remove the product from the cart using the "Remove" button</li>
            <li>
              Click the cart icon in the navigation bar to open the cart and
              view the list of products with their prices and total prices
            </li>
          </ol>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
