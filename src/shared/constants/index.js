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
    BOOKS: "/types/:id/books/",
    BOOK: "/books/:id/",
    COUNT_BOOKS: "/types/:id/count/",
    FIND_BY_WORD: "https://blender-byte-soayddqssa-uc.a.run.app/v1.0/find/"
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