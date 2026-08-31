import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import './Dashboard.css';

const Dashboard = () => {
    const { user, logout } = useAuth();

    return(
        <div className="dashboard">
            <header className="dashboard-header">
                <div className="logo">AccountHub</div>
                <nav>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/settings">Settings</Link>
                    <button onClick={logout}>Logout</button>
                </nav>
            </header>
            <main>
                <div className="heading">
                    <h1>Welcome back, {user?.name || user?.email || "User"}!</h1>
                    <p>Here's an overview of your account</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <h3>ACCOUNT STATUS</h3>
                        <h2>ACTIVE</h2>
                    </div>
                    <div className="card">
                        <h3>EMAIL</h3>
                        <h2>{user?.email || "Not available"}</h2>
                    </div>
                    <div className="card">
                        <h3>MEMBER SINCE</h3>
                        <h2>Just now</h2>
                    </div>
                </div>
                <div className="quick">
                    <h2>Quick Actions</h2>
                    <div className="car">
                        <Link to="/settings">Edit profile</Link>
                        <Link to="/settings">Change Password</Link>
                    </div>
                </div>    
            </main>
        </div>
    )
}
export default Dashboard