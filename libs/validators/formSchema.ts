import z from "zod";
import { JobOffer } from "../../data/types";
import { jobOffers, jobTypes, skill } from "../../data/data";

export const addFormSchema = z.object({
  title: z
    .string()
    .min(1, "Le titre est obligatoire")
    .max(50, "Le titre est limité à 50 caractères"),
  description: z
    .string()
    .min(1, "La description est obligatoire")
    .max(500, "La description est limité à 500 caractères"),
  skills: z
    .string()
    .min(1, "Au moins une compétence est obligatoire")
    .refine(areSkillsValid, "Au moins une compétences est invalide"),
  type: z.string().refine(isTypeValid, "Le type de contrat n'est pas valide"),
  start_date: z.coerce
    .date("La date est obligatoire")
    .min(new Date(), "La date doit être a minima la date du jour"),
  salary: z.coerce
    .number("Le salaire doit être un nombre")
    .min(0, "Un salaire positif est obligatoire"),
  salary_unit: z
    .string()
    .refine(isSalaryUnitValid, "L'unité de salaire n'est pas valide"),
  password: z
    .string()
    .min(4, "Le mot de passe doit faire 4 caractères minimum")
    .max(50, "Le mot de passe est limité à 50 caractères"),
});

export const deleteFormSchema = z.object({
  password: z.string().min(1, "Le mot de passe est obligatoire"),
});

function isTypeValid(type: any) {
  return jobTypes.includes(type);
}

function isSalaryUnitValid(salaryUnit: any) {
  return salaryUnit.includes(salaryUnit);
}

function areSkillsValid(skills: string) {
  let isValid: boolean = true;
  const arrSkills: Array<string> = skills.split(",");
  arrSkills.forEach((givenSkill) => {
    if (!skill.includes(givenSkill as any)) {
      isValid = false;
    }
  });
  return isValid;
}

export function isPasswordCorrect(id: number, password: string) {
  const job: JobOffer | undefined = jobOffers.find((job) => {
    return job.id === id;
  });
  return job && job.password === password;
}
