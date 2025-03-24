import React, { useState, useEffect } from "react";
//import { auth, db } from "../firebase";
//import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
//import Sidebar from "../components/Sidebar";
import WeatherWidget from "../components/weather";
import NewsWidget from "../components/news";
import StocksWidget from "../components/stock";
//import Calculator from "../components/Calculator";
//import Checklist from "../components/Checklist";
import { onAuthStateChanged } from "firebase/auth";
import "../index.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [usersList, setUsersList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/login");
      } else {
        setUser(currentUser);
      }
    });

    return () => unsubscribe(); 
  }, [navigate]);

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      setUsersList(querySnapshot.docs.map((doc) => doc.data()));
    };

    if (user) fetchUsers();
  }, [user]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Welcome, {user.email}</h1>
        <p>User ID: {user.uid}</p>

        <h2>Registered Users</h2>
        <ul className="users-list">
          {usersList.map((usr, index) => (
            <li key={index}>{usr.email}</li>
          ))}
        </ul>

        <div className="widgets-container">
          <WeatherWidget />
          <NewsWidget />
          <StocksWidget />
          <Calculator />
          <Checklist />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;