import './Button.css'
import AddFeedback from "../Buttons/AddFeedback";
import AllFeedbacks from "../Buttons/AllFeedbacks";
import FilterFeedbacks from "../Buttons/FilterFeedbacks";
import { useState } from "react";

const Button = () => {
    const [allFeedbackContainer, setAllFeedbackContainer] = useState(false);
    const [addFeedbackContainer, setAddFeedbackContainer] = useState(false);
    const [filterFeedbackContainer, setFilterFeedbackContainer] = useState(false);
    const [carsList, setCarsList] = useState([]);

    const handleAllFeedbacks = () => {
        setAllFeedbackContainer(true);
        allFeedbackContainer && setAllFeedbackContainer(false);
    }

    const handleAddFeedback = () => {
        setAddFeedbackContainer(true);
        addFeedbackContainer && setAddFeedbackContainer(false);
    }

    const handleFilterFeedback = () => {
        setFilterFeedbackContainer(true);
        filterFeedbackContainer && setFilterFeedbackContainer(false);
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <AllFeedbacks
                        allFeedbacks={handleAllFeedbacks}
                        allFeedbackContainer={allFeedbackContainer}
                        carsList={carsList}
                    />
                </div>
                <div className="col-md-4 col-sm-12">
                    <AddFeedback
                        addFeedback={handleAddFeedback}
                        addFeedbackContainer={addFeedbackContainer}
                        carsList={carsList}
                        setCarsList={setCarsList}
                    />
                </div>
                <div className="col-md-4 col-sm-12">
                    <FilterFeedbacks
                        filterFeedback={handleFilterFeedback}
                        filterFeedbackContainer={filterFeedbackContainer}
                        carsList={carsList}
                    />
                </div>
            </div>
        </div>
    )
}

export default Button