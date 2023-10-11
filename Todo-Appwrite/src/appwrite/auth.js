import conf from '../conf/conf'
import { Client, Account ,Databases} from 'appwrite';

const client=new Client();

client.setEndpoint(conf.appwriteUrl)
client.setProject(conf.appwriteProjectId)

export const account=new Account(client)
export const databases=new Databases(client,conf.appwriteDatabaseId)



