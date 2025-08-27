import { jobOffers } from "../data/data";
import Controller from "../libs/Controller";

class GlobalController extends Controller{
    public homepage(){
        this.response.render("pages/homepage", {jobOffers});
    }
}

export default GlobalController;