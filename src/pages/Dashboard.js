import React, { useState } from 'react';
import '../assets/styles/Dashboard.css';

const navItems = [
  { name: "Home", path: "/" },
  { name: "Analytics", path: "/analytics" },
  { name: "Billing", path: "/billing" },
  { name: "Profile", path: "/profile" },
];

function Dashboard() {
  const [activeNavItem, setActiveNavItem] = useState("Home");

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          {navItems.map((item) => (
            <li
              key={item.path}
              className={activeNavItem === item.name ? "active" : ""}
              onClick={() => setActiveNavItem(item.name)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </aside>
      <main className="main-content">
        <h1>{activeNavItem}</h1>
        <div className="placeholder-content">
          <p>
            This is the content for the {activeNavItem} section. You can add
            more dynamic content here.
          </p>
        </div>
        <div className="top-cards">
                <div className='card'>
                <h3>Card 1</h3>
                <p>Some data for the first card</p>
                <div className='growth positive'>+10%</div>
                </div>
                <div className='card'>
                <h3>Card 2</h3>
                <p>Some data for the second card</p>
                <div className='growth negative'>-5%</div>
                </div>
                <div className='card'>
                <h3>Card 3</h3>
                <p>Some data for the third card</p>
                <div className='growth relevant'>+2%</div>
                </div>
        </div>

        <div className="charts">
              <div className="chart-container">
                <h3>Chart 1</h3>
                <p>Placeholder for chart 1</p>
              </div>
              <div className="chart-container">
                <h3>Chart 2</h3>
                <p>Placeholder for chart 2</p>
              </div>
        </div>

        <div className="metrics">
            <div className="metric">
              <h3>Metric 1</h3>
              <div className="value">1,234</div>
              <div className='progress completed'>Completed</div>
            </div>
            <div className="metric">
              <h3>Metric 2</h3>
              <div className="value">567</div>
              <div className='progress cancelled'>Cancelled</div>
            </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;