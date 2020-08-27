import React from 'react';
import './CourseDetails.css';

const CourseDetails = (props) => {
       console.log(props)
    
      const{name,price}=props.courseDetails;
    return (
        <div className="courseDetails mt-5">
            
            <h4 className="font-weight-bolder font-italic">{name}</h4>
           
           <p> $ {price}</p>
           <button
           onClick={() =>props.handleEnrolCourse(props.courseDetails)}
           className="enrol-button btn btn-success">enroll now</button>
        </div>
    );
};

export default CourseDetails;