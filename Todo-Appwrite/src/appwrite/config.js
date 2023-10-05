import conf from '../conf/conf'
import { Client,Databases,ID} from 'appwrite';

export class Service{
      client=new Client()
      databases;

      constructor(){
        this.client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject(conf.appwriteProjectId);

        this.databases=new Databases(this.client)
      }

      async createTodo({id,title,description}){
             try {
                return await this.databases.createDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    ID.unique(),
                    {
                        id,
                        title,
                        description
                    })
             } catch (error) {
                console.log(error);
             }
      }

}

const service=new Service()
export default service;