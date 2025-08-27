import z from "zod";
import { dataVariables, jobOffers } from "../data/data";
import Controller from "../libs/Controller";
import { addFormSchema } from "../libs/validators/formSchema";
import { JobOffer, jobTypes, salaryUnit, Skill, skill } from "../data/types";

class JobController extends Controller{
    public displayJobs(){
        this.response.render("pages/browseJobs", { jobOffers });
    }

    public displayJob(){
        const id: number = parseInt(this.request.params.id);
        if(jobOffers[id-1]){
            this.response.render("pages/readJob", { job: jobOffers[id-1], id });
            return;
        }
        this.response.send("404");
    }

    public displayEditJob(){
        const id: number = parseInt(this.request.params.id);
        if(jobOffers[id-1]){
            this.response.render("pages/editJob", { job: jobOffers[id-1], id, skill, jobTypes, salaryUnit });
            return;
        }
        this.response.send("404");
    }

    public editJob(){
        this.response.redirect("/");
    }

    public displayAddJob(){
        this.response.render("pages/addJob", {skill, jobTypes, salaryUnit});
    }

    public addJob(){
        const result = addFormSchema.safeParse(this.request.body)

        if (!result.success) {
        // 3.1 Gestion des erreurs du formulaire
            const errors = z.treeifyError(result.error)

        // 3.2 Afficher le formulaire avec : erreurs + values
            return this.response.status(400).render("pages/addJob", {
                errors: errors.properties,
                values: this.request.body
            })
        }

        dataVariables.id++;

        const newJobOffer: JobOffer = {
            id: dataVariables.id,
            title: this.request.body.title,
            description: this.request.body.description,
            skills: (this.request.body.skills as string).split(",") as Array<Skill>,
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
        if(jobOffers[id-1]){
            this.response.render("pages/deleteJob", { job: jobOffers[id-1], id });
            return;
        }
        this.response.send("404");
    }

    public deleteJob(){
        this.response.redirect("/");
    }
}

export default JobController;