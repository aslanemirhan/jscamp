import { BaseLogger, ElasticLogger, MongoLogger } from "./log.js"
import User from "./user.js"
import UserService from "./userService2.js"

console.log("User Component working successfully")

let logger1 = new BaseLogger()
let logger2 = new MongoLogger()
let logger3 = new ElasticLogger()
let userService = new UserService(logger3)
userService.add(" Emirhan Aslan")
userService.list()
userService.getById(1)

// real prototyping ex: we're creating visual database 
console.log("-------")
let user2 = new User(2,"Elon","Musk","South Africa",9878954654)
let user3 = new User(3,"Tom","Clyton","California",96452157228)
userService.add(user2)
userService.add(user3)

console.log(userService.list())
console.log(userService.getById(2))

//static prototyping
// console.log("-------")
// let user1 = new User(1,"Emirhan","Aslan","İstanbul",5362064508)
// userService.add(user1.firstName + " " + user1.lastName)

//un static prototyping
console.log("-------")
let prototyping = {id:2,firstName:"Mehmet",lastName:"Yılmaz"}
prototyping.firstName = "Engin"
prototyping.lastName = "Demiroğ"
console.log(prototyping.firstName + " " + prototyping.lastName)

