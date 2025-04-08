import conf from '../conf/conf.js'
import { Client, Account, ID, Databases, Query,Storage } from "appwrite"; 

export class Service {
   client = new Client();
   account;
   databases;
   bucket;

   constructor () {
    this.client.call.setEndpoint(conf.appWriteUrl) // Your API Endpoint
    .setProject(conf.appWriteProjectId);                 // Your project ID
    
    this.account = new Account(this.client)
    this.databases = new Databases(this.client)
    this.bucket= new Storage(this.client)
   }

}

const service = new Service();

export default service;