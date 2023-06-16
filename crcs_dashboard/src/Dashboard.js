import BottomBar from "./BottomBar";
import Card from "./Card";
import './Dashboard.css';
import Navbar from "./Navbar";

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="card-container">
                <Card value="100" label="Registered Societies" route="/SocietiesTable"/>
                <Card value="18" label="States in India" route="/StatesPieChart"/>
                <Card value="13" label="Sectors" route="/SectorsPieChart"/>
            </div>
            <div className="dashboard-links">
                <div className="dashboard-links-content">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><button><a href="https://cooperation.gov.in/user/login">Login</a></button></li>
                        <li><button><a href="https://mscs.dac.gov.in/Form1.aspx" >Register New Society</a></button></li>
                        <li><button><a href="https://mscs.dac.gov.in/LiquidationList.aspx">Liquidation List</a></button></li>
                        <li><button><a href="/StackedBarChart">State Wise Sector Distribution</a></button></li>
                        <li><button><a href="/YearWiseChart" >Year Wise Registrations</a></button></li>
                    </ul>
                </div>
            </div>
            <BottomBar />
        </>
    )
};

export default Dashboard;
