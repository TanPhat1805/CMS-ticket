import React, {useState} from 'react';
import { Table, Space, Tag, Modal, DatePicker, Radio, Checkbox, Divider, Button} from "antd";
import './../style.scss';
import './style.scss';

import Search from "../../assets/img/search.png"; 
import Filter from "../../assets/img/filter.png"; 
export default function Manage() {
  const columns = [
    {
      title: "STT",
      dataIndex: "name",
      key: "name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Booking code",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Số vé",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tên sự kiện",
      dataIndex: "nameevent",
      key: "nameevent",
    },
    {
      title: "Tình trạng sử dụng",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 11 ? "green" : "geekblue";

            if (tag === "Hết hạn") {
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
      title: "Ngày sử dụng",
      key: "timein",
      dataIndex: "timein",
    },
    {
      title: "Ngày xuất vé",
      dataIndex: "timeout",
      key: "timeout",
    },
    {
      title: "Cổng check - in",
      dataIndex: "checkin",
      key: "Cổng 1",
      render: (text) => (
        <span className="_3cham">
          <span>{text}</span>
          <span className="_3cham" onClick={showModal1}>
            &#8285;
          </span>
        </span>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "1",
      age: "ALT20210501",
      address: "123456789034",
      nameevent: "Hội chợ triển lãm tiêu dùng 2021",
      tags: ["Chưa sử dụng"],
      timein: "14/04/2021",
      timeout: "14/04/2021",
      checkin: "cổng 1",
    },
    {
      key: "2",
      name: "2",
      age: "ALT20210501",
      address: "123456789034",
      nameevent: "Hội chợ triển lãm tiêu dùng 2021",
      tags: ["Hết hạn"],
      timein: "14/04/2021",
      timeout: "14/04/2021",
      checkin: "-",
    },
    {
      key: "3",
      name: "3",
      age: "ALT20210501",
      address: "123456789034",
      nameevent: "Hội chợ triển lãm tiêu dùng 2021",
      tags: ["Đã sử dụng"],
      timein: "14/04/2021",
      timeout: "14/04/2021",
      checkin: "-",
    },
    {
      key: "3",
      name: "3",
      age: "ALT20210501",
      address: "123456789034",
      nameevent: "Hội chợ triển lãm tiêu dùng 2021",
      tags: ["Đã sử dụng"],
      timein: "14/04/2021",
      timeout: "14/04/2021",
      checkin: "-",
    },
    {
      key: "3",
      name: "3",
      age: "ALT20210501",
      address: "123456789034",
      nameevent: "Hội chợ triển lãm tiêu dùng 2021",
      tags: ["Đã sử dụng"],
      timein: "14/04/2021",
      timeout: "14/04/2021",
      checkin: "cổng 1",
    },
    {
      key: "3",
      name: "3",
      age: "ALT20210501",
      address: "123456789034",
      nameevent: "Hội chợ triển lãm tiêu dùng 2021",
      tags: ["Đã sử dụng"],
      timein: "14/04/2021",
      timeout: "14/04/2021",
      checkin: "cổng 1",
    },
    {
      key: "3",
      name: "3",
      age: "ALT20210501",
      address: "123456789034",
      nameevent: "Hội chợ triển lãm tiêu dùng 2021",
      tags: ["Đã sử dụng"],
      timein: "14/04/2021",
      timeout: "14/04/2021",
      checkin: "cổng 1",
    },
    {
      key: "3",
      name: "3",
      age: "ALT20210501",
      address: "123456789034",
      nameevent: "Hội chợ triển lãm tiêu dùng 2021",
      tags: ["Đã sử dụng"],
      timein: "14/04/2021",
      timeout: "14/04/2021",
      checkin: "cổng 1",
    },
    {
      key: "3",
      name: "3",
      age: "ALT20210501",
      address: "123456789034",
      nameevent: "Hội chợ triển lãm tiêu dùng 2021",
      tags: ["Đã sử dụng"],
      timein: "14/04/2021",
      timeout: "14/04/2021",
      checkin: "cổng 1",
    },
    {
      key: "3",
      name: "3",
      age: "ALT20210501",
      address: "123456789034",
      nameevent: "Hội chợ triển lãm tiêu dùng 2021",
      tags: ["Đã sử dụng"],
      timein: "14/04/2021",
      timeout: "14/04/2021",
      checkin: "cổng 1",
    },
    {
      key: "3",
      name: "3",
      age: "ALT20210501",
      address: "123456789034",
      nameevent: "Hội chợ triển lãm tiêu dùng 2021",
      tags: ["Đã sử dụng"],
      timein: "14/04/2021",
      timeout: "14/04/2021",
      checkin: "cổng 1",
    },
  ];

  const CheckboxGroup = Checkbox.Group;
  const plainOptions = [
    "Check all",
    "Cổng 1",
    "Cổng 2",
    "Cổng 3",
    "Cổng 4",
    "Cổng 5",
  ];
  const defaultCheckedList = ["Apple", "Orange"];

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

  // Modal 2
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

  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChanged = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
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
          <a className="buttom__filter" id="locve" onClick={showModal}>
            <img src={Filter} alt="icon filter" />
            <span>Lọc vé</span>
          </a>
          <a href="#" className="buttom__filter">
            <span>Xuất file (.csv)</span>
          </a>
        </div>
      </div>
      <Table className="TicketList" dataSource={data} columns={columns} />

      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <div className="button_wrapper">
            <Button key="back" onClick={handleCancel} className="button">
              Lọc
            </Button>
          </div>,
        ]}
      >
        <div className="modal_locve">
          <h3 className="title-modal">Lọc vé</h3>

          <div className="modal_locve-date">
            <div className="date_loc">
              <p>Từ ngày</p>
              <Space direction="vetical">
                <DatePicker className="date-picker" onChange={onChange} />
              </Space>
            </div>
            <div className="date_loc">
              <p>Đến ngày</p>
              <Space direction="vetical">
                <DatePicker className="date-picker" onChange={onChange} />
              </Space>
            </div>
          </div>

          <div className="modal_locve-status">
            <h3>Tình trạng sử dụng</h3>
            <Radio.Group name="radiogroup" defaultValue={1}>
              <Radio className="radio-button" value={1}>
                Tất cả
              </Radio>
              <Radio className="radio-button" value={2}>
                Đã sử dụng
              </Radio>
              <Radio className="radio-button" value={3}>
                Chưa sử dụng
              </Radio>
              <Radio className="radio-button" value={4}>
                Hết hạn
              </Radio>
            </Radio.Group>
          </div>

          <div className="modal_locve-check">
            <h3>Cổng Check-in</h3>

            <CheckboxGroup
              options={plainOptions}
              value={checkedList}
              onChange={onChanged}
            >
              <Checkbox
                indeterminate={indeterminate}
                onChange={onCheckAllChange}
                checked={checkAll}
              >
                Check all
              </Checkbox>
            </CheckboxGroup>
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
            <Button key="back" onClick={handleCancel1} className="button">
              Hủy
            </Button>
            ,
            <Button
              key="submit"
              type="primary"
              onClick={handleOk1}
              className="button_fill"
            >
              Lưu
            </Button>
            ,
          </div>,
        ]}
      >
        <div className="modal_doingay">
          <h3 className="title-modal">Đổi ngày sử dụng vé</h3>

          <div className="modal_doingay-so doingay">
            <p>Số vé</p>
            <p>PKG20210502</p>
          </div>

          <div className="modal_doingay-ten doingay">
            <p>Số vé</p>
            <p>Vé cổng - Gói sự kiện</p>
          </div>

          <div className="modal_doingay-name doingay">
            <p>Tên sự kiện</p>
            <p>Hội trợ triển lãm hàng tiêu dùng 2021</p>
          </div>
          <div className="modal_doingay-name doingay">
            <p>Hạn sử dụng</p>
            <DatePicker className="date-picker" onChange={onChange} />
          </div>
        </div>
      </Modal>
    </div>
  );
}