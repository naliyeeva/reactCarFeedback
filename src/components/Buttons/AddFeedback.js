import Card from "../UI/Card";
import './AddFeedback.css'
import CarBrand from "./AddFeedbackItems/CarBrand";
import RateCar from "./AddFeedbackItems/RateCar";
import CarFeedback from "./AddFeedbackItems/CarFeedback";
import SendFeedback from "./AddFeedbackItems/SendFeedback";
import {useState} from "react";
import Swal from 'sweetalert2';

const AddFeedback = ({addFeedback, addFeedbackContainer, setCarsList}) => {
    const [carBrand, setCarBrand] = useState('audi');
    const [rate, setRate] = useState('2');
    const [feedback, setFeedback] = useState('');

    const brandList = [
        'audi',
        'bmw',
        'bentley',
        'cadillac',
        'ford',
        'honda',
        'hyundai',
        'kia',
        'lexus',
        'lincoln',
        'mercedes',
        'porsche',
        'saab',
        'toyota',
        'volvo'
    ]

    const sendFeedback = () => {
        if(feedback === '') {
            return Swal.fire({
                title: 'Oops!',
                text: 'Feedback field is empty',
                icon: 'error',
                confirmButtonText: 'Close'
            })
        }
        else {
            const carFeedbacks = JSON.parse(localStorage.getItem('car-feedbacks'))
                ? JSON.parse(localStorage.getItem('car-feedbacks'))
                : [];

            const newCarsFeedbacks = [
                ...carFeedbacks,
                {
                    id: Math.random(),
                    rate,
                    carBrand,
                    feedback
                }
            ]

            localStorage.setItem('car-feedbacks', JSON.stringify(newCarsFeedbacks));
            setCarsList(newCarsFeedbacks);
            return Swal.fire({
                title: 'Thank You!',
                text: 'We have received your feedback',
                icon: 'success',
                confirmButtonText: 'Close'
            })
        }
    }

    return(
        <Card>
            <button className="btn-options" onClick={addFeedback}>
                <i className="fa fa-plus btn-icons"></i>Add Feedback
            </button>

            {addFeedbackContainer &&
                <div className="container add-feedback-container">
                    <div className="row">
                        <CarBrand
                            brandList={brandList}
                            setCarBrand={setCarBrand}
                        />
                        <RateCar
                            rate={rate}
                            setRate={setRate}
                        />
                        <CarFeedback
                            setFeedback={setFeedback}
                        />
                        <SendFeedback
                            sendFeedback={sendFeedback}
                        />
                    </div>
                </div>
            }
        </Card>
    )
}

export default AddFeedback