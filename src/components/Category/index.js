import categories from "../../tempData/categories.json";

const Category=()=>{
    return (
        <fieldset className="form-group">
            <legend className="mt-4">Filter</legend>
            {
                categories.map(category => {
                    return (
                        <div className="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                {category.type}
                            </label>
                        </div>
                    );
                })
            }
        </fieldset>
    )
}

export default Category;