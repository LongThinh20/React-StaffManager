import React, { useRef } from "react";
import {
  Jumbotron,
  Container,
  Button,
  InputGroup,
  InputGroupAddon,
  Input,
  Form
} from "reactstrap";

import team from "../img/developer-team.png";
import StaffList from "./StaffListComponent";
import AddStaffModal from "./AddStaffModalComponent";

export default function Home(props) {
  const {
    staffs,
    handleSearch,
    resultSearch,
    handleAddStaff,
    handleDeleteStaff,
    handleEditStaff,
    handleResetForm
  } = props;
  const inputRef = useRef(null);
  window.onclick = () => {
    handleSearch("");
  };

  const handleOnSubmit = (e) => {
    handleSearch(inputRef.current.value);
    e.preventDefault();
    document.getElementById("search").value = "";
  };

  if (staffs) {
    return (
      <section>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-md-6">
                <h1>Hệ thống</h1>
                <h2>Quản lý nhân viên</h2>
                <p className="text-white">
                  Chúng tôi mang đến cho bạn những giải phải về quản lý thông
                  tin nhân viên một cách hiệu quả.
                </p>
                <Button className="btn" type="submit">
                  Tìm hiểu thêm
                </Button>
              </div>
              <div className="img_bg col-12 col-md-6">
                <img src={team} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </Jumbotron>
        <div id="content">
          <Container>
            <h1>Danh sách nhân viên</h1>
            <div className="row">
              <div className="col-12 col-md-4">
                {" "}
                <AddStaffModal
                  buttonLabel={"THÊM NHÂN VIÊN"}
                  id={staffs.length}
                  staffs={staffs}
                  handleAddStaff={handleAddStaff}
                  handleResetForm={handleResetForm}
                />
              </div>
              <div className="col-12 col-md-8 col-lg-5">
                <Form onSubmit={handleOnSubmit}>
                  <InputGroup>
                    <Input
                      id="search"
                      className="mt-2"
                      placeholder="Nhập tên nhân viên muốn tìm ... "
                      innerRef={inputRef}
                    />
                    <InputGroupAddon addonType="prepend">
                      <Button
                        className="mt-2"
                        color="info btn_green"
                        type="submit"
                      >
                        <i className="fa fa-search" />
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </Form>
              </div>
            </div>
            {resultSearch.length === 0 ? (
              <StaffList
                staffs={staffs}
                handleDeleteStaff={handleDeleteStaff}
                handleEditStaff={handleEditStaff}
                handleResetForm={handleResetForm}
              />
            ) : (
              <StaffList
                staffs={resultSearch}
                handleDeleteStaff={handleDeleteStaff}
                handleEditStaff={handleEditStaff}
                handleResetForm={handleResetForm}
              />
            )}
          </Container>
        </div>
      </section>
    );
  }
}
