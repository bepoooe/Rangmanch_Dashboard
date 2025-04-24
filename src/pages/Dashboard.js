.dashboard-container {
  display: flex;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f9f9f9;
}

.sidebar {
  background-color: #0a2540;
  color: white;
  width: 250px;
  padding: 25px;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.sidebar h2 {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 1.4rem;
  color: #61dafb;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  padding: 12px 15px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 4px;
}

.sidebar li:hover {
  color: #61dafb;
  background-color: rgba(97, 218, 251, 0.1);
}

.sidebar li.active {
  font-weight: bold;
  color: #61dafb;
  background-color: rgba(97, 218, 251, 0.15);
}

.main-content {
  flex-grow: 1;
  padding: 30px;
  overflow-y: auto;
}

.main-content h1 {
  margin-top: 0;
  margin-bottom: 25px;
  color: #0a2540;
}

.top-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin-bottom: 25px;
}

.card, .chart-container, .metric, .projects, .activity {
  background-color: #ffffff;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.card:hover, .chart-container:hover, .metric:hover, .projects:hover, .activity:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.card h3, .chart-container h3, .metric h3, .projects h3, .activity h3 {
  margin-top: 0;
  color: #0a2540;
  font-size: 1.1rem;
  margin-bottom: 15px;
}

.growth {
  font-weight: bold;
  margin-top: 10px;
  display: flex;
  align-items: center;
}

.growth:before {
  content: '';
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
}

.positive {
  color: #2ecc71;
}

.positive:before {
  background-color: #2ecc71;
}

.negative {
  color: #e63946;
}

.negative:before {
  background-color: #e63946;
}

.relevant {
  color: #f39c12;
}

.relevant:before {
  background-color: #f39c12;
}

.charts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  margin-bottom: 25px;
}

.metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 25px;
  margin-bottom: 25px;
}

.metric {
  text-align: center;
}

.metric .value {
  font-size: 2rem;
  font-weight: bold;
  color: #0a2540;
  margin: 10px 0;
}

.progress {
  background-color: #61dafb;
  color: #0a2540;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 0.8em;
  margin-left: 10px;
  display: inline-block;
  font-weight: bold;
}

.cancelled {
  background-color: #e63946;
  color: white;
}

.completed {
  background-color: #2ecc71;
  color: white;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .charts {
    grid-template-columns: 1fr;
  }
  
  .sidebar {
    width: 220px;
    padding: 20px;
  }
}

@media (max-width: 768px) {
  .dashboard-container {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    padding: 15px;
  }
  
  .sidebar ul {
    display: flex;
    overflow-x: auto;
    padding-bottom: 10px;
  }
  
  .sidebar li {
    padding: 10px 15px;
    margin-right: 10px;
    margin-bottom: 0;
    white-space: nowrap;
  }
  
  .main-content {
    padding: 20px 15px;
  }
  
  .top-cards, .metrics {
    grid-template-columns: 1fr;
    gap: 15px;
  }
}