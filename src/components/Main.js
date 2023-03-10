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
  const [target, setTarget] = useState(false);
  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
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
  const [skin, setSkin] = useState([
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
  useEffect(() => {
    setSkin([
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
    target,
  ]);

  const handleClick = (item, number, index) => {
    setTarget(false);
    switch (number) {
      case 0:
        setGlass(glasses[item - 1]);
        setTarget(true);
        break;
      case 1:
        setIbody(body[item - 1]);

        break;
      case 2:
        setIeye(eyes[item - 1]);

        break;
      case 3:
        setIhair(hair[item - 1]);

        break;
      case 4:
        setImouth(mouth[item - 1]);

        break;
      case 5:
        setIeyebrows(eyebrows[item - 1]);

        break;
      case 6:
        setIclothes1(clothes1[item - 1]);

        break;
      case 7:
        setIclothes2(clothes2[item - 1]);

        break;
      case 8:
        setIclothes3(clothes3[item - 1]);

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

  return (
    <div>
      <Header />
      <div className="container">
        <Model handleClick={randomize} item={skin} />
        <List handleClick={handleClick} target={target} />
      </div>
    </div>
  );
}

export default Main;
