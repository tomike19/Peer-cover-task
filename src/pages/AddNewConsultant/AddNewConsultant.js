import React from 'react'
import DefaultLayout from '../../DefaultLayout/DefaultLayout'
import DashBoardNavbar from '../../components/DashboardNavbar/DashboardNavbar'

const AddNewConsultant = () => {
  return (
    <div>
      <div className="Dashboard-section">
        <DefaultLayout />
        <div className="dashboard-right-content">
          <DashBoardNavbar />
          <div className="dashboard-details">
            <div className="dashboard">
              <h4>Register Marketing Consultants</h4>
              <form>
                <div class="form-group row">
                  <label for="inputEmail3" class="col-sm-2 col-form-label">
                    Email
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail3"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputPassword3" class="col-sm-2 col-form-label">
                    Password
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword3"
                      placeholder="Password"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddNewConsultant
