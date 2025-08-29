import { Response, Request } from "express";

abstract class Controller {
  protected request: Request;
  protected response: Response;

  constructor(request: Request, response: Response) {
    this.request = request;
    this.response = response;
  }
}

export default Controller;
