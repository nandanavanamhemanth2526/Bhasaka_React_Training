import './App.css'
import EnquiryFormValidation from './Pages/Enquiry/EnquiryForm Validation'
import Home from './Pages/Home/Home'
import GetApiTest from './Pages/GetApi/GetApiTest'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ContactUs from './Pages/ContactUs/ContactUS';
import AboutUS from './Pages/AboutUs/AboutUs';
import Layout from './Components/Layout/Layout';
import EnquiryOptimized from './Pages/Enquiry/EnquiryOptimized'
import ArticleDetails from './Pages/ArticleDetails/ArticleDetails';
import AppContextProvider from './Components/AppContextProvider/AppContextProvider';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';

const router = createBrowserRouter([
     {
        element : <Layout/>,
        children : [
          {
              path : "/",
              element : <Home/>
          },
          {
              path : "/articles",
              element : <GetApiTest/>
          },
          {
              path : "/articles/:articleId",
              element : <ArticleDetails/>
          },
          {
              path : "/contact-us",
              element : <ContactUs/>
          },
          {
              path : "/get-api",
              element : <GetApiTest/>
          },
          {
              path : "/enquiry",
              element : <EnquiryOptimized/>
          },
          {
              path : "/about-us",
              element : <AboutUS/>
          },
          {
              path : "/dashboard",
              element : <Dashboard/>
          },
          {
              path : "/login",
              element : <Login/>
          }
        ]
    },
    
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
        
      <AppContextProvider>
        <RouterProvider router={router}/>
      </AppContextProvider>
      
    </>
  )
}

export default App
