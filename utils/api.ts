import axios from "axios"




const baseUrl: string = process.env.NEXT_PUBLIC_API_BASE_URL || "https://job-platform-backend-api.onrender.com"

export const getJobsData = async () => {
    try {
        const response = await axios.get(`${baseUrl}/jobs`);

        return response;

    } catch (error) {
        console.error("Error fetching jobs data:", error);
        throw error;
    }
};


export const getCategoriesData = async () => {
    try {
        const response = await axios.get(`${baseUrl}/categories`);

        return response;

    } catch (error) {
        console.error("Error fetching jobs data:", error);
        throw error;
    }
};



