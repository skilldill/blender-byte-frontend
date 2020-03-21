import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"
import { Skeleton, Button } from "antd";

import "./style.scss";

const MAX_COUNT_RENDER = 10;

function LoadingCategories() {
    const styleSceleton = { width: "200px", margin: "5px", borderRadius: "50px"}

    return (
        <div className="loading_categories">
            <Skeleton.Input active style={styleSceleton} className="skeleton" size="large" />
            <Skeleton.Input active style={styleSceleton} className="skeleton" size="large" />
            <Skeleton.Input active style={styleSceleton} className="skeleton" size="large" />
            <Skeleton.Input active style={styleSceleton} className="skeleton" size="large" />
            <Skeleton.Input active style={styleSceleton} className="skeleton" size="large" />
            <Skeleton.Input active style={styleSceleton} className="skeleton" size="large" />
            <Skeleton.Input active style={styleSceleton} className="skeleton" size="large" />
            <Skeleton.Input active style={styleSceleton} className="skeleton" size="large" />
        </div>
    )
}

export function Categories(props) {
    const { categories, loading, fetchCategories } = props;
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        !categories.length && fetchCategories()
    }, [fetchCategories]);

    function renderCategories() {
        if(categories.length) {
            let categoriesForRender = [];

            if (categories.length > MAX_COUNT_RENDER && !showAll) {
                categoriesForRender = categories.splice(0, MAX_COUNT_RENDER);
            } else {
                categoriesForRender = [...categories]
            }

            return (
                <div className="categories_list">
                    {
                        categoriesForRender.map((category, i) =>
                            <Button shape="round" key={`${i}-${category.id}`} size="large" type="primary">
                                {category.name}
                            </Button>
                        )
                    }
                    {!showAll &&
                        (<Button 
                            shape="round"
                            size="large"
                            type="primary"
                            onClick={() => setShowAll(true)}
                        >
                            Ещё...
                        </Button>)
                    }
                    {showAll &&
                        (<Button 
                            shape="round"
                            size="large"
                            type="default"
                            onClick={() => setShowAll(false)}
                        >
                            Скрыть
                        </Button>)
                    }
                </div>
            )
        }

        return null
    }

    return (
        <div className="categories">
            { 
                loading ?
                <LoadingCategories /> :
                renderCategories()
            }
        </div>
    )
}

Categories.propTypes = {
    categories: PropTypes.array,
    loading: PropTypes.bool
}