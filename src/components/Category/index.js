import categories from "../../tempData/categories.json";

const Category=()=>{
    return (
        <div class="btn-group-vertical">
            {
                categories.map(category => {
                    return (
                        <button type="button" class="btn btn-outline-primary">{category.type}</button>
                    );
                })
            }
        </div>
    )
}

export default Category;