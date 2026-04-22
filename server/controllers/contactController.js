import Contact from "../models/Contact.js";
import { sendEmail } from "../config/email.js";
import dotenv from "dotenv";

dotenv.config();

// Validate email format
const validateEmail = (email) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
};

// Submit contact form
export const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    if (message.length < 10) {
      return res.status(400).json({
        success: false,
        message: "Message must be at least 10 characters long",
      });
    }

    // Save to database
    const contact = new Contact({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    await contact.save();

    // Send email to Tanvi
    const emailContent = `
      <div style="font-family: Arial, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px;">
        <div style="background: white; border-radius: 10px; padding: 30px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #667eea; margin-bottom: 20px;">✨ New Message from Your Portfolio</h2>
          
          <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #667eea; margin-bottom: 20px;">
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>

          <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          
          <p style="color: #666; font-size: 12px;">This message was sent through your portfolio contact form.</p>
        </div>
      </div>
    `;

    await sendEmail(
      process.env.EMAIL_USER,
      `New Contact: ${name}`,
      emailContent,
    );

    // Send confirmation email to visitor
    const confirmationEmail = `
      <div style="font-family: Arial, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px;">
        <div style="background: white; border-radius: 10px; padding: 30px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #667eea; margin-bottom: 20px;">Thank You for Reaching Out! 💜</h2>
          
          <p style="color: #333; line-height: 1.6;">
            Hi ${name},
          </p>
          
          <p style="color: #333; line-height: 1.6;">
            Thank you so much for taking the time to reach out! Your message has been received and I'll get back to you as soon as possible.
          </p>

          <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="color: #666; margin: 0;"><strong>Your Message:</strong></p>
            <p style="color: #666; white-space: pre-wrap; margin-top: 10px;">${message}</p>
          </div>

          <p style="color: #333; line-height: 1.6;">
            In the meantime, feel free to check out my projects and skills on my portfolio!
          </p>

          <p style="color: #333; line-height: 1.6;">
            Looking forward to connecting!<br/>
            <strong>Tanvi Patel</strong>
          </p>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          
          <p style="color: #999; font-size: 12px;">© 2024 Tanvi Patel. All rights reserved.</p>
        </div>
      </div>
    `;

    await sendEmail(email, "We Received Your Message! ✨", confirmationEmail);

    return res.status(201).json({
      success: true,
      message: "Message sent successfully! 🎉",
      data: contact,
    });
  } catch (error) {
    console.error("Contact submission error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
      error: error.message,
    });
  }
};

// Get all contacts (for admin purposes)
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    console.error("Fetch contacts error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch contacts",
      error: error.message,
    });
  }
};

// Get single contact
export const getContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findById(id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    console.error("Fetch contact error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch contact",
      error: error.message,
    });
  }
};
