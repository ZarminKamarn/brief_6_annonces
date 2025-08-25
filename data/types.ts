export type JobOffer = {
    title: string,
    description: string,
    skills: Array<Skill>,
    type: string,
    startDate: Date,
    datePosted: Date,
    salary: number,
    salaryUnit: SalaryUnit
}

export type Skill =
    "HTML" |
    "CSS" |
    "JavaScript" |
    "TypeScript" |
    "React" |
    "VueJS" |
    "PHP" |
    "Symphony" |
    "C" |
    "C++" |
    "C#" |
    ".Net" |
    "Java" |
    "Kotlin" |
    "Python" |
    "MySQL" |
    "PostgreSQL" |
    "MongoDB" |
    "PL/SQL" |
    "Git" |
    "API Rest"
;

export type SalaryUnit =
    "Brut annuel" |
    "Brut mensuel" |
    "Brut horaire"
;

export type JobTypes =
    "Freelance" |
    "CDI" |
    "CDD" |
    "Interim" |
    "Stage" |
    "Alternance"
;