import React, { useEffect, useState } from 'react';
import Feedback from './feedback/Feedback';
import { Link } from 'react-router-dom';

const Feedbacks = () => {
    const [ratings, setRatings] = useState([]);
    const getDelete = (data) =>{
        console.log(data);
       
        const newRatings = ratings.filter(obj => obj._id !== data.rating._id);
        setRatings(newRatings)
        
    }
    
  useEffect(() => {

    const fetchData = async () => {
   
      try {
        const response = await fetch(
          `https://server-08ld.onrender.com/get_rating`
        //   `http://localhost:5000/get_rating`
        );
        if (!response.ok) {
          throw new Error(
            `Network response was not ok (status ${response.status})`
          );
        }
        const data = await response.json();

        setRatings(data);
        
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

    return (
        <div>
            <Link to="/rating">
            <button   style={{
                margin:"5px",
                            padding: "10px",
                            style:"none",
                            border:"none",
                            fontSize: "20px",
                            cursor: "pointer"

                        }}>Back</button>
            </Link>
            {
                ratings.map(rating=>(
                    <Feedback getDelete={getDelete} key={rating._id} rating={rating}></Feedback>
                ))
            }
        </div>
    );
};

export default Feedbacks;