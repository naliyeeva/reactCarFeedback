import Card from "../UI/Card";
import './FilterFeedbacks.css';
import {useReducer, useState} from "react";
import DisplayCarFeedbacks from "./DisplayCarFeedbacks";

const initialState = {
    isOne: false,
    isTwo: false
}

const reducer = (state, action) => {
    if(action.type === 'ONE') {
        return {
            isOne: true
        }
    }
    if(action.type === 'TWO') {
        return {
            isTwo: true
        }
    }
    return reducer;
}

const FilterFeedbacks = ({filterFeedbackContainer, filterFeedback, carsList}) => {
    const [showRates, setShowRates] = useState(false);
    const [rate, dispatch] = useReducer(reducer, initialState);

    const handleRatesFilter = () => {
        setShowRates(true);
        showRates && setShowRates(false);
    }

    const oneIsSelected = () => {
        dispatch({
            type: 'ONE'
        })
        setShowRates(false);
    }

    const twoIsSelected = () => {
        dispatch({
            type: 'TWO'
        })
        setShowRates(false);
    }

    return(
        <Card>
            <button className="btn-options" onClick={filterFeedback}>
                <i className="fa fa-filter btn-icons"></i>Filter Feedbacks
            </button>

            {filterFeedbackContainer &&
                <div className="container filter-feedbacks-container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <button className="filter-options" onClick={handleRatesFilter}>By Rate</button>
                            {showRates &&
                            <div className="list-of-rates">
                                <div className="rate-item" onClick={oneIsSelected}>1</div>
                                <div className="rate-item" onClick={twoIsSelected}>2</div>
                                <div className="rate-item">3</div>
                                <div className="rate-item">4</div>
                                <div className="rate-item">5</div>
                            </div>}
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <button className="filter-options">By Brand</button>
                        </div>
                        {rate.isOne && <DisplayCarFeedbacks carsList={carsList} isOne={rate.isOne} />}
                        {rate.isTwo && <DisplayCarFeedbacks carsList={carsList} isTwo={rate.isTwo} />}
                    </div>
                </div>
            }
        </Card>
    )
}

export default FilterFeedbacks