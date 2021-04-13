import BaseController from "../utils/BaseController";
import { housesService } from "../services/HousesService";

export class HousesController extends BaseController {
  constructor() {
    super("/houses");
    this.router
      .get("/", this.getAll)
      .get("/:id/", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)

  }
  
  async getAll(request, respond, next) {
    try {
      let data = await housesService.getAll(request.query)
      return respond.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(request, respond, next){
    try {
      let data = await housesService.getById(request.params.id)
      return respond.send(data)
    } catch (error) {
      next(error)
    }
  }

  async create(request, respond, next) {
    try {
      let data = housesService.create(request.body)
      respond.send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(request, respond, next){
    try {
    request.body.id  = request.params.id
    let data = await housesService.edit(request.body)
    return respond.send(data)
    } catch (error) {
      next(error)
    }
  }

async delete(request,respond, next){
  try {
    let data = await housesService.delete(request.params.id)
    return respond.send(data)
  } catch (error) {
    next(error)
  }
}

}

