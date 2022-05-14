import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";
import { FadeTransform } from "react-animation-components";

export default function SalaryList(props) {
  const { staffs } = props;

  return (
    <div className="row">
      {staffs.map((staff) => {
        return (
          <div className="col-sm-12 col-md-6 col-lg-4" key={staff.id}>
            <FadeTransform
              in
              transformProps={{
                exitTransform: "scale(0.5) translateY(-50%)"
              }}
            >
              <Card className="mt-4">
                <CardBody>
                  <Link to={`/home/${staff.id}`}>
                    <CardTitle className="display-6 text_green">
                      {staff.name}
                    </CardTitle>
                  </Link>
                  <CardText>Mã nhân viên: {staff.id}</CardText>
                  <CardText>Hệ số lương: {staff.salaryScale}</CardText>
                  <CardText>Số giờ làm thêm: {staff.overTime}</CardText>
                  <CardText className="salary_text">
                    Lương : {staff.salary.toLocaleString().replace(/,/g, ",")}{" "}
                    VNĐ
                  </CardText>
                </CardBody>
              </Card>
            </FadeTransform>
          </div>
        );
      })}
    </div>
  );
}
