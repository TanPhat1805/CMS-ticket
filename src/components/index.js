// import Header from "./Header/Header";
import Menu from "./../components/Home/Menu";
// import HeaderMenu from "./HeaderMenu/HeaderMenu";
import SoatVe from "./SoatVe/SoatVe";
import Home from "./../components/Home/Home";
import Header from "./../components/Layout/Header";
import Manage from "./../components/Manage/Manage";
import CaiDat from "./../components/CaiDat/CaiDat";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './style.scss'

import "antd/dist/antd.css";


function GlobalStyle() {
	return (
    <div>
      <div className="global">
        <div className="global-left">
          <Menu />
        </div>
        <div className="global-right">
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/soatve" element={<SoatVe />} />
            <Route path="/caidat" element={<CaiDat />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default GlobalStyle;
