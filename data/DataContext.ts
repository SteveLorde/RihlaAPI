import {MongoClient} from "mongodb"

export class DataContext {
    constructor() {
        this.InititateClient()
    }

     url = 'mongodb://localhost:27017';
     client = new MongoClient(this.url);
     db = this.client.db("RihlaDB")
     public usersData = this.db.collection("Users");
     public ridesData = this.db.collection("Rides");

     async InititateClient() {
         await this.client.connect()
     }
     async DisconnectClient() {
         await this.client.close()
     }

}