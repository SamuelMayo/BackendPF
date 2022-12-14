import UsersDao from "../dao/UsersDao.js";
import CartsDao from "../dao/CartsDao.js";
import ProductsDao from "../dao/ProductsDao.js";
import SalesDao from "../dao/SalesDao.js";

import userService from "./userService.js";
import cartService from "./cartService.js";
import productService from "./productsService.js";
import saleService from "./salesService.js";


export const usersService=new userService(new UsersDao());
export const cartsService=new cartService(new CartsDao());
export const productsService=new productService(new ProductsDao());
export const salesService=new saleService(new SalesDao());