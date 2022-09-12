import './SendFeedback.css'

const SendFeedback = ({sendFeedback}) => {

    const submitFeedback = () => {
        return sendFeedback()
    }

    return(
        <>
            <div className="col-md-12 col-sm-12 add-feedback-item">
                <button type="button" className="send-feedback-btn" onClick={submitFeedback}>Send Feedback</button>
            </div>
        </>
    )
}

export default SendFeedback