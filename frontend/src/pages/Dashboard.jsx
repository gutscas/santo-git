import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white shadow-lg">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-7">
                            <div>
                                <a href="#" className="flex items-center py-4 px-2">
                                    <span className="font-semibold text-gray-500 text-lg">Dashboard</span>
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <button onClick={logout} className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-gray-200 transition duration-300">Log Out</button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container mx-auto mt-10 p-4">
                <h1 className="text-2xl font-bold">Welcome, {user?.username}!</h1>
                <p className="mt-4 text-gray-600">This is a protected dashboard page. Only logged-in users can see this.</p>
            </div>
        </div>
    );
};

export default Dashboard;
