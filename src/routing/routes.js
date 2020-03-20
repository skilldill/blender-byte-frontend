import { ROUTER_URLS } from "../shared/constants";
import {
    Main,
    Basket,
    Shop,
    Book,
    Contacts
} from "../core/pages";

export const routes = [
    { path: ROUTER_URLS.MAIN, component: Main, exact: true },
    { path: ROUTER_URLS.SHOP, component: Shop, exact: true },
    { path: `${ROUTER_URLS.BOOK}/:bookId`, component: Book, exact: true },
    { path: ROUTER_URLS.BASKET, component: Basket, exact: true },
    { path: ROUTER_URLS.CONTACTS, component: Contacts, exact: true }
]