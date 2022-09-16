import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import SignUp from './Pages/Login/SignUp';
import Home from './Pages/Home/Home';
import { ToastContainer } from 'react-toastify';
import Footer from './Pages/Shared/Footer';
import NotFound from './Pages/Shared/NotFound';
import Login from './Pages/Login/Login';
import Product from './Pages/Home/Product';
import GetInTouch from './Pages/Home/GetInTouch';
import RequireAuth from './Pages/Shared/RequireAuth';
import ToolsDetails from './Pages/Tools/ToolsDetails';
import Parches from './Pages/Parches/Parches';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyOrder from './Pages/DashBoard/MyOrder';
import AddReview from './Pages/DashBoard/AddReview';
import Payment from './Pages/DashBoard/Payment';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>

        <Route path="/product" element={<Product />}></Route>
        <Route path="/getInTouch" element={<GetInTouch />}></Route>
        <Route path="/toolsDetails/:toolsId" element={<ToolsDetails />}></Route>

        <Route
          path="/parches/:parchesId"
          element={
            <RequireAuth>
              <Parches />
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashBoard />
            </RequireAuth>
          }
        >
          <Route
            index
            element={
              <RequireAuth>
                <MyOrder />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="addReview"
            element={
              <RequireAuth>
                <AddReview />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="payment/:paymentId"
            element={
              <RequireAuth>
                <Payment />
              </RequireAuth>
            }
          ></Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
