import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer>
        <Container>
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <h4>Địa chỉ</h4>
              <h5>122 Cộng Hòa , Tân Bình , TP.HCM</h5>
              <ul>
                <li>
                  <i className="fa fa-fax m-2" />
                  092833635
                </li>
                <li>
                  <i className="fa fa-phone m-2" />
                  07262536238
                </li>
                <li>
                  <i className="fa fa-envelope m-2" />
                  quanlynhanvien@gmail.com
                </li>
              </ul>
            </div>
            <div className="col-md-12 col-lg-6">
              <ul className="listIcon">
                <li>
                  <Link to="#">
                    <i className="fab fa-facebook-f" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-google-plus-g" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-youtube" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <p className="text_white">Copyright 2021 by Dao Long Thinh</p>
        </Container>
      </footer>
    </div>
  );
}
