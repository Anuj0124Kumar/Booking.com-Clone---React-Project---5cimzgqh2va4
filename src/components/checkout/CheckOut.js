import React from 'react'
import './checkout.css';

export default function CheckOut() {
    return (
        <form >
            <div className="main">
                <div className="midContainer">
                    <span className="head">CheckOut</span>
                    <span className="rupees">Rs</span>
                    <div className="innerContainer">
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Room No:
                                <span class="badge bg-primary rounded-pill">114</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Room charge per day:
                                <span class="badge bg-primary">1200</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                No of days:
                                <span class="badge bg-primary ">0</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Total room charge:
                                <span class="badge bg-primary">0</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                GST charge:
                                <span class="badge bg-primary">299</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center text">
                                Total payment:
                                <span class="badge bg-primary bill">0</span>
                            </li>
                        </ul>
                    </div>
                    <h3 className="payment">Payment Information</h3>
                    <div className="lowerContainer">
                        <label htmlFor="" className="nameCard">Name on card:</label>
                        <br />
                        <input type="text" className="nameEnter" />
                    </div>
                    <div className="lowerContainer">
                        <label htmlFor="" className="nameCard">Card number:</label>
                        <br />
                        <input type="text" className="nameEnter" />
                    </div>
                    <div className="lowerContainer">
                        <label htmlFor="" className="nameCard">Expires on:</label>
                        <br />
                        <select className="nameEnter">
                            <option>January</option>
                            <option>february</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>august</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                        </select>
                        <input type="text" maxLength="4" className="nameEnter" placeholder='year' />
                        <br />
                        <div className="lowerContainer">
                            <label htmlFor="" className="nameCard">CVV number:</label>
                            <br />
                            <input type="password" className="nameEnter" />
                            <br />
                            <button className="btnn my-3">Payment Securely</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
