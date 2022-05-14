import React from "react";
import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody
} from "reactstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import image from "../img/developer-team.png";

export default function StaffDetail(props) {
  const { name, doB, startDate, annualLeave, overTime, departmentId } =
    props.staff[0] || "";

  const renderName = (departmentId) => {
    const obj = {
      Dept01: "Sale",
      Dept02: "HR",
      Dept03: "Marketing",
      Dept04: "IT",
      Dept05: "Finance"
    };
    for (let key in obj) {
      if (departmentId === key) {
        return obj[key];
      }
    }
  };

  return (
    <section id="staff">
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{name}</BreadcrumbItem>
        </Breadcrumb>
        <div id="staffDetail">
          <h1>Thông tin nhân viên</h1>
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-3">
              <img src={image} className="img-fluid" alt="" />
            </div>
            <div className="col-sm-12 col-md-8 col-lg-9">
              <Card>
                <CardBody>
                  <dl className="row">
                    <dt className="col-6">Họ và tên: </dt>
                    <dd className="col-6">{name}</dd>
                    <dt className="col-6">Ngày sinh: </dt>
                    <dd className="col-6">
                      {moment(doB).format("DD/MM/YYYY")}
                    </dd>
                    <dt className="col-6">Ngày vào công ty: </dt>
                    <dd className="col-6">
                      {moment(startDate).format("DD/MM/YYYY")}
                    </dd>
                    <dt className="col-6">Phòng ban: </dt>
                    <dd className="col-6">{renderName(departmentId)}</dd>
                    <dt className="col-6">Số ngày nghỉ còn lại: </dt>
                    <dd className="col-6">{annualLeave}</dd>
                    <dt className="col-6">Số ngày làm thêm: </dt>
                    <dd className="col-6">{overTime}</dd>
                  </dl>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
