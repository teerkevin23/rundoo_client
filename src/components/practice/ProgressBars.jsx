import React from 'react';

import "./practice.css";

import ProgressBar from "./ProgressBar";
const ProgressBars = () => {
  return (
    <div className={"wrapper"}>
      <ProgressBar value={0} />
      <ProgressBar value={25} />
      <ProgressBar value={50} />
      <ProgressBar value={75} />
      <ProgressBar value={100} />
      <ProgressBar value={2} />
      <ProgressBar value={-10} />
      <ProgressBar value={120} />
    </div>
  );
}
export default ProgressBars;