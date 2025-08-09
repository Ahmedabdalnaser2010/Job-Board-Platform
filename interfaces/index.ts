
export interface TCategoryData {

    name: string;
    logo: string;
}


export interface TJobData {
    jobID?: number;
    employerLogo?: string;
    jobTitle?: string;
    companyName?: string;
    category?: string;
    employmentType?: string;
    maxSalary?: number;
    minSalary?: number;
    country?: string;
    city?: string;
    publishingtime?: string;
    currency?: string;
    experience?: string;
    submitTitle?: string;

}



export interface TDetailedJobData {
    id: number,
    company_logo: string,
    job_title: string,
    job_category: string,
    posting_date?: string,
    job_type: string,
    experience_level: string,
    company_name: string,
    company_location: {
        city: string,
        country: string,
        latitude: number,
        longitude: number
    },
    required_experience: string,
    salary_range: {
        min: number,
        max: number,
        currency?: string
    },
    benefits?: [],
    company_description: string,
    job_description: string,
    key_responsibilities: [],
    required_skills: []


}