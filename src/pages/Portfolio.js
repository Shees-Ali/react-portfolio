import "./Portfolio.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "../components/ProjectCard";

function Portfolio() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let itemList = [];
  array.forEach((item, index) => {
    itemList.push(
      <Col key={index} className="p-0 mb-4">
        <ProjectCard />
      </Col>
    );
  });

  return (
    <Container>
      <div className="heading-div">
        <p className="sub-heading">Some examples of my work</p>
        <p className="main-heading">Portfolio</p>
      </div>

      <div className="projects Div">
        <Row>{itemList}</Row>
      </div>
      
    </Container>
  );
}

export default Portfolio;
