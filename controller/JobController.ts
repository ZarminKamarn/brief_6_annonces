import { jobOffers } from "../data/data";
import Controller from "../libs/Controller";

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
            this.response.render("pages/editJob", { job: jobOffers[id-1], id });
            return;
        }
        this.response.send("404");
    }

    public editJob(){
        this.response.redirect("/");
    }

    public displayAddJob(){
        this.response.render("pages/addJob");
    }

    public addJob(){
        this.response.redirect("/");
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