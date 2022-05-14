import React from "react";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";
import { Link } from "react-router-dom";
import EditStaffModal from "./EditStaffModalComponent";
import staffImage from "../img/developer-team.png";

export default function StaffList(props) {
  const { staffs, handleDeleteStaff, handleEditStaff, handleResetForm } = props;

  return (
    <section>
      <div className="row">
        {staffs.map((staff) => {
          return (
            <div
              className="col-6 col-sm-6 col-md-4 col-lg-2 detail "
              key={staff.id}
            >
              <Link to={`/home/${staff.id}`}>
                <Card className="mt-4">
                  <CardImg src={staffImage} alt={staff.name} />

                  <CardBody>
                    <CardTitle>{staff.name}</CardTitle>
                  </CardBody>
                </Card>
              </Link>
              <div className="card_edit">
                <div className="btn_edit ">
                  <EditStaffModal
                    buttonLabel={"Sửa"}
                    staff={staff}
                    handleEditStaff={handleEditStaff}
                    handleResetForm={handleResetForm}
                  />
                </div>
                <div className="btn_delete ">
                  <Button
                    color="danger"
                    onClick={() => handleDeleteStaff(staff.id)}
                  >
                    Xóa
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
