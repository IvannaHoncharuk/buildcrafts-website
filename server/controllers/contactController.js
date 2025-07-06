const Contact = require('../models/Contact');
const emailConfig = require('../config/emailConfig');

const submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, message, service } = req.body;

    // Create new contact document
    const contact = new Contact({
      name,
      email,
      phone,
      message,
      service
    });

    // Save to MongoDB
    const savedContact = await contact.save();

    // Send email notification
    try {
      await emailConfig.sendContactEmail(savedContact);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Continue even if email fails - contact is still saved
    }

    res.status(201).json({
      success: true,
      message: 'Thank you for your message. We will get back to you soon!',
      contactId: savedContact._id
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    res.status(500).json({
      success: false,
      message: 'There was an error processing your request. Please try again later.'
    });
  }
};

// Get all contacts (admin endpoint)
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      contacts
    });
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching contacts'
    });
  }
};

// Update contact status (admin endpoint)
const updateContactStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const contact = await Contact.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.json({
      success: true,
      contact
    });
  } catch (error) {
    console.error('Update contact error:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating contact'
    });
  }
};

module.exports = {
  submitContactForm,
  getAllContacts,
  updateContactStatus
};