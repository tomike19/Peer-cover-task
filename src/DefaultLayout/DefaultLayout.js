import React from "react";

import DashboardIcon from '@mui/icons-material/Dashboard'

const DefaultLayout = () => {
    return (
    <div>
      <div className="Default-layout">
        <nav className="Default-layout-section">
          <p className="dashboard-navigation__brand"> PC </p>
          <ul className="dashboard-navigation__list">
            <li className="dashboard-navigation-list-item">
              <a href="dashboard-navigation-link ">
                <DashboardIcon />
              </a>
              <p> DASHBOARD</p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
export default DefaultLayout