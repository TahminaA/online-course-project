import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Course.css';
import CourseDetails from '../CourseDetails/CourseDetails';
import  OrderSummary from '../OrderSummary/OrderSummary';

const Course = () => {
    const data = fakeData;
    const [courses, setCourses] = useState(data)
    const [item,setItem]=useState([]);

    const handleEnrolCourse =(course) =>{
        const newItem=[...item,course]
        setItem(newItem);
      
    }
    

    

    return (
          
       
        <div className="main-container">
             <div>
                 
             </div>
            <div className="course-container">

                {
                    courses.map(course => <CourseDetails 
                    handleEnrolCourse={handleEnrolCourse}
                    courseDetails={course}
                    ></CourseDetails>)
                }


            </div>
            <div className="order-summary">
            <OrderSummary item={item}></OrderSummary>

            </div>
            

        </div>
    );
};

export default Course;