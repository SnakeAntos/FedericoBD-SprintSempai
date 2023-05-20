import "./index.css";
const Bottom = (props) => {
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
              <li className="bottom-menu-list-item">All</li>
              <li className="bottom-menu-list-item">Active</li>
              <li className="bottom-menu-list-item">Completed</li>
            </ul>
          </div>
          <div className="bottom-menu-container">
            <button className="bottom-menu-clear">Clear Completed</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Bottom;
