import React, { useState } from 'react';
import "./rating.css"


const Rating = () => {
    const [feedbackData, setFeedbackData] = useState({
        foodQuality: '',
        overallServiceQuality: '',
        cleanliness: '',
        orderAccuracy: '',
        speedOfService: '',
        value: '',
        overallExperience: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(feedbackData); // Log the feedback data to the console
        // You can also send this data to a server for further processing
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
            <h3>Customer Feedback Form</h3>
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
                            <p htmlFor="overall-experience-dissatisfied">Dissatisfied</p>
                        </div>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>


    );

};

export default Rating;