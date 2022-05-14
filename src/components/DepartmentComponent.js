import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
  Container
} from "reactstrap";

import { Link } from "react-router-dom";
import { FadeTransform } from "react-animation-components";

export default function Department(props) {
  const departments = props.departments;

  return (
    <section id="department">
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>Dách sách phòng ban</BreadcrumbItem>
        </Breadcrumb>

        <h1>Danh sách phòng ban</h1>
        {departments ? (
          <div className="row">
            {departments.map((item, index) => {
              return (
                <div className="col-12 col-sm-12 col-md-6 col-lg-4" key={index}>
                  <Link to={`/department/${item.id}`}>
                    <FadeTransform
                      in
                      transformProps={{
                        exitTransform: "scale(0.5) translateY(-50%)"
                      }}
                    >
                      <Card className="m-1">
                        <CardBody>
                          <CardTitle>{item.name}</CardTitle>
                          <CardText>
                            Số lượng nhân viên: {item.numberOfStaff}
                          </CardText>
                        </CardBody>
                      </Card>
                    </FadeTransform>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </Container>
    </section>
  );
}
