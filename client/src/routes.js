import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Basket from "./pages/BasketPage"
import ProductPage from "./pages/ProductPage"
import Shop from "./pages/Shop"
import Company from "./pages/Company"
import Contacts from "./pages/Contacts"
import { ADMIN_ROUTE, BASKET_ROUT, COMPANY_ROUTE, CONTATCS_ROUTE, LOGIN_ROUT, PRODUCT_ROUTE, REGISTRATION_ROUT, SHOP_ROUTE } from "./utils/consts"


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    

]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUT,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUT,
        Component: Auth
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductPage
    },
    {
        path: COMPANY_ROUTE,
        Component: Company
    },
    {
        path: CONTATCS_ROUTE,
        Component: Contacts
    },
    {
        path: BASKET_ROUT,
        Component: Basket
    }

]