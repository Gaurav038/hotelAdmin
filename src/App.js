import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from './context/AuthContext';
import Login from "./pages/login/Login"
import Home from './pages/home/Home';
import List from "./pages/list/List.js";
import { bookingColumns, hotelColumns,  userColumns } from './datatablesource';
import NewUser from './pages/newUser/NewUser';
import NewHotel from './pages/newHotel/NewHotel';
import "./app.css"

function App() {


  const ProtectedRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    if(!user){
      return <Navigate to="/login" />;
    }
    return children;

  }
  return (
    <div className="app">
     <BrowserRouter>
     <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={userColumns } />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewUser />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="hotels">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={hotelColumns } />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoute>
                    <NewHotel />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="booking">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={bookingColumns } />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
