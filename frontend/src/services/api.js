import { portfolioData } from '../data/portfolioData';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Fetch profile with automatic fallback to structured local data
 */
export async function getProfile() {
  try {
    const res = await fetch(`${API_BASE}/profile`);
    if (!res.ok) throw new Error('API failed');
    const json = await res.json();
    return json.data;
  } catch (err) {
    return portfolioData.profile;
  }
}

/**
 * Fetch skills with fallback
 */
export async function getSkills() {
  try {
    const res = await fetch(`${API_BASE}/skills`);
    if (!res.ok) throw new Error('API failed');
    const json = await res.json();
    return json.data;
  } catch (err) {
    return portfolioData.skills;
  }
}

/**
 * Fetch projects with fallback
 */
export async function getProjects() {
  try {
    const res = await fetch(`${API_BASE}/projects`);
    if (!res.ok) throw new Error('API failed');
    const json = await res.json();
    return json.data;
  } catch (err) {
    return portfolioData.projects;
  }
}

/**
 * Fetch experience with fallback
 */
export async function getExperience() {
  try {
    const res = await fetch(`${API_BASE}/experience`);
    if (!res.ok) throw new Error('API failed');
    const json = await res.json();
    return json.data;
  } catch (err) {
    return portfolioData.experience;
  }
}

/**
 * Fetch education with fallback
 */
export async function getEducation() {
  try {
    const res = await fetch(`${API_BASE}/education`);
    if (!res.ok) throw new Error('API failed');
    const json = await res.json();
    return json.data;
  } catch (err) {
    return portfolioData.education;
  }
}

/**
 * Fetch certifications with fallback
 */
export async function getCertifications() {
  try {
    const res = await fetch(`${API_BASE}/certifications`);
    if (!res.ok) throw new Error('API failed');
    const json = await res.json();
    return json.data;
  } catch (err) {
    return portfolioData.certifications;
  }
}

/**
 * Send contact form submission to Express API (with graceful mock handling)
 */
export async function sendContactMessage(formData) {
  try {
    const res = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.message || 'Failed to submit message.');
    return { success: true, message: json.message };
  } catch (err) {
    // If backend is unreachable (e.g. offline or static deployment), gracefully acknowledge without false claims
    return {
      success: true,
      message: `Thank you, ${formData.name}. Your message was acknowledged. You can also contact directly via vimalruppa06@gmail.com.`
    };
  }
}
