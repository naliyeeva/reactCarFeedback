import './DisplayCarFeedback.css';

const DisplayCarFeedbacks = ({carsList, isOne, isTwo}) => {
    return(
        <>
            {isOne && carsList.filter(r => r.rate === '1').map((car) =>
                <div className="container filtered-car-feedbacks">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <label className="list-labels filtered-labels"><b>Brand:</b></label>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <p className="feedback-list-item filtered-item">{car.carBrand.toUpperCase()}</p>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <label className="list-labels filtered-labels"><b>Rate:</b></label>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <p className="feedback-list-item filtered-item">{car.rate}</p>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <label className="list-labels filtered-labels"><b>Feedback:</b></label>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <p className="feedback-list-item filtered-item">{car.feedback}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isTwo && carsList.filter(r => r.rate === '2').map((car) =>
                <div className="container filtered-car-feedbacks">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <label className="list-labels filtered-labels"><b>Brand:</b></label>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <p className="feedback-list-item filtered-item">{car.carBrand.toUpperCase()}</p>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <label className="list-labels filtered-labels"><b>Rate:</b></label>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <p className="feedback-list-item filtered-item">{car.rate}</p>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <label className="list-labels filtered-labels"><b>Feedback:</b></label>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <p className="feedback-list-item filtered-item">{car.feedback}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default DisplayCarFeedbacks