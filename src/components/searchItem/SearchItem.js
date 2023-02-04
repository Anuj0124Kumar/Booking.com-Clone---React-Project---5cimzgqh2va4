import React from 'react'
import './searchItem.css'
import { useNavigate } from 'react-router-dom'

export default function SearchItem(props) {
    const seat = useNavigate();
    const handelPage = () =>{
       seat("/hotel_id");
    }
    return (
        <>
        <div className="searchItem">
            <img
                src={props.imgsrc}
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle"> Apartments</h1>
                <span className="siDistance">200m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
                   Location {props.Location}
                </span>
                <span className="siFeatures">
                    available from {props.availableFrom}
                </span>
                <span className="siCancelOp">Near About {props.nearAbout} </span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$112</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton" onClick={handelPage}>See availability</button>
                </div>
                
            </div>  
        </div>
        
        </>
    )
}
