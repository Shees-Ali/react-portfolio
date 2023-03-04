import "./Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <div className="footer">
      <Container className="footer-container">
        <Row className="footer-row align-content-center">
          <Col xs="6" className="text-center">
            <div className="footer-title">Shees Ali</div>
          </Col>
          <Col xs="6">Links</Col>
        </Row>
      </Container>
    </div>
  );
}
