import Card from "../UI/Card";
import './AllFeedbacks.css'

const AllFeedbacks = ({allFeedbacks, allFeedbackContainer, carsList}) => {
    return(
        <Card>
            <button className="btn-options" onClick={allFeedbacks}>
                <i className="fa fa-list btn-icons"></i>All Feedbacks
            </button>

            {allFeedbackContainer &&
                carsList.map((car) => {
                    return (
                        <div className="container all-feedbacks-container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                            <label className="list-labels"><b>Brand:</b></label>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <p className="feedback-list-item">{car.carBrand.toUpperCase()}</p>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <label className="list-labels"><b>Rate:</b></label>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <p className="feedback-list-item">{car.rate}</p>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <label className="list-labels"><b>Feedback:</b></label>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <p className="feedback-list-item">{car.feedback}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
        </Card>
    )
}

export default AllFeedbacks