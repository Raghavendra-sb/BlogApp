import conf from '../conf/conf.js'
import { Client, Account, ID } from "appwrite";

export class AuthServices {
    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(conf.appWriteUrl) // Your API Endpoint
        .setProject(conf.appWriteProjectId);                 // Your project ID
        
        this.account = new Account(this.client)
    }

    async createAccount ({email,password,name}) {
 
         try {
         const userAccount =  await this.account.create(ID.unique() , email,password,name);
         if (userAccount) {
            //call another method for login
            this.loginAccount(email,password)
         } else {
            return userAccount ; //it may be null also  
         }
         } catch (error) {
            throw error
         }
    }

    async loginAccount({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            return error
        }
    }

    async getCurrentUser(){
        try {
            return  await this.account.get();
        } catch (error) {
            throw error
        }
     return null;
    }

    async logoutAccount (){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            throw error;
        }
    }
}


const authServices = new AuthServices();

export default  authServices