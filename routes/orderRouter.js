import express from 'express';
import { createOrderCtrl, getAllOrderCtrl, getOrderStatsCtrl,getSingleOrderCtrl, updateOrderCtrl } from '../controllers/orderCtrl.js';
import { isLoggedIn } from '../middlewares/isLoggedIn.js';



const orderRouter = express.Router();

orderRouter.post('/',isLoggedIn,createOrderCtrl);
orderRouter.get('/',isLoggedIn,getAllOrderCtrl);
orderRouter.get('/:id',isLoggedIn,getSingleOrderCtrl);
orderRouter.put('/update/:id',isLoggedIn,updateOrderCtrl);
orderRouter.get('/sales/stats',isLoggedIn,getOrderStatsCtrl);


export default orderRouter;