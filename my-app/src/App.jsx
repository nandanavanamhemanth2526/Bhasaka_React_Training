import './App.css'
import EnquiryFormValidation from './Pages/Enquiry/EnquiryForm Validation'
import Home from './Pages/Home'
import GetApiTest from './Pages/GetApiTest'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ContactUs from './Pages/ContactUS';
import AboutUS from './Pages/AboutUs';

const router = createBrowserRouter([
    {
        path : "/",
        element : <Home/>
    },
     {
        path : "/contact-us",
        element : <ContactUs/>
    },
     {
        path : "/get-api",
        element : <GetApiTest/>
    }
])

function App() {

  return (
    <>
      {/* <Home /> */}
      {/* <Enquiry />
      <EnquiryUncontrolled /> */}
      {/* <EnquiryControlled /> */}
      {/* <EnquiryOptimized /> */}
      {/* <EnquiryFormValidation /> */}
      
      <RouterProvider router={router}/>
      
    </>
  )
}

export default App
