import React from 'react'
import DefaultLayout from '../../../src/DefaultLayout/DefaultLayout'
import DashBoardNavbar from '../../components/DashboardNavbar/DashboardNavbar'
import '../../styles/EditMarketer.css'
import { Link } from 'react-router-dom'

const EditMarketer = () => {
  return (
    <>
      <div className="Dashboard-section">
        <DefaultLayout />
        <div className="dashboard-right-content">
          <DashBoardNavbar />
          <div className="dashboard-details">
            <div className="view-marketing-section">
              <h4 className="form-details-title">
                Register Marketing Consultant
              </h4>
              <div className="edit-marketing-profile">
                <p className="edit-marketing-name">A.A</p>
              </div>
              <p className="profile-text">Profile</p>
              <div className="add-consultant-form view-marketing-form">
                <form className="form">
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
                        class="form-input"
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
                        class="form-input"
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
                        class="form-input"
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
                        class="form-input"
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
                        class="form-input"
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
                      class="form-select  select-gender"
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
                      class="form-input form-address-text"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                </form>
                <Link to="/edit-marketer">
                  <div className="update-marketer-button">
                    <button className="create-button">UPDATE MARKERTER</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditMarketer
