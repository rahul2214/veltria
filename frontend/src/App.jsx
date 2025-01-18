import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/Authcontext';
import MainNavbar from './pages/mainPage/navbar/index';// Import your main navbar component
import SkeletonLoader from './skeletonLoader';

// Lazy loading components
const Home = React.lazy(() => import('./pages/home/Home'));
const Login = React.lazy(() => import('./pages/login/Login'));
const CreateEmployee = React.lazy(() => import('./pages/createEmployee/createEmployee'));
const EmployeeList = React.lazy(() => import('./pages/listEmployees.jsx/ListEmployees'));
const HomePage = React.lazy(() => import('./pages/mainPage/homePage/index'));
const Jobs = React.lazy(() => import('./pages/mainPage/careers'));
const WorkShopList = React.lazy(() => import('./pages/listWorkShop/listWorkShop'));
const CreateWorkShop = React.lazy(() => import('./pages/createWorkShop/createWorkShop'));
const HomePageWorkShopList = React.lazy(() => import('./pages/mainPage/workShops'));
const Services = React.lazy(() => import('./pages/mainPage/services/index'));
const AboutUs = React.lazy(() => import('./pages/mainPage/aboutus/index'));
const Contact = React.lazy(() => import('./pages/mainPage/contact/index'));
const Blogs = React.lazy(() => import('./pages/mainPage/blogs'));
const JobDetails = React.lazy(() => import('./pages/mainPage/jobdetails'));

function App() {
  const { authUser } = useAuthContext();

  return (
    <div>
      {/* Fallback loader for lazy loading */}
      <Suspense fallback={<SkeletonLoader />}>
        <Routes>
          {/* Authenticated routes */}
          <Route path='/dashboard' element={authUser ? <Home /> : <Navigate to="/login" />} />
          <Route path='/createJob' element={<CreateEmployee />} />
          <Route path='/employeeList' element={authUser ? <EmployeeList /> : <Navigate to="/login" />} />
          <Route path='/workshopList' element={authUser ? <WorkShopList /> : <Navigate to="/login" />} />
          <Route path='/createWorkShop' element={authUser ? <CreateWorkShop /> : <Navigate to="/login" />} />

          {/* Public routes with MainNavbar */}
          <Route
            path='/'
            element={
                <MainNavbar />
            }
          >
            <Route index element={<HomePage />} />
            <Route path='jobs' element={<Jobs />} />
            <Route path='services' element={<Services />} />
            <Route path='aboutus' element={<AboutUs />} />
            <Route path='contact' element={<Contact />} />
            <Route path='blog' element={<Blogs />} />
            <Route path='workshops' element={<HomePageWorkShopList />} />
            <Route path='job-details/:id' element={<JobDetails />} />
          </Route>

          {/* Login route */}
          <Route path='/login' element={authUser ? <Navigate to="/dashboard" /> : <Login />} />
        </Routes>
      </Suspense>
      <Toaster />
    </div>
  );
}

export default App;
