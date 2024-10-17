import React, { useEffect, useState } from 'react';
import "./rating.css"
import { Link, useParams } from 'react-router-dom';


const Rating = () => {
    const { id } = useParams()
    console.log(id);
    const [feedbackData, setFeedbackData] = useState({});
    useEffect(() => {

        const fetchData = async () => {
       
          try {
            const response = await fetch(
            //   `https://server-08ld.onrender.com/get_rating`
              `https://server-08ld.onrender.com/rating/${id}`
            );
            if (!response.ok) {
              throw new Error(
                `Network response was not ok (status ${response.status})`
              );
            }
            const data = await response.json();
    
            setFeedbackData(data)
           
            
          } catch (error) {
            console.error("Error fetching users:", error);
          }
        };
    
        fetchData();
      }, []);
   
  

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Check if any field is empty
        if (
            !feedbackData.foodQuality ||
            !feedbackData.overallServiceQuality ||
            !feedbackData.cleanliness ||
            !feedbackData.orderAccuracy ||
            !feedbackData.speedOfService ||
            !feedbackData.value ||
            !feedbackData.overallExperience ||
            !feedbackData.text
        ) {
            alert("Please fill out all required fields.");
            return; // Prevent form submission
        } 
            try {
                // await fetch(`https://server-08ld.onrender.com/set_rating/${id}`, {
                await fetch(`https://server-08ld.onrender.com/set_rating/${id}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(feedbackData),
                });
                setFeedbackData({
                     
                })
                document.getElementById('food-quality-excellent').checked = false;
                document.getElementById('food-quality-good').checked = false;
                document.getElementById('food-quality-average').checked = false;
                document.getElementById('food-quality-dissatisfied').checked = false;
                
                document.getElementById('overall-service-quality-excellent').checked = false;
                document.getElementById('overall-service-quality-good').checked = false;
                document.getElementById('overall-service-quality-average').checked = false;
                document.getElementById('overall-service-quality-dissatisfied').checked = false;

                document.getElementById('cleanliness-excellent').checked = false;
                document.getElementById('cleanliness-good').checked = false;
                document.getElementById('cleanliness-average').checked = false;
                document.getElementById('cleanliness-dissatisfied').checked = false;

                document.getElementById('order-accuracy-excellent').checked = false;
                document.getElementById('order-accuracy-good').checked = false;
                document.getElementById('order-accuracy-average').checked = false;
                document.getElementById('order-accuracy-dissatisfied').checked = false;

                document.getElementById('speed-of-service-excellent').checked = false;
                document.getElementById('speed-of-service-good').checked = false;
                document.getElementById('speed-of-service-average').checked = false;
                document.getElementById('speed-of-service-dissatisfied').checked = false;

                document.getElementById('value-excellent').checked = false;
                document.getElementById('value-good').checked = false;
                document.getElementById('value-average').checked = false;
                document.getElementById('value-dissatisfied').checked = false;

                document.getElementById('overall-experience-excellent').checked = false;
                document.getElementById('overall-experience-good').checked = false;
                document.getElementById('overall-experience-average').checked = false;
                document.getElementById('overall-experience-dissatisfied').checked = false;


                document.getElementById('text').value= "";

                console.log("Image uploaded and user data updated successfully!"); // Success message
            } catch (serverError) {
                console.error("Error updating user data:", serverError);
                alert(
                    "An error occurred while updating your images. Please try again."
                ); // More specific message
            }
        


    };

    const handleChange = (event) => {

        const { name, value } = event.target;
        setFeedbackData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div className="customer-feedback-form">
           <div>
           <Link to="/">
            <button   style={{
                margin:"5px",
                            padding: "10px",
                            style:"none",
                            border:"none",
                            fontSize: "20px",
                            cursor: "pointer"

                        }}>Back</button>
            </Link>
            <Link to="/feedbacks">
            <button   style={{
                margin:"5px",
                            padding: "10px",
                            style:"none",
                            border:"none",
                            fontSize: "20px",
                            cursor: "pointer"

                        }}>Feedbacks</button>
            </Link>
           </div>
            <h3>Customer Feedback Form({id})</h3>
            <h2>order bill {feedbackData.bill} TK</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <p className="titleLabel" htmlFor="food-quality">Food Quality</p>
                    <div className="inputDiv">
                        <div>
                            <input type="radio" id="food-quality-excellent" name="foodQuality" value="Excellent" onChange={handleChange} />
                            <label htmlFor="food-quality-excellent">Excellent</label>
                        </div>
                        <div>
                            <input type="radio" id="food-quality-good" name="foodQuality" value="Good" onChange={handleChange} />
                            <label htmlFor="food-quality-good">Good</label>
                        </div>
                        <div>
                            <input type="radio" id="food-quality-average" name="foodQuality" value="Average" onChange={handleChange} />
                            <label htmlFor="food-quality-average">Average</label>
                        </div>
                        <div>
                            <input type="radio" id="food-quality-dissatisfied" name="foodQuality" value="Dissatisfied" onChange={handleChange} />
                            <label htmlFor="food-quality-dissatisfied">Dissatisfied</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <p className="titleLabel" htmlFor="overall-service-quality">Overall Service Quality</p>
                    <div className="inputDiv">
                        <div>
                            <input type="radio" id="overall-service-quality-excellent" name="overallServiceQuality" value="Excellent" onChange={handleChange} />
                            <label htmlFor="overall-service-quality-excellent">Excellent</label>
                        </div>
                        <div>
                            <input type="radio" id="overall-service-quality-good" name="overallServiceQuality" value="Good" onChange={handleChange} />
                            <label htmlFor="overall-service-quality-good">Good</label>
                        </div>
                        <div>
                            <input type="radio" id="overall-service-quality-average" name="overallServiceQuality" value="Average" onChange={handleChange} />
                            <label htmlFor="overall-service-quality-average">Average</label>
                        </div>
                        <div>
                            <input type="radio" id="overall-service-quality-dissatisfied" name="overallServiceQuality" value="Dissatisfied" onChange={handleChange} />
                            <label htmlFor="overall-service-quality-dissatisfied">Dissatisfied</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <p className="titleLabel" htmlFor="cleanliness">Cleanliness</p>
                    <div className="inputDiv">
                        <div>
                            <input type="radio" id="cleanliness-excellent" name="cleanliness" value="Excellent" onChange={handleChange} />
                            <label htmlFor="cleanliness-excellent">Excellent</label>
                        </div>
                        <div>
                            <input type="radio" id="cleanliness-good" name="cleanliness" value="Good" onChange={handleChange} />
                            <label htmlFor="cleanliness-good">Good</label>
                        </div>
                        <div>
                            <input type="radio" id="cleanliness-average" name="cleanliness" value="Average" onChange={handleChange} />
                            <label htmlFor="cleanliness-average">Average</label>
                        </div>
                        <div>
                            <input type="radio" id="cleanliness-dissatisfied" name="cleanliness" value="Dissatisfied" onChange={handleChange} />
                            <label htmlFor="cleanliness-dissatisfied">Dissatisfied</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <p className="titleLabel" htmlFor="order-accuracy">Order Accuracy</p>
                    <div className="inputDiv">
                        <div>
                            <input type="radio" id="order-accuracy-excellent" name="orderAccuracy" value="Excellent" onChange={handleChange} />
                            <label htmlFor="order-accuracy-excellent">Excellent</label>
                        </div>
                        <div>
                            <input type="radio" id="order-accuracy-good" name="orderAccuracy" value="Good" onChange={handleChange} />
                            <label htmlFor="order-accuracy-good">Good</label>
                        </div>
                        <div>
                            <input type="radio" id="order-accuracy-average" name="orderAccuracy" value="Average" onChange={handleChange} />
                            <label htmlFor="order-accuracy-average">Average</label>
                        </div>
                        <div>
                            <input type="radio" id="order-accuracy-dissatisfied" name="orderAccuracy" value="Dissatisfied" onChange={handleChange} />
                            <label htmlFor="order-accuracy-dissatisfied">Dissatisfied</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <p className="titleLabel" htmlFor="speed-of-service">Speed of Service</p>
                    <div className="inputDiv">
                        <div>
                            <input type="radio" id="speed-of-service-excellent" name="speedOfService" value="Excellent" onChange={handleChange} />
                            <label htmlFor="speed-of-service-excellent">Excellent</label>
                        </div>
                        <div>
                            <input type="radio" id="speed-of-service-good" name="speedOfService" value="Good" onChange={handleChange} />
                            <label htmlFor="speed-of-service-good">Good</label>
                        </div>
                        <div>
                            <input type="radio" id="speed-of-service-average" name="speedOfService" value="Average" onChange={handleChange} />
                            <label htmlFor="speed-of-service-average">Average</label>
                        </div>
                        <div>
                            <input type="radio" id="speed-of-service-dissatisfied" name="speedOfService" value="Dissatisfied" onChange={handleChange} />
                            <label htmlFor="speed-of-service-dissatisfied">Dissatisfied</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <p className="titleLabel" htmlFor="value">Value</p>
                    <div className="inputDiv">
                        <div>
                            <input type="radio" id="value-excellent" name="value" value="Excellent" onChange={handleChange} />
                            <label htmlFor="value-excellent">Excellent</label>
                        </div>
                        <div>
                            <input type="radio" id="value-good" name="value" value="Good" onChange={handleChange} />
                            <label htmlFor="value-good">Good</label>
                        </div>
                        <div>
                            <input type="radio" id="value-average" name="value" value="Average" onChange={handleChange} />
                            <label htmlFor="value-average">Average</label>
                        </div>
                        <div>
                            <input type="radio" id="value-dissatisfied" name="value" value="Dissatisfied" onChange={handleChange} />
                            <label htmlFor="value-dissatisfied">Dissatisfied</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <p className="titleLabel" htmlFor="overall-experience">Overall Experience</p>
                    <div className="inputDiv">
                        <div>
                            <input type="radio" id="overall-experience-excellent" name="overallExperience" value="Excellent" onChange={handleChange} />
                            <label htmlFor="overall-experience-excellent">Excellent</label>
                        </div>
                        <div>
                            <input type="radio" id="overall-experience-good" name="overallExperience" value="Good" onChange={handleChange} />
                            <label htmlFor="overall-experience-good">Good</label>
                        </div>
                        <div>
                            <input type="radio" id="overall-experience-average" name="overallExperience" value="Average" onChange={handleChange} />
                            <label htmlFor="overall-experience-average">Average</label>
                        </div>
                        <div>
                            <input type="radio" id="overall-experience-dissatisfied" name="overallExperience" value="Dissatisfied" onChange={handleChange} />
                            <label htmlFor="overall-experience-dissatisfied">Dissatisfied</label>
                        </div>
                    </div>

                </div>
                <div className="form-group">
                    <textarea
                        id='text'
                        type="text"
                        placeholder="Enter text here"
                        name="text"

                        onChange={handleChange}
                        style={{
                            width: '100%',
                            height: '150px',
                            padding: '12px 20px',
                            boxSizing: 'border-box',
                            border: '2px solid #ccc',
                            borderRadius: '4px',
                            backgroundColor: '#f8f8f8',

                            resize: 'none'
                        }}
                    />
                </div>

                <button   style={{
                            padding: "10px",
                            style:"none",
                            border:"none",
                            fontSize: "20px",
                            cursor: "pointer"

                        }}type="submit">Submit</button>
            </form>
        </div>


    );

};

export default Rating;