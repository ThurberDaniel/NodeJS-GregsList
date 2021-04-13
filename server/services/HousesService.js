import { dbContect } from "../db/DbContect";
import { BadRequest } from "../utils/Errors";

class HousesService {

async getAll(query = {}){
  return await dbContect.Houses.find(query)
}

 async getById(id){
   let data = await dbContect.Houses.findOne({_id: id})
   if(!data) {
     throw new ("Invalid Id FindOne")
   }
  return data
 }

 async create(body){
   return await dbContect.Houses.create(body)
 }

async edit(body){
      // FindOneAndUpdate takes the find object, then the update, then says return the post updated object
  let data = await dbContect.Houses.findByIdAndUpdate({_id: body.id}, body, {new: true})
  if(!data) {
    throw new BadRequest("Invalid Id - EDIT")
  }
  return data
}

async delete(id){
  let data = await dbContect.Houses.findByIdAndDelete({_id: id})
  if(!data){
    throw new BadRequest("Invalid Id - DELETE")
  }
  return "Successfully Deleted - Good Job"
}

}

export const housesService = new HousesService();