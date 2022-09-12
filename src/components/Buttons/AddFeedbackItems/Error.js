import './Error.css'
import {useState, useRef, useEffect} from "react";

const Error = () => {
    const [error, setError] = useState(true);
    const errorRef = useRef()


    const closeModal = () => {
        setError(false);
    }

    //to detect click anywhere in the window
    useEffect(() => {
        function handler(event) {
            if(!errorRef.current?.contains(event.target)) {
                //doesn't work properly
                setError(false);
            }
        }
        window.addEventListener('click', handler)
        return () => window.removeEventListener('click', handler)
    }, [])

    return(
        error && <div className="error-backdrop"><div ref={errorRef} className="error-modal">
            <header className="error-heading">
                <h2>Error!</h2>
            </header>
            <div className="error-message-container">
                <p className="error-message-text">Oops, seems like you haven't filled out all fields...</p>
            </div>
            <footer className="error-close-btn-wrapper">
                <button className="error-close-btn" onClick={closeModal}>Close</button>
            </footer>
        </div></div>
    )
}

export default Error