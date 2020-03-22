export const ROUTER_URLS = {
    BASE_URL: process.env.REACT_APP_BASE_ROUTE_URL,
    MAIN: "/main",
    SHOP: "/shop",
    BOOK: "/book",
    CONTACTS: "/contacts",
    BASKET: "/basket"
}

export const API_URLS = {
    BASE_URL: process.env.REACT_APP_BASE_API_URL,
    TYPES: "/types/",
    BOOKS_IDS: "/types/:id/",
    BOOKS: "/types/:id/books/?count=30&page=0",
    BOOK: "/books/:id/",
    COUNT_BOOKS: "/types/:id/count/",
    FIND_BY_WORD: "/find/",
    FIND_BY_TAG: "/find_tag/"
}

export const LOADING_SATUSES = {
    LOADING: "LOADING",
    NONE: "NONE"
}

export const TRANSLATE_LAYERS_COEFFS = {
    FRONT: -0.03,
    MIDDLE: -0.01,
    BACK: -0.009
}