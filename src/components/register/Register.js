import React from 'react'
import Navbar from '../navbar/Navbar'
import './register.css';

export default function Register({ type }) {
    return (
        <>
            <Navbar />
            <form>
                <div className='mainContainer'>

                    <div className="middleContainer">
                        {type === "list" ?
                            <h2 className="Heading">SignUp</h2>
                            :
                            <h2 className="Heading">Enter your registered Email and Password</h2>
                        }
                        {type == "list" ? <div className="childContainer">
                            <label htmlFor="name" className="label">Name:</label>
                            <br />
                            <input type="text" className="inputContainer" id='name' name="name" required />

                        </div>
                            :
                            <></>
                        }
                        <div className="childContainer">
                            <label htmlFor="log" className="label">Email Id:</label>
                            <br />
                            <input type="email" className="inputContainer" id='mail' name="email" required />
                        </div>
                        <div className="childContainer">
                            <label htmlFor="password" className="label">Password:</label>
                            <br />
                            <input type="password" id='password' name='password' className="inputContainer" required />
                        </div>
                        {type === "list" ?
                            <div className="childContainer">
                                <button className="btn">SignIn</button>
                            </div>

                            :
                            <div className="childContainer">
                                <button className="btn">LogIn</button>
                            </div>
                        }
                    </div>
                    {type === "list" ? <div className="card text-center" style={{ "width": "18rem" }}>
                        <p>By signing in or creating  an account, you agree with our <span style={{ "color": "blue" }}> Term & Conditions </span> and <span style={{ "color": "blue" }}>Privacy Statement</span></p>
                    </div>
                        :
                        <></>
                    }
                    <div className="card text-center" style={{ "width": "18rem" }}>
                        <p>All rights reserved. Copyright (2006-2023) -<span style={{ "color": "blue" }}> BOOKING.COM</span> </p>
                    </div>

                </div>
            </form>
        </>
    )
}
