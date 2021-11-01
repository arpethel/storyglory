import React from "react";
import { Container,  Card } from "react-bootstrap";
import Header from "./story-drive/Header";

const Stories = () => {
  return (
    <>
      <Header/>
      <Container className="p-5">
        <Card style={{ width: "18rem" }} className="m-2">
          <Card.Img
            src="images/dragonflies.jpg"
            alt="the dragon flies"
            maxWidth="100px"
            maxHeight="160px"
          />
          <Card.Body>
            <Card.Title>[story title]</Card.Title>
            <Card.Text>
              Created by [author]
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">...</small>
          </Card.Footer>
        </Card>
      </Container>
    </>
  );
};

export default Stories;
