import "./style.scss";
import logo from "./../../assets/img/logo.png";
import home from "./../../assets/img/home.png";
import setting from "./../../assets/img/setting.png";
import ticket from "./../../assets/img/ticket.png";
import invoice from "./../../assets/img/invoice.png";
import list from "./../../assets/img/list.png";
import monitor from "./../../assets/img/monitor.png";

function HeaderMenu() {
  return (
    <div className="header__menu">
      <img src={logo} alt="logo" />
      <ul className="list__menu">
        <li>
          <a href="g.com">
            <img src={home} alt="home" />
            <p>Trang chủ</p>
          </a>
        </li>
        <li>
          <a href="g.com">
            <img src={ticket} alt="home" />
            <p>Quản lý vé</p>
          </a>
        </li>
        <li>
          <a href="g.com">
            <img src={invoice} alt="home" />
            <p>Đối soát vé</p>
          </a>
        </li>
        <li>
          <a href="g.com">
            <img src={list} alt="home" />
            <p>Danh sách sự kiện</p>
          </a>
        </li>
        <li>
          <a href="g.com">
            <img src={monitor} alt="home" />
            <p>Quản lý thiết bị</p>
          </a>
        </li>
        <li>
          <a href="g.com">
            <img src={setting} alt="home" />
            <p>Cài đặt</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default HeaderMenu;
