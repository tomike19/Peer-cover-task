import React from 'react'
import DefaultLayout from '../../src/components/dashboardLayout/Layout'
import AddIcon from '@mui/icons-material/Add'
import DashBoardNavbar from '../../src/components/DashboardNav/DashboardNavbar'
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
                  <AddIcon style={{ marginTop: '12px' }} />
                  <p>Add New Marketing Consultant</p>
                </button>
              </div>
              <div className="dashboard-table-details">div</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DashBoardLayout
