import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartButton from "../components/atoms/CartButton";
import { headerRoutes } from "../routes/headerRoutes";
import { useShoppingCart } from "../context/ShoppingCartContext";

const NavigationBar = () => {
  const { cartQuantity } = useShoppingCart();

  return (
    <Navbar sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          {headerRoutes.map((item) => {
            return (
              <Nav.Link to={item.path} as={NavLink} key={item.id}>
                {item.name}
              </Nav.Link>
            );
          })}
        </Nav>
        {cartQuantity > 0 && <CartButton />}
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
