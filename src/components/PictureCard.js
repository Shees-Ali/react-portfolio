import "./PictureCard.css";
import Card from "react-bootstrap/Card";

function PictureCard(props) {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>General Information</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PictureCard;
