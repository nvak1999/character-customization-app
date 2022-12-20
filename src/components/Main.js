import React from "react";
import Header from "./Header";
import Model from "./Model";
import List from "./List";
import { useEffect, useState } from "react";
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
function Main() {
  const [glass, setGlass] = useState(glasses[randomNumberInRange(0, 16)]);
  const [iBody, setIbody] = useState(body[randomNumberInRange(0, 16)]);
  const [iEye, setIeye] = useState(eyes[randomNumberInRange(0, 23)]);
  const [iHair, setIhair] = useState(hair[randomNumberInRange(0, 72)]);
  const [iMouth, setImouth] = useState(mouth[randomNumberInRange(0, 23)]);
  const [ieyebrows, setIeyebrows] = useState(
    eyebrows[randomNumberInRange(0, 14)]
  );
  const [iclothes1, setIclothes1] = useState(
    clothes1[randomNumberInRange(0, 4)]
  );
  const [iclothes2, setIclothes2] = useState(
    clothes2[randomNumberInRange(0, 4)]
  );
  const [iclothes3, setIclothes3] = useState(
    clothes3[randomNumberInRange(0, 8)]
  );
  const [randomSkin, setRandomSkin] = useState([
    glass,
    iBody,
    iEye,
    iHair,
    iMouth,
    ieyebrows,
    iclothes1,
    iclothes2,
    iclothes3,
  ]);
  const handleClick = (item, number) => {
    switch (number) {
      case 0:
        setGlass(glasses[item - 1]);
        break;
      case 1:
        setGlass(body[item - 1]);
        break;
      case 2:
        setGlass(eyes[item - 1]);
        break;
      case 3:
        setGlass(hair[item - 1]);
        break;
      case 4:
        setGlass(mouth[item - 1]);
        break;
      case 5:
        setGlass(eyebrows[item - 1]);
        break;
      case 6:
        setGlass(clothes1[item - 1]);
        break;
      case 7:
        setGlass(clothes2[item - 1]);
        break;
      case 8:
        setGlass(clothes3[item - 1]);
        break;
      default:
    }
  };
  const randomize = (e) => {
    e.preventDefault();
    setGlass(glasses[randomNumberInRange(0, 16)]);
    setIbody(body[randomNumberInRange(0, 16)]);
    setIeye(eyes[randomNumberInRange(0, 23)]);
    setIhair(hair[randomNumberInRange(0, 72)]);
    setImouth(mouth[randomNumberInRange(0, 23)]);
    setIeyebrows(eyebrows[randomNumberInRange(0, 14)]);
    setIclothes1(clothes1[randomNumberInRange(0, 4)]);
    setIclothes2(clothes2[randomNumberInRange(0, 4)]);
    setIclothes3(clothes3[randomNumberInRange(0, 8)]);
  };
  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  useEffect(() => {
    setRandomSkin([
      glass,
      iBody,
      iEye,
      iHair,
      iMouth,
      ieyebrows,
      iclothes1,
      iclothes2,
      iclothes3,
    ]);
  }, [
    glass,
    iBody,
    iEye,
    iHair,
    iMouth,
    ieyebrows,
    iclothes1,
    iclothes2,
    iclothes3,
    randomSkin,
  ]);

  return (
    <div>
      <Header />
      <div className="container">
        <Model handleClick={randomize} item={randomSkin} />
        <List handleClick={handleClick} />
      </div>
    </div>
  );
}

export default Main;
