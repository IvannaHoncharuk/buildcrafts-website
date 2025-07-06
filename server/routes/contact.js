const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// POST /api/contact - Submit contact form
router.post('/', contactController.submitContactForm);

// GET /api/contact - Get all contacts (admin)
router.get('/', contactController.getAllContacts);

// PUT /api/contact/:id - Update contact status (admin)
router.put('/:id', contactController.updateContactStatus);

module.exports = router;