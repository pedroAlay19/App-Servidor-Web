import type Service = require("../entities/Service");
import type IRepository = require("./IRepository");

export interface IServiceRepository extends IRepository.IRepository<Service.IService> {  

}