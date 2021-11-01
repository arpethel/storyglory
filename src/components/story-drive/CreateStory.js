import React from "react";
import Header from "./Header";
import StoryForm from "../StoryForm";
import Footer from "../Footer";

const CreateStory = () => {
  const handleOnSubmit = (story) => {
    console.log(story);
  };

  return (
    <div>
      <Header></Header>
      <StoryForm handleOnSubmit={handleOnSubmit} />
      <Footer></Footer>
    </div>
  );
};

export default CreateStory;
