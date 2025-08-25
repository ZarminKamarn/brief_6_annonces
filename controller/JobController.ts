import Controller from "../libs/Controller";

class JobController extends Controller{
    public displayJobs(){
        this.response.send("BROWSE JOBS");
    }

    public displayJob(){
        const id = this.request.params.id;
        this.response.send("READ JOB "+id);
    }

    public displayEditJob(){
        const id = this.request.params.id;
        this.response.send("EDIT JOB "+id);
    }

    public editJob(){
        this.response.redirect("/");
    }

    public displayAddJob(){
        this.response.send("ADD JOB");
    }

    public addJob(){
        this.response.redirect("/");
    }

    public displayDeleteJob(){
        const id = this.request.params.id;
        this.response.send("DELETE JOB "+id);
    }

    public deleteJob(){
        this.response.redirect("/");
    }
}

export default JobController;