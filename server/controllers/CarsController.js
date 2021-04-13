import BaseController from "../utils/BaseController";
import { carsService } from "../services/CarsService";

export class CarsController extends BaseController {
  constructor() {
    super("/cars");
    this.router
      .get("/", this.getAll)
      .get("/:id/", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)

  }
  async getAll(request, respond, next) {
    try {
      let data = await carsService.getAll(request.query)
      return respond.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(request, respond, next){
    try {
      let data = await carsService.getById(request.params.id)
      return respond.send(data)
    } catch (error) {
      next(error)
    }
  }

  async create(request, respond, next) {
    try {
      let data = carsService.create(request.body)
      respond.send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(request, respond, next){
    try {
    request.body.id  = request.params.id
    let data = await carsService.edit(request.body)
    return respond.send(data)
    } catch (error) {
      next(error)
    }
  }

async delete(request,respond, next){
  try {
    let data = await carsService.delete(request.params.id)
    return respond.send(data)
  } catch (error) {
    next(error)
  }
}

}