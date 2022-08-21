import React, { useState } from "react";
import {
  Table,
  Space,
  Tag,
  Modal,
  DatePicker,
  Radio,
  Checkbox,
  Divider,
  TimePicker,
  Input,
  Select,
  Button
} from "antd";
import "./style.scss";

import Search from "../../assets/img/search.png";
import Filter from "../../assets/img/filter.png";

import EditImg from "../../assets/img/edit.png"; 


const { Option } = Select;

const CheckboxGroup = Checkbox.Group;

export default function CaiDat() {
  const columnsCaiDat = [
    {
      title: "STT",
      dataIndex: "name",
      key: "name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Mã gói",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Tên gói vé",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Ngày áp dụng",
      key: "timein",
      dataIndex: "timein",
    },
    {
      title: "Ngày hết hạn",
      dataIndex: "timeout",
      key: "timeout",
    },
    {
      title: "Giá vé (VNĐ/Vé)",
      dataIndex: "checkin",
      key: "Cổng 1",
    },
    {
      title: "Giá Combo (VNĐ/Combo)",
      dataIndex: "combo",
      key: "combo",
    },
    {
      title: "Tình trạng",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 11 ? "green" : "geekblue";

            if (tag === "Tắt") {
              color = "red";
            }

            return (
              <Tag color={color} key={tag}>
                {tag}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "",
      dataIndex: "capnhat",
      key: "capnhat",
      render: (text) => (
        <div className="capnhat" id="capnhat" onClick={showModal1}>
          <img src={EditImg} alt="11" /> <span>{text}</span>
        </div>
      ),
    },
  ];
  const dataCaiDat = [
    {
      key: "1",
      name: "1",
      age: "ALT20210501",
      address: "Gói gia đình",
      tags: ["Đang áp dụng"],
      timein: "14/04/2021",
      timeout: "14/04/2021",
      checkin: "90.000 VNĐ",
      combo: "360.000 VNĐ/4 Vé",
      capnhat: "Cập nhật",
    },
    {
      key: "2",
      name: "2",
      age: "ALT20210501",
      address: "Gói sự kiện",
      tags: ["Tắt"],
      timein: "14/04/2021",
      timeout: "14/04/2021",
      checkin: "20.000 VNĐ",
      combo: "",
      capnhat: "Cập nhật",
    },
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  
  const showModal1 = () => {
    setIsModalVisible1(true);
  };

  const handleOk1 = () => {
    setIsModalVisible1(false);
  };

  const handleCancel1 = () => {
    setIsModalVisible1(false);
  };


  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const onChange1 = (time, timeString) => {
    console.log(time, timeString);
  };


  return (
    <div className="content">
      <h1>Danh sách gói vé</h1>
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
          <a href="#" className="buttom__filter">
            <span>Xuất file (.csv)</span>
          </a>
          <a className="buttom__filter themgoive" onClick={showModal}>
            <span>Thêm gói vé</span>
          </a>
        </div>
      </div>
      <Table
        className="TicketList"
        dataSource={dataCaiDat}
        columns={columnsCaiDat}
      />

      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <div className="button_wrapper">
            <Button key="back" onClick={handleOk} className="button">
              Hủy
            </Button>
            <Button key="back" onClick={handleCancel} className="button_fill">
              Lưu
            </Button>
          </div>,
        ]}
      >
        <div className="modal_capnhat">
          <h3 className="title-modal">Thêm gói vé</h3>

          <div className="modal_capnhat-info">
            <div className="info__con">
              <p>Mã sự kiện</p>
              <p>PKG20210502</p>
            </div>
            <div className="info__con">
              <p>Tên sự kiện</p>
              <p>Hội chợ triển lãm hàng tiêu dùng 2021</p>
            </div>
          </div>

          <div className="modal_locve-date">
            <div className="date_loc">
              <p>Ngày áp dụng</p>
              <DatePicker className="date-picker" onChange={onChange} />
              <TimePicker onChange={onChange1} />
            </div>
            <div className="date_loc">
              <p>Ngày hết hạn</p>
              <DatePicker className="date-picker" onChange={onChange} />
              <TimePicker onChange={onChange1} />
            </div>
          </div>

          <div className="modal_locve-check">
            <h3>Giá vé áp dụng</h3>

            <CheckboxGroup>
              <div className="capnhat__group">
                <Checkbox value={1}>Vé lẻ (vnđ/vé) với giá</Checkbox>
                <Input
                  placeholder="Giá vé"
                  disabled
                  className="input__capnhat"
                />
                <span>/ Vé</span>
              </div>
              <div className="capnhat__group">
                <Checkbox value={2}>Combo vé với giá</Checkbox>
                <Input
                  placeholder="Giá vé"
                  disabled
                  className="input__capnhat"
                />
                <span>/</span>
                <Input
                  placeholder="Giá vé"
                  disabled
                  className="input__capnhat last"
                />
                <span>Vé</span>
              </div>
            </CheckboxGroup>
          </div>

          <div>
            <h3>Tình trạng</h3>
            <Select
              defaultValue="lucy"
              style={{
                width: 180,
              }}
            >
              <Option value="jack">Đang áp dụng</Option>
              <Option value="lucy">Đã áp dụng</Option>
              <Option value="Yiminghe">Tắt</Option>
            </Select>
          </div>
        </div>
      </Modal>

      {/* Modal 2 */}

      <Modal
        visible={isModalVisible1}
        onOk={handleOk1}
        onCancel={handleCancel1}
        footer={[
          <div className="button_wrapper">
            <Button key="back" onClick={handleOk1} className="button">
              Hủy
            </Button>
            <Button key="back" onClick={handleCancel1} className="button_fill">
              Lưu
            </Button>
          </div>,
        ]}
      >
        <div className="modal_capnhat">
          <h3 className="title-modal">Cập nhật thông tin gói vé</h3>

          <div className="modal_capnhat-info">
            <div className="info__con">
              <p>Mã sự kiện</p>
              <p>PKG20210502</p>
            </div>
            <div className="info__con">
              <p>Tên sự kiện</p>
              <p>Hội chợ triển lãm hàng tiêu dùng 2021</p>
            </div>
          </div>

          <div className="modal_locve-date">
            <div className="date_loc">
              <p>Ngày áp dụng</p>
              <DatePicker className="date-picker" onChange={onChange} />
              <TimePicker onChange={onChange1} />
            </div>
            <div className="date_loc">
              <p>Ngày hết hạn</p>
              <DatePicker className="date-picker" onChange={onChange} />
              <TimePicker onChange={onChange1} />
            </div>
          </div>

          <div className="modal_locve-check">
            <h3>Giá vé áp dụng</h3>

            <CheckboxGroup>
              <div className="capnhat__group">
                <Checkbox value={1}>Vé lẻ (vnđ/vé) với giá</Checkbox>
                <Input
                  placeholder="Giá vé"
                  disabled
                  className="input__capnhat"
                />
                <span>/ Vé</span>
              </div>
              <div className="capnhat__group">
                <Checkbox value={2}>Combo vé với giá</Checkbox>
                <Input
                  placeholder="Giá vé"
                  disabled
                  className="input__capnhat"
                />
                <span>/</span>
                <Input
                  placeholder="Giá vé"
                  disabled
                  className="input__capnhat last"
                />
                <span>Vé</span>
              </div>
            </CheckboxGroup>
          </div>

          <div>
            <h3>Tình trạng</h3>
            <Select
              defaultValue="lucy"
              style={{
                width: 180,
              }}
            >
              <Option value="jack">Đang áp dụng</Option>
              <Option value="lucy">Đã áp dụng</Option>
              <Option value="Yiminghe">Tắt</Option>
            </Select>
          </div>
        </div>
      </Modal>
    </div>
  );
}
