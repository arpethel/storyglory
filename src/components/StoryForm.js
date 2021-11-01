import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const StoryForm = (props) => {
  const [story, setStory] = useState({
    title: props.story ? props.story.title : "",
    author: props.story ? props.story.author : "",
    content: props.story ? props.story.content : "",
    date: props.story ? props.story.date : ""
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { title, author, content, date } = story;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [title, author, content, date];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const story = {
        id: uuidv4(),
        title,
        author,
        content,
        date: new Date(),
      };
      props.handleOnSubmit(story);
    } else {
      errorMsg = "Please fill out all the fields.";
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "title":
        if (value === "" || value !== null) {
          setStory((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case "author":
        if (value === "" || value !== null) {
          setStory((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case "content":
        if (value === "" || value !== null) {
          setStory((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case "date":
        if (value === "" || value !== null) {
          setStory((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      default:
        setStory((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  return (
    <Container>
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Card>
        <Card.Body>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Title</Form.Label>
              <Form.Control
                className="input-control"
                type="text"
                name="title"
                value={title}
                placeholder="Give your story a title"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="author">
              <Form.Label>Author</Form.Label>
              <Form.Control
                className="input-control"
                type="text"
                name="author"
                value={author}
                placeholder="Enter name of author"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                className="input-control"
                type="number"
                name="content"
                value={content}
                placeholder="Write your story"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                className="input-control"
                type="text"
                name="date"
                value={date}
                placeholder="Enter the date the story was written"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="submit-btn">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default StoryForm;
