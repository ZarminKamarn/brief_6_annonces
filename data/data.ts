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
    {
        id: 4,
        title: "Stagiaire",
        description: "Nous cherchons un stagiaire pour une péridode de 5 mois. Si vous êtes en formation actuellement, n'hésitez pas à postuler",
        skills: ["Faire le café"],
        type: "Stage",
        start_date: new Date("11-17-2025"),
        salary: 0,
        salary_unit: "Brut horaire",
        password: "password"
    },
];

export const dataVariables = {
    id: 4
}

export const skill =  [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "VueJS",
    "PHP",
    "Symphony",
    "C",
    "C#",
    ".Net",
    "Java",
    "Kotlin",
    "Python",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "PL/SQL",
    "Git",
    "API REST",
    "Faire le café"
] as const;

export const salaryUnit = [
    "Brut annuel",
    "Brut mensuel",
    "Brut horaire"
] as const;

export const jobTypes = [
    "Freelance",
    "CDI",
    "CDD",
    "Interim",
    "Stage",
    "Alternance"
] as const;