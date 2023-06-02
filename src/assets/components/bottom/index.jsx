import "./index.css";

const Bottom = (props) => {
  const handleClearCompleted = () => {
    props.onClearCompleted();
  };

  return (
    <>
      <div className="bottom-container">
        <div className="bottom-container-inner">
          <div className="bottom-menu-container">
            <p className="bottom-menu-itemsLeft">
              <span>{props.elements}</span> elements left
            </p>
          </div>
          <div className="bottom-menu-container">
            <ul className="bottom-menu-list">
              <li className="bottom-menu-list-item" onClick={() => props.setFilter("all")}>All</li>
              <li className="bottom-menu-list-item" onClick={() => props.setFilter("active")}>Active</li>
              <li className="bottom-menu-list-item" onClick={() => props.setFilter("completed")}>Completed</li>
            </ul>
          </div>
          <div className="bottom-menu-container">
            <button onClick={handleClearCompleted} className="bottom-menu-clear">Clear Completed</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bottom;
