import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/Authcontext';
import CreateEmployee from './pages/createEmployee/createEmployee';
import EmployeeList from './pages/listEmployees.jsx/ListEmployees';
import HomePage from './pages/mainPage/homePage/index';
import Jobs from './pages/mainPage/careers';
import WorkShopList from './pages/listWorkShop/listWorkShop';
import CreateWorkShop from './pages/createWorkShop/createWorkShop';
import HomePageWorkShopList from './pages/mainPage/workShops';
import Services from './pages/mainPage/services/index';
import AboutUs from './pages/mainPage/aboutus/index';
import Contact from './pages/mainPage/contact/index';
import Blogs from './pages/mainPage/blogs';
import JobDetails from './pages/mainPage/jobdetails';

function App() {
  const { authUser } = useAuthContext();

  return (
    <div >
      
        <Routes>
          <Route path='/dashboard' element={authUser ? <Home /> : <Navigate to={"/login"}/>} />
        <Route path='/createJob' element={<CreateEmployee />} />
        <Route path='/employeeList' element={authUser ? <EmployeeList /> : <Navigate to={"/login"} />} />
        <Route path='/workshopList' element={authUser ? <WorkShopList /> : <Navigate to={"/login"} />} />
        <Route path='/createWorkShop' element={authUser ? <CreateWorkShop /> : <Navigate to={"/login"} />} />


        <Route path='/login' element={authUser ? < Navigate to='/dashboard' /> : <Login />} />
        {/* <Route path='/signup' element={authUser ? < Navigate to='/dashboard'/> : <SignUp />} /> */}
        <Route path='/' element={<HomePage />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/blog' element={<Blogs />} />

        <Route path="/job-details/:id" element={<JobDetails />} />        
                <Route path='/workshops' element={<HomePageWorkShopList />} />


          
          
        </Routes>
        <Toaster />
      
    </div>
  );
}

export default App;
