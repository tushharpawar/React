import {useCallback} from 'react'
import { useForm } from 'react-hook-form'
import {Button,Index,Logo,RTE} from '../index'
import appwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PostForm = ({post}) => {
  const {register,handleSubmit,setValue,control,getValues} =useForm({
    defaultValues:{
        title:post?.title || '',
        slug:post.slug || '',
        content:post?.content || '',
        status:post?.status || 'active',
    },
  })

  const navigate=useNavigate();
  const userData=useSelector(state=>state.user.userData)

  const submit=async(data)=>{
    if(post){
        data.image[0] ? appwriteService.uploadFile(data.image[0]):null

    }

    if(file){
        appwriteService.deleteFile(post.feauredImage)
    }

    const dbPost=await appwriteService.updatePost(post.$id,{
        ...data,
        featuredImage: file ? file.$id:undefined,
    })
    
    if(dbPost){
        navigate(`/post/${dbPost.$id}`)
    }
  }

  return (
    <div></div>
  )
}

export default PostForm