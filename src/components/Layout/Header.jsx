import React from "react";
import { Col, Row } from "antd";
import "../css/Header.css"
import "../Home/Menu.scss"

import icon1 from "../../assets/img/mail.png"
import icon2 from "../../assets/img/bell.png"
// import avt from "../../assets/icons/avt.png"
import Search from "../../assets/img/search.png" 


// const { Search } = Input;  

export default function Home() {
  return (
    <div className="header">
      <div className="header_wrapper">
        <div>
          <div className="Search">
            <input
              className="Search__text"
              type="search"
              placeholder="Search"
            />
            <button className="Search__btn">
              <img className="SearchIcon" src={Search} alt="12" />{" "}
            </button>
          </div>
        </div>
        <div>
          <div className="AccMailNoti">
            <ul>
              <li>
                <img src={icon1} alt="12" />
              </li>
              <li>
                <img src={icon2} alt="12" />
              </li>
              <li className="Account"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
