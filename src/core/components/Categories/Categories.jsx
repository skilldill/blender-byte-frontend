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

function ModalCategories(props) {
    const { categories, fetchBooks, onClose } = props;
    function renderCategories() {
        if(categories.length) {
            return (
                <div className="categories_list">
                    {
                        categories.map((category, i) =>
                            <Button 
                                shape="round"
                                key={`${i}-${category.id}`}
                                size="large" 
                                type="primary"
                                onClick={() => fetchBooks(category.id)}
                            >
                                {category.name}
                            </Button>
                        )
                    }
                </div>
            )
        }

        return null
    }
    return (
        <div 
            className="categories_modal"
            onClick={ () => onClose && onClose() }
        >
            {renderCategories()}
        </div>
    )
}

export function Categories(props) {
    const { categories, loading, fetchCategories, fetchBooks } = props;
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        !categories.length && fetchCategories()
    }, [fetchCategories]);

    function renderCategories() {
        if(categories.length) {
            let categoriesForRender = [];
            categoriesForRender = categories.slice(0, MAX_COUNT_RENDER);

            return (
                <div className="categories_list">
                    {
                        categoriesForRender.map((category, i) =>
                            <Button 
                                shape="round"
                                key={`${i}-${category.id}`}
                                size="large" 
                                type="default"
                                onClick={() => fetchBooks(category.id)}
                            >
                                {category.name}
                            </Button>
                        )
                    }
                    {!showAll &&
                        (<Button 
                            shape="round"
                            size="large"
                            type="default"
                            onClick={() => setShowAll(true)}
                        >
                            Ещё...
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
            {   showAll && 
                <ModalCategories 
                    categories={categories}
                    fetchBooks={fetchBooks}
                    onClose={() => setShowAll(false)}
                />
            }
        </div>
    )
}

Categories.propTypes = {
    categories: PropTypes.array,
    loading: PropTypes.bool,
    fetchCategories: PropTypes.func,
    fetchBooks: PropTypes.func
}