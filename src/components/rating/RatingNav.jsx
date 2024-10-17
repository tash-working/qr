import React from 'react';
import { Link } from 'react-router-dom';

const RatingNav = () => {
    return (
        <div>
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
    );
};

export default RatingNav;