import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Salary from "./SalaryComponent";
import Department from "./DepartmentComponent";
import StaffDetail from "./StaffDetailComponent";
import StaffByDepartment from "./StaffByDepartmentComponent";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { actions } from "react-redux-form";
import Swal from "sweetalert2";

import {
  fetchDepartments,
  fetchStaffs,
  fetchStaffsSalary,
  postNewStaff,
  deleteStaff,
  updateStaff,
  fetchStaffsByDepartment
} from "../Redux/ActionCreators";

import { useDispatch, useSelector } from "react-redux";

const Main = () => {
  //get id from Department
  const [Id, setId] = useState("");
  const getId = (id) => {
    setId(id);
  };
  //get state
  const STAFFS = useSelector((state) => state.staffs.staffs);
  const DEPARTMENTS = useSelector((state) => state.departments.departments);
  const STAFFSSALARY = useSelector((state) => state.staffs.staffsSalary);

  //get state
  const dispatch = useDispatch();
  const location = useLocation();
  const [resultSearch, setResultSearch] = useState([]);

  //fetch API staffs , department
  useEffect(() => {
    dispatch(fetchStaffs());
    dispatch(fetchDepartments());
    dispatch(fetchStaffsSalary());
  }, [dispatch]);

  // const idddd = getId();
  // console.log(idddd);

  useEffect(() => {
    dispatch(fetchStaffsByDepartment(Id));
  }, [Id, dispatch]);
  //
  //handle Add Staff
  const handleAddStaff = (newStaff) => {
    const {
      overTime,
      name,
      doB,
      departmentId,
      salaryScale,
      startDate,
      annualLeave,
      image
    } = newStaff;
    const id = STAFFS.length + 1;
    dispatch(
      postNewStaff(
        id,
        overTime,
        name,
        doB,
        departmentId,
        salaryScale,
        startDate,
        annualLeave,
        image
      )
    );
  };
  //handle Delete Staff
  const handleDeleteStaff = (id) => {
    Swal.fire({
      title: "Bạn có chắc không ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy"
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteStaff(id));
      }
    });
  };
  //handle Edit Staff
  const handleEditStaff = (staff) => {
    dispatch(updateStaff(staff));
  };
  //handle Search Staff
  const handleSearch = (value) => {
    if (value) {
      setResultSearch(
        STAFFS.filter((staff) =>
          staff.name.toUpperCase().includes(value.toUpperCase())
        )
      );
    } else {
      setResultSearch([]);
    }
  };
  const handleResetForm = () => {
    dispatch(actions.reset("staff"));
  };

  //
  //custom component
  const StaffWithId = ({ match }) => {
    return (
      <StaffDetail
        staff={STAFFS.filter(
          (staff) => staff.id === parseInt(match.params.staffId, 10)
        )}
      />
    );
  };
  //custom component
  return (
    <>
      <Header />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={300}>
          <Switch location={location}>
            <Route
              exact
              path="/home"
              render={() => (
                <Home
                  staffs={STAFFS}
                  handleSearch={handleSearch}
                  resultSearch={resultSearch}
                  handleAddStaff={handleAddStaff}
                  departments={DEPARTMENTS}
                  handleDeleteStaff={handleDeleteStaff}
                  handleEditStaff={handleEditStaff}
                  handleResetForm={handleResetForm}
                />
              )}
            />
            <Route path="/home/:staffId" component={StaffWithId} />
            <Route
              exact
              path="/department"
              render={() => <Department departments={DEPARTMENTS} />}
            />
            <Route
              path="/department/:departmentId"
              render={() => <StaffByDepartment getId={getId} />}
            />
            <Route
              path="/salary"
              render={() => <Salary staffs={STAFFSSALARY} />}
            />
            <Redirect to="/home" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </>
  );
};

export default Main;
