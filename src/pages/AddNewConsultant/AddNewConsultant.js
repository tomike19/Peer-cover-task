import React from 'react'
import DefaultLayout from '../../DefaultLayout/DefaultLayout'
import DashBoardNavbar from '../../components/DashboardNavbar/DashboardNavbar'
import '../../styles/AddNewConsultant.css'
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
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddNewConsultant
