import React from 'react';


import fb from './assets/facebook.png'
import insta from './assets/instagram.png'
import map from './assets/google-maps.png'
import logo from './assets/logo.png'
import rating from './assets/rating.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <a href="https://velvetbitescafe.com/" target="_blank">
                <img id="logo" src={logo} alt="Facebook" />
            </a>
            <h4 className='msg'>
                *Follow us on Facebook & Instagram, share/comment, and leave a Google review for a 10% discount.
            </h4>
            <div className="mainDiv">
                <div>




                    <a href="https://www.facebook.com/velvetbitess" target="_blank">
                        <div className='button'>
                            <img src={fb} alt="Facebook" /> Facebook
                        </div>
                    </a>


                    <br />
                    <a href="https://www.google.com/maps/place/Velvet+Bites/@23.861551,90.3918552,691m/data=!3m1!1e3!4m18!1m9!3m8!1s0x3755c50010d285cd:0xf2575cfd87cd3643!2sVelvet+Bites!8m2!3d23.8615461!4d90.3944301!9m1!1b1!16s%2Fg%2F11vk8zvxhg!3m7!1s0x3755c50010d285cd:0xf2575cfd87cd3643!8m2!3d23.8615461!4d90.3944301!9m1!1b1!16s%2Fg%2F11vk8zvxhg?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D" target="_blank">
                        <div className='button'>
                            <img src={map} alt="Map" />  Google
                        </div>
                    </a>

                    <br />
                    <a href="https://www.instagram.com/velvetbites__?igsh=MXY1aGJzYnRleDB4cQ%3D%3D" target="_blank">
                        <div className='button'>
                            <img src={insta} alt="Insta" /> Instagram
                        </div>
                    </a>

                    <br />
                    <Link to="/rating"> <div className='button'>
                            <img src={rating} alt="rating" /> Rating
                        </div></Link>

                </div>



            </div>
        </>


    );
};

export default Navbar;