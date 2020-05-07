const express = require('express');
const router = express.Router();
const financial_Controller = require('../Controller/financial');

// Admin
router.post('/add_financial',financial_Controller.add_financial);
router.get('/show_financial/:type/:user_id',financial_Controller.show_financial);
router.get('/show_cashflow/:user_id',financial_Controller.show_cashflow);
router.delete('/delete_financial/:id',financial_Controller.delete_financial);

module.exports = router;