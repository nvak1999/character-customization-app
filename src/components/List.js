import React from "react";
import Body from "./Body";
import {
  glasses,
  body,
  eyes,
  hair,
  mouth,
  eyebrows,
  clothes1,
  clothes2,
  clothes3,
} from "../utils";
function List({ handleClick }) {
  return (
    <div className="list">
      <Body handleClick={handleClick} item={glasses} number={0} />
      <Body handleClick={handleClick} item={body} number={1} />
      <Body handleClick={handleClick} item={eyes} number={2} />
      <Body handleClick={handleClick} item={hair} number={3} />
      <Body handleClick={handleClick} item={mouth} number={4} />
      <Body handleClick={handleClick} item={eyebrows} number={5} />
      <Body handleClick={handleClick} item={clothes1} number={6} />
      <Body handleClick={handleClick} item={clothes2} number={7} />
      <Body handleClick={handleClick} item={clothes3} number={8} />
    </div>
  );
}

export default List;
