import React from 'react'
import DefaultLayout from '../../DefaultLayout/DefaultLayout'
import DashBoardNavbar from '../../components/DashboardNavbar/DashboardNavbar'
import '../../styles/AddNewConsultant.css'
import { Link } from 'react-router-dom'

const AddNewConsultant = () => {
  return (
    <div>
      <div className="Dashboard-section">
        <DefaultLayout />
        <div className="dashboard-right-content">
          <DashBoardNavbar />
          <div className="dashboard-details">
            <div className="dashboard-form-details">
              <h4 className="form-details-title">
                Register Marketing Consultant
              </h4>
              <div className="add-consultant-form">
                <form>
                  <div class="form-group row">
                    <label
                      for="inputEmail3"
                      class="col-sm-2 col-form-label label-title"
                    >
                      Firstname
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control "
                        id="inputEmail3"
                        placeholder="firstname"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="inputPassword3"
                      class="col-sm-2 col-form-label label-title"
                    >
                      Lastname
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        id="inputPassword3"
                        placeholder=" Lastname"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="inputPassword3"
                      class="col-sm-2 col-form-label label-title"
                    >
                      Username
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        id="inputPassword3"
                        placeholder="Username"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="inputPassword3"
                      class="col-sm-2 col-form-label label-title"
                    >
                      Phone No
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control"
                        id="inputPassword3"
                        placeholder="Phone No"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="inputPassword3"
                      class="col-sm-2 col-form-label label-title"
                    >
                      Email
                    </label>
                    <div class="col-sm-10">
                      <input
                        type="email"
                        class="form-control"
                        id="inputPassword3"
                        placeholder="email"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="inputPassword3"
                      class="col-sm-2 col-form-label label-title"
                    >
                      Gender
                    </label>
                    <select
                      class="form-select form-select-gender"
                      aria-label="Default select example"
                    >
                      <option selected> Select Gender</option>
                      <option value="1">Female</option>
                      <option value="2">Male</option>
                    </select>
                  </div>
                  <div class="form-group row">
                    <label
                      for="exampleFormControlTextarea1 "
                      className="address-title"
                    >
                      Address
                    </label>
                    <textarea
                      class="form-control form-address"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                </form>
                <Link to="/edit-marketer">
                  <div className="create-marketer-button">
                    <button className="create-button">CREATE MARKETER</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddNewConsultant
