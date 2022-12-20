import React from "react";

function Model({ handleClick, item }) {
  return (
    <div className="model">
      <div className="avatar">
        <img id="glass" src={item[0].url} alt="" />
        <img id="body" src={item[1].url} alt="" />
        <img id="eye" src={item[2].url} alt="" />
        <img id="hair" src={item[3].url} alt="" />
        <img id="mouth" src={item[4].url} alt="" />
        <img id="eyebrow" src={item[5].url} alt="" />
        <img id="layer1" src={item[6].url} alt="" />
        <img id="layer2" src={item[7].url} alt="" />
        <img id="layer3" src={item[8].url} alt="" />
        <img id="nose" src="./character/noses/1.png" alt="" />
        <form onSubmit={(e) => handleClick(e)} className="random" action="">
          <button id="button-random">Randomize</button>
        </form>
      </div>
    </div>
  );
}

export default Model;
