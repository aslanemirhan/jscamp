import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User Component Yüklendi..")

let logger1 = new ElasticLogger()
let userService = new UserService(logger1)


userService.add("Emirhan Aslan")
userService.list()
userService.getById(1)

console.log("--------------------")

// prototyping but not a static
// let customer = {
//     id:1,
//     firstName:"Engin",
//     lastName:"Demiroğ"
// }
// customer.lastName = "Demir"
// console.log(customer.lastName)


let user1 = new User(1,"Mehmet","Yılmaz","İstanbul")
let user2 = new User(2,"Emirhan","Aslan","Ankara")
console.log(user2.firstName + " " + user2.lastName)

userService.add(user2.firstName)

console.log("--------------------")


userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))




