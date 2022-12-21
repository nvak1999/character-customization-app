import React from "react";

function Body({ handleClick, item, number, target }) {
  return (
    <div className="list-item">
      <div className="item">
        {item.map((e, i) => (
          <img
            onClick={() => {
              handleClick(e.id, number, i);
            }}
            src={e.url}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}

export default Body;
