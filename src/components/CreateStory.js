import React from "react";
import StoryForm from "./StoryForm";

const CreateStory = () => {
  const handleOnSubmit = (story) => {
    console.log(story);
  };

  return (
    <React.Fragment>
      <StoryForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default CreateStory;
