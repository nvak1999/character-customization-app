import React from "react";

function Body({ handleClick, item, number }) {
  return (
    <div className="body">
      <div className="item">
        {item.map((i) => (
          <img
            onClick={() => {
              handleClick(i.id, number);
            }}
            src={i.url}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}

export default Body;
