import axios from "axios"

// const options = {
//     method: 'GET',
//     url: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
//     params: {
//         query: 'all',
//         page: '5',
//         num_pages: '1',
//         country: 'all',
//         date_posted: 'all'
//     },
//     headers: {
//         'x-rapidapi-key': 'ecd42f95c4mshdc61bccfb452ed8p16384cjsnd8ab5d2ba78a',
//         'x-rapidapi-host': 'jsearch.p.rapidapi.com'
//     }
// };
// const options = {
//     method: 'GET',
//     url: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
//     params: {
//         query: 'all',
//         location: 'all',
//         autoTranslateLocation: 'true',
//         remoteOnly: 'false',
//         employmentTypes: 'fulltime;parttime;intern;contractor'
//     },
//     headers: {
//         'x-rapidapi-key': 'ecd42f95c4mshdc61bccfb452ed8p16384cjsnd8ab5d2ba78a',
//         'x-rapidapi-host': 'jobs-api14.p.rapidapi.com'
//     }
// };


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



