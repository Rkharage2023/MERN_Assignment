import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getAllCourses } from "../services/courseService";

function Home() {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    console.log("Home is loaded");
    getCourses();
  }, []);

  const getCourses = async () => {
    const token = sessionStorage.getItem('token')
    const result = await getAllCourses(token);
    console.log(result);

    if (result.status == "success") {
      setCourse(result.data);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <div className="row">
          {course.map((e) => (
            <div key={e.course_id} className="mt-3 col-3">
              <div className="card" style={{ width: "20rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{e.course_name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {e.description}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">₹ {e.fees}</h6>
                  <button className="btn btn-primary">Get</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
