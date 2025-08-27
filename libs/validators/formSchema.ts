import z from "zod";
import { jobTypes, skill } from "../../data/types"

export const addFormSchema = z.object({
    title: z.string().min(1, "Le titre est obligatoire").max(50, "Le titre est limité à 50 caractères"),
    description: z.string().min(1, "La description est obligatoire").max(500, "La description est limité à 500 caractères"),
    skills: z.string().refine(areSkillsValid),
    type: z.string().refine(isTypeValid, "Le type de contrat n'est pas valide"),
    start_date: z.coerce.date().min(new Date(), "La date doit être a minima la date du jour"),
    salary: z.coerce.number(),
    salary_unit: z.string().refine(isSalaryUnitValid, "L'unité de salaire n'est pas valide"),
    password: z.string().min(4, "Le mot de passe doit faire 4 caractères minimum").max(50, "Le mot de passe est limité à 50 caractères")
});

export const editFormSchema = z.object({
    password: z.string().min(1, "Le mot de passe est obligatoire"),
    title: z.string().min(1, "Le titre est obligatoire").max(50, "Le titre est limité à 50 caractères"),
    description: z.string().min(1, "La description est obligatoire").max(500, "La description est limité à 500 caractères"),
    skills: z.string().refine(areSkillsValid),
    type: z.string().refine(isTypeValid, "Le type de contrat n'est pas valide"),
    start_date: z.coerce.date().min(new Date(), "La date doit être a minima la date du jour"),
    salary: z.coerce.number(),
    salary_unit: z.string().refine(isSalaryUnitValid, "L'unité de salaire n'est pas valide")
});

export const deleteFormSchema = z.object({
    password: z.string()
});

function isTypeValid(type: any){
    return jobTypes.includes(type);
}

function isSalaryUnitValid(salaryUnit: any){
    return salaryUnit.includes(salaryUnit);
}

function areSkillsValid(skills: string){
    let isValid: boolean = true;
    const arrSkills: Array<string> = skills.split(",");
    arrSkills.forEach(givenSkill => {
        if (!skill.includes(givenSkill as any)){
            isValid = false;
        }
    })
    return isValid;
}