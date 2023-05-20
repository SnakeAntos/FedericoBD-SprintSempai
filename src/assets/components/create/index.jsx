
import { useState } from "react";
import "./index.css";

const Create = ({ onCreateTodo }) => {
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && text.trim() !== "") {
      onCreateTodo(text);
      setText("");
    }
  };

  return (
    <>
      <div className="create-container">
        <div className="create-inner-container">
          <div className="create-icon"></div>
          <input
            className="create-input"
            type="text"
            placeholder="Create a new todo..."
            value={text}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </>
  );
};

export default Create;
