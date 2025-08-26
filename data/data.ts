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
    },
    {
        title: "Développeur(se) backend junior PHP Symfony",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis, risus quis molestie vestibulum, mi augue dapibus ante, in aliquam elit velit non enim. Vivamus sit amet condimentum nunc. Aenean sit amet blandit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut velit odio, condimentum ac ullamcorper vitae, aliquet eu lectus. Nunc molestie pharetra tortor non posuere",
        skills: ["PHP", "Symphony", "API REST"],
        type: "Freelance",
        startDate: new Date(),
        datePosted: new Date(),
        salary: 30000,
        salaryUnit: "Brut annuel"
    },
    {
        title: "Développeur(se) backend junior PHP Symfony",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis, risus quis molestie vestibulum, mi augue dapibus ante, in aliquam elit velit non enim. Vivamus sit amet condimentum nunc. Aenean sit amet blandit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut velit odio, condimentum ac ullamcorper vitae, aliquet eu lectus. Nunc molestie pharetra tortor non posuere",
        skills: ["PHP", "Symphony", "API REST"],
        type: "CDD",
        startDate: new Date(),
        datePosted: new Date(),
        salary: 2500,
        salaryUnit: "Brut mensuel"
    },
]

