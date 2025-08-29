export type JobOffer = {
    id: number,
    title: string,
    description: string,
    skills: Array<Skill>,
    type: JobTypes,
    start_date: Date,
    salary: number,
    salary_unit: SalaryUnit,
    password: string
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
export type Skill = (typeof skill)[number];

export const salaryUnit = [
    "Brut annuel",
    "Brut mensuel",
    "Brut horaire"
] as const;
type SalaryUnit = (typeof salaryUnit)[number];

export const jobTypes = [
    "Freelance",
    "CDI",
    "CDD",
    "Interim",
    "Stage",
    "Alternance"
] as const;
type JobTypes = (typeof jobTypes)[number];