import React from 'react'
import DefaultLayout from '../../../src/DefaultLayout/DefaultLayout'
import DashBoardNavbar from '../../../src/DashboardNavbar/DashboardNavbar'
import '../../styles/DefaultLayout.css'

const DashBoardLayout = () => {
  return (
    <div>
      <div className="Dashboard-section">
        <DefaultLayout />
        <div className="dashboard-right-content">
          <DashBoardNavbar />
          <div className="dashboard-details">
            <div className="dashboard-table">
              <h1>Marketing Consultants</h1>
              <div className="dashboard-button-flex">
                <button className="dashboard-button">
                  <i class="bi bi-plus dashboard-plus-button"></i>
                  <p>Add New Marketing Consultant</p>
                </button>
              </div>
              <div className="dashboard-table-details">
                <div className="dashboard-search-input">
                  <input placeholder="Search" className="search-input" />
                  <i class="bi bi-search search-icon"></i>
                </div>
                <table>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone no</th>
                    <th>Username</th>
                    <th></th>
                    <th></th>
                  </tr>
                  <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>kolajoelizabeth@gmail.com</td>
                    <td>08106827158</td>
                    <td>08106827158</td>
                    <td>
                      <i class="bi bi-trash-fill trash-icon"></i>
                    </td>
                    <td>
                      <i class="bi bi-chevron-right trash-icon"></i>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DashBoardLayout
