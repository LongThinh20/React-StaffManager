import React, { useState } from "react";
import { Container, Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import { Link } from "react-router-dom";
import SalaryList from "./SalaryListComponent";

export default function Salary(props) {
  const staffs = props.staffs;
  const [staffsLst, setStaffLst] = useState([...staffs]);
  const [activeIndex, setActiveIndex] = useState(1);

  const salaryBasic = 3000000;

  const handleSort = (index) => {
    if (index === 1) {
      setActiveIndex(1);
      return setStaffLst(staffsLst.sort((a, b) => b.id - a.id));
    }
    if (index === 2) {
      setActiveIndex(2);
      return setStaffLst(staffsLst.sort((a, b) => a.id - b.id));
    }
    if (index === 3) {
      setActiveIndex(3);
      return setStaffLst(
        staffsLst.sort((a, b) => {
          if (a.salaryScale > b.salaryScale) {
            return -1;
          }
          return 0;
        })
      );
    }
    if (index === 4) {
      setActiveIndex(4);
      setStaffLst(
        staffsLst.sort((a, b) => {
          if (a.salaryScale < b.salaryScale) {
            return -1;
          }
          return 0;
        })
      );
    }
  };

  return (
    <section id="salary">
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>Bảng lương</BreadcrumbItem>
        </Breadcrumb>

        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-3">
            <h1>Bảng lương</h1>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-9 ">
            <span className="text_gray font-weight-bold">Sắp xếp theo </span>
            <Button
              outline
              className={activeIndex === 1 ? "active m-1" : "m-1"}
              color="info"
              onClick={() => handleSort(1)}
            >
              Mã nhân viên giảm dần
            </Button>
            <Button
              outline
              className={activeIndex === 2 ? "active m-1" : "m-1"}
              color="info"
              onClick={() => handleSort(2)}
            >
              Mã nhân viên tăng dần
            </Button>
            <Button
              outline
              className={activeIndex === 3 ? "active m-1" : "m-1"}
              color="info"
              onClick={() => handleSort(3)}
            >
              Lương giảm dần
            </Button>
            <Button
              outline
              className={activeIndex === 4 ? "active m-1" : "m-1"}
              color="info"
              onClick={() => handleSort(4)}
            >
              Lương tăng dần
            </Button>
          </div>
        </div>
        <SalaryList staffs={staffsLst} salaryBasic={salaryBasic} />
      </Container>
    </section>
  );
}
