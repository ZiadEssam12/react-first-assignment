import React from "react";

import avatar from "./avataaars.svg";

export default function Home() {
  return (
    <div className="section home">
      <img className="avatar mb-3" src={avatar} alt="avatar" />
      <h2 className="pt-4 m-0">START FRAMEWORK</h2>
      <div className="seperator d-flex justify-content-center align-items-center my-3">
        <div className="line bg-white"></div>
        <div className="mx-3"><i class="fa-solid fa-star"></i></div>
        <div className="line bg-white"></div>
      </div>
      <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  );
}
