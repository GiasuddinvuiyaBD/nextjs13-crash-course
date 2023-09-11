'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import Courses from "./conponents/courses";
import LoadingPage from "./loading";

const HomePage = () => 
{
  const [courses, setCourses] = useState([]); 
  const [loading, setLoading] = useState(true);


  useEffect(() => 
  {
    const fetchCourses =( async () => 
    {
      const res = await fetch(`http://localhost:3000/api/courses`);
      const data = await res.json(); 
      setCourses(courses);
      setLoading(false)
    }); 
    fetchCourses();
  }, [])

  if(loading === true)
  {
    <LoadingPage />
  }

  return(
    <>  
      <Courses courses={courses} />
    </>
  )
}
export default HomePage;

