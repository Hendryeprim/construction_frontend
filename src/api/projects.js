import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.cjvinfrarealty.com/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchProjects = async (type = null) => {
  try {
    const url = type ? `/projects/?type=${type}` : '/projects/';
    const response = await apiClient.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

export const fetchProjectById = async (id) => {
  try {
    const response = await apiClient.get(`/projects/${id}/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching project ${id}:`, error);
    throw error;
  }
};
