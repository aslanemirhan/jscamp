export class BaseLogger{
    log(data){
        console.log("Default logger : " + data)
    }
}

export class MongoLogger extends BaseLogger{
    log(data){
        console.log("Mongo logger : " + data)
    }
}

export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("Elastic logger : " + data)
    }
}