import React from 'react'
import DefaultLayout from '../../../src/DefaultLayout/DefaultLayout'
import DashBoardNavbar from '../../components/DashboardNavbar/DashboardNavbar'

const EditMarketer = () => {
  return (
    <>
      <div className="Dashboard-section">
        <DefaultLayout />
        <div className="dashboard-right-content">
          <DashBoardNavbar />
          <div className="dashboard-details">
              
          </div>
        </div>
      </div>
    </>
  )
}

export default EditMarketer
