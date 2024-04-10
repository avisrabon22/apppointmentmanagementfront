import { Nav } from "./NavBar/Nav";

export const CreateAppointment = () => {
    return (
        <>
        <Nav />
        <div>
            <h1 className="flex justify-center text-xl">Create a new appointment</h1>
            <form className="flex justify-center flex-col items-center">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" name="date" className="border border-gray-300 p-2 m-2" />
                <label htmlFor="time">Time</label>
                <input type="time" id="time" name="time" className="border border-gray-300 p-2 m-2" />
                <label htmlFor="event">Event</label>
                <input type="text" id="event" name="event" className="border border-gray-300 p-2 m-2" />
                <label htmlFor="location">Location</label>
                <input type="text" id="location" name="location" className="border border-gray-300 p-2 m-2" />
                <button className="border border-blue-300 rounded-md py-2 px-6 m-2 hover:bg-blue-500">Create</button>
            </form>
        </div>
        </>
    );
}