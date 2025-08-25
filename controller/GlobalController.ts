import Controller from "../libs/Controller";

class GlobalController extends Controller{
    public homepage(){
        this.response.render("pages/homepage");
    }
}

export default GlobalController;