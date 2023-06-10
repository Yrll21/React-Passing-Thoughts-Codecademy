import React, { useState, useEffect } from "react";
import { generateId, getNewExpirationTime } from "./utilities";

export function AddThoughtForm(props) {
  const [text, setText] = useState("");

  const handleTextChange = ({ target }) => {
    setText(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
      return;
    } else {
      const thought = {
        id: generateId(),
        text,
        expiresAt: getNewExpirationTime()
      };
      // pass the thought to the addThought() function
      props.addThought(thought);
      setText("");
    }
  };

  useEffect(() => {
    console.log(text);
  }, [text]);

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
