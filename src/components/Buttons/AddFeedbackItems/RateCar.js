import './RateCar.css'
import {useState} from "react";

const RateCar = ({setRate, rate}) => {

    return(
        <>
            <div className="col-md-3 col-sm-12 add-feedback-item">
                <label className="labels-for-add-feedback">Rate:</label>
            </div>
            <div className="col-md-9 col-sm-12 add-feedback-item">
                <button
                    id="1" className={`rate-buttons ${rate === '1' ? 'rate-active' : ''}`}
                    onClick={() => setRate('1')}>
                    1
                </button>
                <button
                    id="2"
                    className={`rate-buttons ${rate === '2' ? 'rate-active' : ''}`}
                    onClick={() => setRate('2')}>
                    2
                </button>
                <button
                    id="3"
                    className={`rate-buttons ${rate === '3' ? 'rate-active' : ''}`}
                    onClick={() => setRate('3')}>
                    3
                </button>
                <button
                    id="4"
                    className={`rate-buttons ${rate === '4' ? 'rate-active' : ''}`}
                    onClick={() => setRate('4')}>
                    4
                </button>
                <button
                    id="5"
                    className={`rate-buttons ${rate === '5' ? 'rate-active' : ''}`}
                    onClick={() => setRate('5')}>
                    5
                </button>
            </div>
        </>
    )
}

export default RateCar
