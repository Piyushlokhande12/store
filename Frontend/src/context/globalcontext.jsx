// // src/context/GlobalContext.jsx
// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const GlobalContext = createContext();

// const GlobalProvider = ({ children }) => {
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;

//   const [materials, setMaterials] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const axiosInstance = axios.create({
//     baseURL: backendUrl,
//   });

//   // Example: Get all materials
//   const fetchMaterials = async () => {
//     setLoading(true);
//     try {
//       const res = await axiosInstance.get("/user/signup");
//       setMaterials(res.data);
//     } catch (err) {
//       console.error("Failed to fetch materials:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMaterials();
//   }, []);

//   return (
//     <GlobalContext.Provider value={{ materials, loading, fetchMaterials }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };

// export default GlobalProvider;
