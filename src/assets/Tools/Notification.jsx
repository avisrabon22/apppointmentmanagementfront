import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Display success notification
const notifySuccess = (msg) => {
    toast.success(msg, {
      position: 'top-right', // Position of the notification
      autoClose: 2000, // Duration for which the notification is displayed (in milliseconds)
      hideProgressBar: false, // Whether to display a progress bar
      closeOnClick: true, // Close the notification when clicked
      pauseOnHover: true, // Pause auto close on hover
      draggable: true, // Allow the notification to be dragged
    });
  };
  
  // Display error notification
  const notifyError = (msg) => {
    toast.error(msg, {
      position: 'bottom-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

    export { notifySuccess, notifyError };