import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

console.log("=== API CONFIGURATION ===");
console.log("VITE_API_BASE_URL env var:", import.meta.env.VITE_API_BASE_URL);
console.log("Final API_BASE_URL being used:", API_BASE_URL);

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchProjects = async (type = null) => {
  try {
    const url = type ? `/projects/?type=${type}` : '/projects/';
    console.log(`[API REQUEST] Fetching projects from: ${API_BASE_URL}${url}`);
    
    const response = await apiClient.get(url);
    
    console.log(`[API SUCCESS] Status: ${response.status}`);
    console.log(`[API RESPONSE] Received ${response.data.length} projects`);
    if (response.data.length > 0) {
      console.log(`[API DATA SAMPLE] First project images:`, response.data[0].images);
    }
    
    return response.data;
  } catch (error) {
    console.error('[API ERROR] Failed to fetch projects:', error.message);
    if (error.response) {
      console.error('[API ERROR STATUS]:', error.response.status);
    }
    throw error;
  }
};

export const fetchProjectById = async (id) => {
  try {
    console.log(`[API REQUEST] Fetching project ${id} from: ${API_BASE_URL}/projects/${id}/`);
    const response = await apiClient.get(`/projects/${id}/`);
    return response.data;
  } catch (error) {
    console.error(`[API ERROR] Error fetching project ${id}:`, error.message);
    throw error;
  }
};
