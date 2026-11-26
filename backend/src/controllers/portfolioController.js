import * as portfolioData from '../data/portfolioData.js';

export const getProfile = (req, res) => {
  res.status(200).json({ success: true, data: portfolioData.profileData });
};

export const getSkills = (req, res) => {
  res.status(200).json({ success: true, data: portfolioData.skillsData });
};

export const getProjects = (req, res) => {
  res.status(200).json({ success: true, data: portfolioData.projectsData });
};

export const getExperience = (req, res) => {
  res.status(200).json({ success: true, data: portfolioData.experienceData });
};

export const getEducation = (req, res) => {
  res.status(200).json({ success: true, data: portfolioData.educationData });
};

export const getCertifications = (req, res) => {
  res.status(200).json({ success: true, data: portfolioData.certificationsData });
};

export const handleContact = (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields (name, email, subject, message) are required.'
    });
  }

  // Validate simple email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address.'
    });
  }

  // Pure mock response as per prompt requirements: do not save to database, do not claim email was sent
  return res.status(200).json({
    success: true,
    message: `Thank you, ${name}. Your message has been received by the portfolio contact API.`,
    receivedData: {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      timestamp: new Date().toISOString()
    }
  });
};
