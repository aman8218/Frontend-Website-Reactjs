import React from 'react';
import './Body.css';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export function Body() {
    return (
        <>
            <Navbar />
            <div className="body-container">
                <div className="me-p">
                    <span>
                        <img src='assets/MotionArtEffect-logo.png' className='logo-img' alt='Motion Art Effect Logo' />
                    </span>
                    <button className='btn'>Purchase Now</button>
                </div>
                <div className="ci">
                    <div className="left">
                        <span style={{ color: "linear-gradient(90deg, #F87516 0%, #5E11FF 100%)" }}>Transform Your Website</span>
                        <p>With Motion Art Effect</p>
                    </div>
                    <div className="right">
                        <p>Attract Your Visitors Attention With Colorful </p>
                        <p className='p2'>Motion Art Effect</p>
                        <br />
                    </div>
                    <div className="para">
                        <p>Unleash the power of creativity with Motionbr Art for Elementor - your <br />
                            ultimate solution for seamlessly integrating captivating animations into
                            <br />your website.</p>
                    </div>
                    <br />
                </div>
                <div className="review">
                    <p>Trusted by thousands of users around the world</p>
                </div>
                <div className="star">
                    <div className="e">
                        <img src="/assets/motionarteffect-img2.png" alt="" className='icon' />
                        <div className="i-c">
                            <img src="assets/motionarteffect-img4.png" alt="" className='str' />
                            <p className='i-p'>4.5 Score, 9 Reviews</p>
                        </div>
                    </div>
                    <div className="g">
                        <img src="/assets/motionarteffect-img1.png" alt="" className='icon' />
                        <div className="i-c">
                            <img src="assets/motionarteffect-img4.png" alt="" className='str' />
                            <p className='i-p'>4.5 Score, 9 Reviews</p>
                        </div>
                    </div>
                    <div className="w">
                        <img src="/assets/motionarteffect-img3.png" alt="" className='icon' />
                        <div className="i-c">
                            <img src="assets/motionarteffect-img4.png" alt="" className='str' />
                            <p className='i-p'>4.5 Score, 9 Reviews</p>
                        </div>
                    </div>
                </div>

                <div className="purchase-info">
                    <div className="p-info">
                        <h1>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h1>
                        <p className='info-para'>
                            Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.
                        </p>
                        <button className='p-btn'> Purchase From Envato &nbsp;&nbsp;--&gt;</button>
                    </div>
                    <div className="p-img">
                        <img src="assets/motionarteffect-img5.png" alt="" className='m-img' />
                    </div>
                </div>

                <div className="applysection">

                    <div className='applyinfo'>
                        <p>Apply On Any Section Or Enable For &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp; Whole Page</p>
                    </div>
                    <br />
                    <div className="cards">
                        <div className="card1 section">
                            <div className="card-info">
                                <h2>Apply On Section</h2>
                                <br />
                                <p>Apply on section is a game-changer, offering an unparalleled way to manage
                                    applications directly from your website. </p>
                            </div>
                            <div className="card-img">
                                <img src="assets/motionarteffect-img11.png" alt="" />
                            </div>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="card2 page">
                            <div className="card-info">
                                <h2>Apply On Page</h2>
                                <p>Take your website to new heights with Motion Art for Elementor. Embrace the
                                    power of motion and animation.</p>
                            </div>
                            <br /><br />
                            <div className="card-img">
                                <img src="assets/motionarteffect-img10.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sup-browser">
                    <div className="browsers">
                        <div className="b-info">
                            <h2>Supported by All Browsers</h2>
                            <br />
                            <p>Rest assured, Motion Art is designed to be 
                               <br /> compatible with all major web browsers.</p>
                        </div>
                        <div className="b-img">
                                    <img src="assets/motionarteffect-img8.png" alt="" />
                                </div>
                    </div>
                </div>

                <div className="plugin">
                    <div className="plugin-info">
                        <h2>An All-Round Plugin With Powerful Features</h2><br />
                        <p>Whether you're a seasoned web designer or just starting out, Motion Art for 
                           Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
                    </div>
                    <div className="plugin-cards">
                        <div className="p-card1 pc"> 
                        <div className="pc-img">
                            <img src="assets/motionarteffect-img9.png" alt="" />
                        </div>
                        <div className="pc-info">
                            <h2>Light Weight</h2><br />
                            <p>Motion Art for Elementor is designed to be lightweight. </p>
                        </div>
                        </div>
                        <div className="p-card2 pc"> 
                        <div className="pc-img">
                            <img src="assets/motionarteffect-img6.png" alt="" />
                        </div>
                        <div className="pc-info">
                        <h2>100% Responsive</h2><br />
                            <p>Create a consistent visual experience across all devices.</p>
                        </div>
                        </div>
                        <div className="p-card3 pc">
                        <div className="pc-img">
                            <img src="assets/motionarteffect-img7.png" alt="" />
                        </div>
                        <div className="pc-info">
                        <h2>User Friendly Interface</h2><br />
                            <p>Ensure a smooth experience for both applicants and administrators.</p>
                        </div>
                             </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
