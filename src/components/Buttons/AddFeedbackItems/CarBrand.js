import './CarBrand.css'

const CarBrand = ({setCarBrand, brandList}) => {
    return(
        <>
            <div className="col-md-3 col-sm-12 add-feedback-item">
                <label className="labels-for-add-feedback">Car Brand:</label>
            </div>
            <div className="col-md-9 col-sm-12 add-feedback-item">
                <select name="cars" id="cars"
                        className="cars-selection"
                        onChange={(e) => setCarBrand(e.target.value)}
                >
                    {brandList.map((brand) => {
                        return <option defaultValue="audi" value={brand} key={brand}>{brand.toUpperCase()}</option>
                    })}
                </select>
            </div>
        </>
    )
}

export default CarBrand