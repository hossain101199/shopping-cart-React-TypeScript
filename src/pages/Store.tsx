import { Col, Container, Row } from "react-bootstrap";
import { storeItems } from "../data/storeItems";
import StoreItem from "../components/molecules/StoreItem";

const Store = () => {
  return (
    <Container>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Store;
