import Controller from "../libs/Controller";

class GlobalController extends Controller{
    public homepage(){
        this.response.send("Homepage");
    }
}

export default GlobalController;