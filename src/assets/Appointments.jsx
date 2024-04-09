
    import { useEffect, useState } from 'react';
  
        export const Appointments = () => {
            const [appointments, setAppointments] = useState([]);
            const API_URL = 'https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/appointments';

            useEffect(() => {
                // Fetch appointments from an API or database
                // Replace the API_URL with your actual API endpoint
                fetch(API_URL)
                    .then(response => response.json())
                    .then(data => setAppointments(data))
                    .catch(error => console.error(error));
            }, []);

            return (
                <div>
                    <h1 className="flex justify-center text-xl">Welcome to your appointment dashboard</h1>
                    <table flex justify-center>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Location</th>
                                <th>Doctor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map(appointment => (
                                <tr key={appointment.id}>
                                    <td>{appointment.date}</td>
                                    <td>{appointment.time}</td>
                                    <td>{appointment.location}</td>
                                    <td>{appointment.doctor}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        }

