import BaseController from "../utils/BaseController";
import { jobsService } from "../services/JobsService";

export class JobsController extends BaseController {
  constructor() {
    super("/jobs");
    this.router
      .get("/", this.getAll)
      .get("/:id/", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)

  }
  async getAll(request, respond, next) {
    try {
      let data = await jobsService.getAll(request.query)
      return respond.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(request, respond, next){
    try {
      let data = await jobsService.getById(request.params.id)
      return respond.send(data)
    } catch (error) {
      next(error)
    }
  }

  async create(request, respond, next) {
    try {
      let data = jobsService.create(request.body)
      respond.send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(request, respond, next){
    try {
    request.body.id  = request.params.id
    let data = await jobsService.edit(request.body)
    return respond.send(data)
    } catch (error) {
      next(error)
    }
  }

async delete(request,respond, next){
  try {
    let data = await jobsService.delete(request.params.id)
    return respond.send(data)
  } catch (error) {
    next(error)
  }
}

}

