import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const StoryForm = (props) => {
  const [story, setStory] = useState({
    storyname: props.story ? props.story.storyname : "",
    author: props.story ? props.story.author : "",
    quantity: props.story ? props.story.quantity : "",
    price: props.story ? props.story.price : "",
    date: props.story ? props.story.date : "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { storyname, author, price, quantity } = story;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [storyname, author, price, quantity];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const story = {
        id: uuidv4(),
        storyname,
        author,
        price,
        quantity,
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
      case "quantity":
        if (value === "" || parseInt(value) === +value) {
          setStory((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case "price":
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
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
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Story Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="storyname"
            value={storyname}
            placeholder="Enter name of story"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Story Author</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="author"
            value={author}
            placeholder="Enter name of author"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Enter available quantity"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Story Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
            placeholder="Enter price of story"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default StoryForm;
