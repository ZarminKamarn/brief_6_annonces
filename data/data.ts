import { JobOffer } from "./types";

export const jobOffers: Array<JobOffer> = [
    {
        id: 1,
        title: "Mon Boulot",
        description: "Lorem ipsum",
        skills: ["HTML", "CSS", "React", "JavaScript", "TypeScript", "PostgreSQL"],
        type: "CDI",
        start_date: new Date(),
        salary: 0,
        salary_unit: "Brut annuel",
        password: "1234"
    },
    {
        id: 2,
        title: "Développeur(se) backend junior PHP Symfony",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis, risus quis molestie vestibulum, mi augue dapibus ante, in aliquam elit velit non enim. Vivamus sit amet condimentum nunc. Aenean sit amet blandit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut velit odio, condimentum ac ullamcorper vitae, aliquet eu lectus. Nunc molestie pharetra tortor non posuere",
        skills: ["PHP", "Symphony", "API REST"],
        type: "Freelance",
        start_date: new Date(),
        salary: 30000,
        salary_unit: "Brut annuel",
        password: "0000"
    },
    {
        id: 3,
        title: "Développeur(se) backend junior PHP Symfony",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis, risus quis molestie vestibulum, mi augue dapibus ante, in aliquam elit velit non enim. Vivamus sit amet condimentum nunc. Aenean sit amet blandit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut velit odio, condimentum ac ullamcorper vitae, aliquet eu lectus. Nunc molestie pharetra tortor non posuere",
        skills: ["PHP", "Symphony", "API REST"],
        type: "CDD",
        start_date: new Date(),
        salary: 2500,
        salary_unit: "Brut mensuel",
        password: "azerty"
    },
];

export const dataVariables = {
    id: 3
}