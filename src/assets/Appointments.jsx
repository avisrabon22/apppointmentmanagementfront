
import { useEffect, useState } from 'react';
import { Nav } from './NavBar/Nav';
import { AppointmentsApi } from './Tools/Api';
import { notifyError } from './Tools/Notification';
import { useNavigate } from 'react-router-dom';

export const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate() ;
    useEffect(() => {
        if (!isLoggedIn) {
           return navigate('/');
    }
  },[]);
    
    useEffect(() => {
        // Fetch appointments from an API or database
        const getAppointments = async () => {
            try {
                const response = await AppointmentsApi();
                if(response.status === 200){
                    setIsLoggedIn(true);
                    const data = await response.data;
                    setAppointments(data);
                }
                else{
                    setIsLoggedIn(false);
                }
            }
            catch (error) {
                notifyError("Failed to fetch appointments! Please try again.");
            }
        };
        getAppointments();
    }, []);
    
    

    return (
            <>
            <Nav />
            <div>
                <h1 className="flex justify-center text-xl">Welcome to your appointment dashboard</h1>
                <div className="overflow-x-auto">
                    <table className="flex justify-center border-collapse border border-gray-300">
                        <thead>
                            <tr>
                                <th className="p-2 border border-gray-300">Date</th>
                                <th className="p-2 border border-gray-300">Time</th>
                                <th className="p-2 border border-gray-300">Event</th>
                                <th className="p-2 border border-gray-300">Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map(appointment => (
                                <tr key={appointment.id}>
                                    <td className="p-2 border border-gray-300">{appointment.date}</td>
                                    <td className="p-2 border border-gray-300">{appointment.time}</td>
                                    <td className="p-2 border border-gray-300">{appointment.location}</td>
                                    <td className="p-2 border border-gray-300">{appointment.purpose}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};