import React from 'react';
import { Table, Radio, DatePicker, Space, Button } from "antd";

import './style.scss'

import { dataSoatVe } from "./../data";
import { columnsSoatVe } from "./../data";

import Search from "../../assets/img/search.png";


const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px",
};



const onChange = (date, dateString) => {
  console.log(date, dateString);
};

function SoatVe() {
	return (
    <div className="soatve">
      <div className="content">
        <h1>Danh sách vé</h1>
        {/* <input className='SearchList' type="search" placeholder='Search' /> <img className='SearchIcon' src={Search} /> */}
        <div className="content__filter">
          <div className="Search">
            <input
              className="Search__text"
              type="search"
              placeholder="Tìm bằng số vé"
            />
            <button className="Search__btn search-custom">
              <img className="SearchIcon" src={Search} alt="12" />{" "}
            </button>
          </div>
          <div className="filter__icon">
            <a href="#" className="buttom__filter soatve">
              Chốt đối soát
            </a>
          </div>
        </div>
        <Table
          className="TicketList"
          dataSource={dataSoatVe}
          columns={columnsSoatVe}
        />
      </div>
      <div className="soatve__filter">
        <h1 className='title_1'>Lọc vé</h1>
        <div className="radio-wrapper">
          <div>
            <p className="locve-title">Tình trạng đối soát</p>
          </div>
          <div>
            <Radio.Group name="radiogroup" defaultValue={1}>
              <Radio className="radio-button" value={1}>
                Tất cả
              </Radio>
              <Radio className="radio-button" value={2}>
                Đã đối soát
              </Radio>
              <Radio className="radio-button" value={3}>
                Chưa đối soát
              </Radio>
            </Radio.Group>
          </div>
        </div>
        <div className="radio-wrapper">
          <div>
            <p className="locve-title">Loại vé</p>
          </div>
          <div>
            <p>Vé cổng</p>
          </div>
        </div>
        <div className="radio-wrapper">
          <div>
            <p className="locve-title">Từ ngày</p>
          </div>
          <div>
            <DatePicker className="date-picker" onChange={onChange} />
          </div>
        </div>
        <div className="radio-wrapper">
          <div>
            <p className="locve-title">Đến ngày</p>
          </div>
          <div>
            <DatePicker className="date-picker" onChange={onChange} />
          </div>
        </div>
        <div className="filter-button">
          <Button className='button_loc'>Lọc</Button>
        </div>
      </div>
    </div>
  );
}

export default SoatVe;
