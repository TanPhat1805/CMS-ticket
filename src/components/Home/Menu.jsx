import React from "react";
import { NavLink } from "react-router-dom";

import "../Home/Menu.scss";
// import "../../App.css";

// import logo
import logo from "./../../assets/img/insight-05.png";
import icon1 from "./../../assets/icons/Vector.svg";
import icon2 from "./../../assets/icons/Vector2.svg";
import icon3 from "./../../assets/icons/Vector3.svg";
import icon4 from "./../../assets/icons/Vector4.svg";

export default function Menu() {
  return (
    <div className="Menu_wrapper">
    <div className="Menu">
      <div>
        <div className="Logo__insight">
          <img className="Logo" src={logo} alt="insight logo" />
        </div>

        <div className="Menu__list">
          <ul className="Frame__list">
            <li>
              <NavLink className="Tag__block" to="/Home">
                <img className="icon__home" src={icon1} alt="123" />
                <span>Trang chủ</span>
              </NavLink>
            </li>

            <li>
              <NavLink className="Tag__block" to="/Manage">
                <img className="icon" src={icon2} alt="123" />
                <span>Quản lý vé</span>
              </NavLink>
            </li>

            <li>
              <NavLink className="Tag__block" to="/soatve">
                <img className="icon" src={icon3} alt="123" />
                <span>Đổi soát vé</span>
              </NavLink>
            </li>

            <li>
              <NavLink className="Tag__block" to="/caidat">
                <img className="icon" src={icon4} alt="123" />
                <span>Cài đặt</span>
              </NavLink>
            </li>

            <ul className="Sub__tag">
              <li>
                <a className="Tag__block" href="#">
                  Gói dịch vụ
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
      </div>
      <p className="copyright">Copyright &#169; 2020 Alta Software </p>
    </div>
  );
}
