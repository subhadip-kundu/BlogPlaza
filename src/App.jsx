import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./Appwrite/userAuth.js";
import "./App.css";
import { login, logout } from "./Store/authSlice.js";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return !loading ? (
    <>
      <div>Going with the BlogPlaza</div>
    </>
  ) : null;
}

export default App;
