import z from "zod";
import { dataVariables, jobOffers } from "../data/data";
import Controller from "../libs/Controller";
import { addFormSchema, deleteFormSchema, isPasswordCorrect } from "../libs/validators/formSchema";
import { JobOffer } from "../data/types";
import { jobTypes, salaryUnit, skill } from "../data/data";

class JobController extends Controller{
    public displayJobs(){
        this.response.render("pages/browseJobs", { jobOffers });
    }

    public displayJob(){
        const id: number = parseInt(this.request.params.id);
        const job: JobOffer | undefined = jobOffers.find((job) => {
            return job.id === id;
        })
        if(job){
            this.response.render("pages/readJob", { job, id });
            return;
        }
        this.response.status(404).render("errors/404");
    }

    public displayEditJob(){
        const id: number = parseInt(this.request.params.id);
        const job: JobOffer | undefined = jobOffers.find((job) => {
            return job.id === id;
        })
        if(job){
            this.response.render("pages/editJob", { job, id, errors: "", skill, jobTypes, salaryUnit });
            return;
        }
        this.response.status(404).render("errors/404");
    }

    public editJob(){
        const result = addFormSchema.safeParse(this.request.body);
        this.request.body.skills = (this.request.body.skills as string).split(",");

        const id: number = parseInt(this.request.params.id);
        const job: JobOffer | undefined = jobOffers.find((job) => {
            return job.id === id;
        });

        if (!result.success) {
        // 3.1 Gestion des erreurs du formulaire
            const errors = z.treeifyError(result.error);

        // 3.2 Afficher le formulaire avec : erreurs + values
            return this.response.status(400).render("pages/editJob", {
                job: this.request.body,
                id,
                errors: errors.properties,
                skill, jobTypes, salaryUnit
            })
        }
        else if (!isPasswordCorrect(id, this.request.body.password)){
            return this.response.status(400).render("pages/editJob", {
                job: this.request.body,
                id,
                errors: {password: {errors: ["Le mot de passe est invalide"]}},
                skill, jobTypes, salaryUnit
            })
        }
        
        if(job){
            job.title = this.request.body.title;
            job.description = this.request.body.description;
            job.skills = this.request.body.skills;
            job.type = this.request.body.type;
            job.start_date = this.request.body.start_date;
            job.salary = this.request.body.salary;
            job.salary_unit = this.request.body.salary_unit;
        }

        this.response.redirect(`/jobs/${id}?success=true`);
    }

    public displayAddJob(){
        this.response.render("pages/addJob", {job: "", errors: "", skill, jobTypes, salaryUnit});
    }

    public addJob(){
        const result = addFormSchema.safeParse(this.request.body);
        this.request.body.skills = (this.request.body.skills as string).split(",");
        if(this.request.body.start_date !== ''){
            this.request.body.start_date = new Date(this.request.body.start_date);
        }

        if (!result.success) {
        // 3.1 Gestion des erreurs du formulaire
            const errors = z.treeifyError(result.error)

        // 3.2 Afficher le formulaire avec : erreurs + values
            return this.response.status(400).render("pages/addJob", {
                job: this.request.body,
                errors: errors.properties,
                skill, jobTypes, salaryUnit
            })
        }

        dataVariables.id++;

        const newJobOffer: JobOffer = {
            id: dataVariables.id,
            title: this.request.body.title,
            description: this.request.body.description,
            skills: this.request.body.skills,
            type: this.request.body.type,
            start_date: this.request.body.start_date,
            salary: this.request.body.salary,
            salary_unit: this.request.body.salary_unit,
            password: this.request.body.password
        };

        jobOffers.push(newJobOffer);
        this.response.redirect("/jobs?success=true");
    }

    public displayDeleteJob(){
        const id: number = parseInt(this.request.params.id);
        const job: JobOffer | undefined = jobOffers.find((job) => {
            return job.id === id;
        })
        if(job){
            this.response.render("pages/deleteJob", { job, id, errors: "" });
            return;
        }
        this.response.status(404).render("errors/404");
    }

    public deleteJob(){
        const result = deleteFormSchema.safeParse(this.request.body);
        const id: number = parseInt(this.request.params.id);
        const job: JobOffer | undefined = jobOffers.find((job) => {
            return job.id === id;
        });

        if (!result.success) {
        // 3.1 Gestion des erreurs du formulaire
            const errors = z.treeifyError(result.error);

        // 3.2 Afficher le formulaire avec : erreurs + values
            return this.response.status(400).render("pages/deleteJob", {
                job,
                id,
                errors: errors.properties,
                skill, jobTypes, salaryUnit
            })
        }
        else if (!isPasswordCorrect(id, this.request.body.password)){
            return this.response.status(400).render("pages/deleteJob", {
                job,
                id,
                errors: {password: {errors: ["Le mot de passe est invalide"]}},
                skill, jobTypes, salaryUnit
            })
        }
        
        const index = jobOffers.findIndex((jobOffer) => jobOffer.id === id);
        if (index !== -1) {
            jobOffers.splice(index, 1);
        }

        this.response.redirect("/jobs?success=true");
    }
}

export default JobController;