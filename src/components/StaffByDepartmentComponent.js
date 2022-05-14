import React from "react";
import {
  Card,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
  Container,
  Row
} from "reactstrap";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
import image from "../img/developer-team.png";

export default function StaffByDepartment(props) {
  const { getId } = props;
  const { departmentId } = useParams();
  getId(departmentId);
  const staffs = useSelector((state) => state.staffs.staffsByDepartment);

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
    <section id="department">
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/department">Phòng ban</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>{renderName(departmentId)}</BreadcrumbItem>
        </Breadcrumb>
        <div id="staffDetail">
          <h1>Danh sách nhân viên </h1>
          {staffs
            ? staffs.map((staff) => {
                return (
                  <Row className="mt-4" key={staff.id}>
                    <div className="col-sm-12 col-md-4 col-lg-3">
                      <img src={image} className="img-fluid" alt="" />
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-9">
                      <Card>
                        <CardBody>
                          <dl className="row">
                            <dt className="col-6">Họ và tên: </dt>
                            <dd className="col-6">{staff.name}</dd>
                            <dt className="col-6">Ngày sinh: </dt>
                            <dd className="col-6">
                              {moment(staff.doB).format("DD/MM/YYYY")}
                            </dd>
                            <dt className="col-6">Ngày vào công ty: </dt>
                            <dd className="col-6">
                              {moment(staff.startDate).format("DD/MM/YYYY")}
                            </dd>
                            <dt className="col-6">Phòng ban: </dt>
                            <dd className="col-6">
                              {renderName(departmentId)}
                            </dd>
                            <dt className="col-6">Số ngày nghỉ còn lại: </dt>
                            <dd className="col-6">{staff.annualLeave}</dd>
                            <dt className="col-6">Số ngày làm thêm: </dt>
                            <dd className="col-6">{staff.overTime}</dd>
                          </dl>
                        </CardBody>
                      </Card>
                    </div>
                  </Row>
                );
              })
            : ""}
        </div>
      </Container>
    </section>
  );
}
