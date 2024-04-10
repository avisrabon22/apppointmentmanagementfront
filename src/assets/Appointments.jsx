
import { useEffect, useState } from 'react';
import { Nav } from './NavBar/Nav';

export const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const API_URL = '';

    useEffect(() => {
        // Fetch appointments from an API or database
        // Replace the API_URL with your actual API endpoint
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setAppointments(data))
            .catch(error => console.error(error));
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
                                    <td className="p-2 border border-gray-300">{appointment.doctor}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

