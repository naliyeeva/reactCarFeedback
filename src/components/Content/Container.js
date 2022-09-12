import './Container.css'
import Button from "./Button";

const Container = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h1 className="container-heading">Feedback List</h1>
                    <hr />
                    <Button />
                </div>
            </div>
        </div>
    )
}

export default Container