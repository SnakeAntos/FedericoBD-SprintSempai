import "./index.css";
import { useState } from "react";
import Bottom from "../bottom/index.jsx";

const ItemsList = (props) => {
  const [filter, setFilter] = useState("all");

  const handleToggleCompleted = (index) => {
    const updatedList = [...props.listItem];
    updatedList[index].completed = !updatedList[index].completed;
    props.setList(updatedList);
  };

  const filterItems = () => {
    switch (filter) {
      case "active":
        return props.listItem.filter(item => !item.completed);
      case "completed":
        return props.listItem.filter(item => item.completed);
      default:
        return props.listItem;
    }
  };

  return (
    <>
      <div className="itemsList-container">
        {filterItems().map((item, index) => (
          <div key={index} className="itemList-container-inner">
            <button
              className="itemsList-button"
              onClick={() => handleToggleCompleted(index)}
            >
              <div
                className={`itemsList-button-inside ${
                  item.completed ? "itemsList-button-inside-completed" : ""
                }`}
              ></div>
            </button>
            <p className="itemsList-item">{item.texto}</p>
          </div>
        ))}
        <Bottom
          elements={filterItems().length}
          onClearCompleted={props.onClearCompleted}
          setFilter={setFilter}
        />
      </div>
    </>
  );
};

export default ItemsList;
