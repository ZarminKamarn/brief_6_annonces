import { skill, jobTypes, salaryUnit } from "./data";

export type JobOffer = {
  id: number;
  title: string;
  description: string;
  skills: Array<Skill>;
  type: JobTypes;
  start_date: Date;
  salary: number;
  salary_unit: SalaryUnit;
  password: string;
};

export type Skill = (typeof skill)[number];

type SalaryUnit = (typeof salaryUnit)[number];

type JobTypes = (typeof jobTypes)[number];
