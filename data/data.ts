import { JobOffer } from "./types";

export const jobOffers: Array<JobOffer> = [
    {
        title: "Mon Boulot",
        description: "Lorem ipsum",
        skills: ["HTML", "CSS", "React"],
        type: "CDI",
        startDate: new Date(),
        datePosted: new Date(),
        salary: 0,
        salaryUnit: "Brut annuel"
    }
]