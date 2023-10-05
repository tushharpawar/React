import conf from '../conf/conf'
import { Client, Account ,ID} from 'appwrite';

export class AuthService{
    client=new Client();
    account;

    constructor(){
        this.client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject(conf.appwriteProjectId);

        this.account=new Account(this.client)
    }

    async createAccount(email,password,name){
        try {
            const userAccount= await this.account.create(ID.unique(),email,password,name);

            if(userAccount){
                //TODO:-------------
                return this.login({email,password})
            }
            else{
                   return userAccount
            }
        } catch (error) {
            console.log("error:",error);
        }
    }

    async login({email,password}){
        try {
         return await this.account.createEmailSession(email,password)
        } catch (error) {
            console.log("Error:",error);
        }
    }

   async googleLogin(){
        try {
            return await this.account.createOAuth2Session(conf.appwriteGoogleUrl)
        } catch (error) {
            console.log(error);
        }
   }

   async getUserFromGoogle(){
       return await this.account.getSession('current')
   }

    async getCurrentUser(){
        try{
           return await this.account.get()
        }
        catch(error){
            console.log(error);
        }
    }
  
    async logout(){
        try{
           return await this.account.deleteSessions()
        }
        catch(error){
            console.log(console.error());
        }
    }

}

const authService=new AuthService()
export default authService

