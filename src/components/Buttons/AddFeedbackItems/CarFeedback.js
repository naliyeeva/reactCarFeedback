import './CarFeedback.css'

const CarFeedback = ({setFeedback}) => {
    return(
        <>
            <div className="col-md-3 col-sm-12 add-feedback-item">
                <label className="labels-for-add-feedback">Feedback:</label>
            </div>
            <div className="col-md-9 col-sm-12 add-feedback-item">
                <textarea id="car-feedback" className="feedback-textarea"
                          onChange={(e) => setFeedback(e.target.value)}></textarea>
            </div>
        </>
    )
}

export default CarFeedback
