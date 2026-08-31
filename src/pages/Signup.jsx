import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import './Signup.css';

const Signup = () => {
    const [name, setName ] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const {signup} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await signup(name, email, password);
            navigate('/dashboard');
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }
    return(
        <div className="auth-container">
            <h2>Create Account</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="user@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? "Creating Account..." : "Sign Up"}
                </button>
            </form>
            <p>
                Already have an account? <Link to="/login">Login here</Link>
            </p>
        </div>
    );
};
export default Signup;

