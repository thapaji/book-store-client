import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const CustomCard = ({ _id, thumbnail, title, author, publishedYear }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={thumbnail} style={{ height: "25rem" }} />
      <Card.Body>
        <Card.Title>{title?.length > 20 ? title.substring(0, 19) + "..." : title}</Card.Title>
        <Card.Text>
          {author?.length > 25 ? author.substring(0, 24) : author} - {publishedYear}
        </Card.Text>
        <Button variant="warning">Read More...</Button>
      </Card.Body>
    </Card>
  );
};
