import "./Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PictureCard from "../components/PictureCard";
import { Button } from "react-bootstrap";

function Home() {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet molestie nibh. Maecenas eu mauris et urna auctor molestie. Donec in faucibus arcu, at efficitur ex. Proin urna sem, ullamcorper ac viverra aliquet, interdum ac risus. Etiam commodo, elit et mollis placerat, justo justo imperdiet sapien, nec vulputate tortor libero ut nisi. Morbi nulla dolor, faucibus vel nisi ut, sagittis sodales mi. Sed vitae imperdiet lorem. Sed sit amet ex velit. Donec scelerisque justo sed nulla ultrices, quis tincidunt quam molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales convallis magna, nec tempor elit imperdiet eget. Etiam ut egestas diam. Vestibulum magna eros, placerat eget ultrices cursus, facilisis et tellus. Nam ullamcorper ex augue, ac dignissim tortor interdum quis. Aliquam vulputate sem vitae ultrices feugiat. Integer est est, consectetur et ante sed, egestas vehicula mauris.";

  return (
    <Container>
      <Row>
        <Col xs="12" md="3">
          <div className="info-div">
            <PictureCard img='' alt="Shees Ali" />
          </div>
        </Col>
        <Col>
          <div className="side-div">
            <Row>
              <Col>
                <Button className="float-end">Click Here</Button>
              </Col>
            </Row>
            <div className="heading-div">
              <p className="sub-heading">Mobile App Developer ( 2019 - Current )</p>
              <p className="main-heading">Syed Muhammad Shees Ali</p>
            </div>
            <div className="description-div">
              <p>{description}</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
