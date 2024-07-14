import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../components'
import appwriteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post, setPost] = useState({})
    const {slug} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post)
                }
            })
        }else{
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            {/* Yaha pe edit ka kaam ho rha hai isiliye edit={true} dena parega */}
            <PostForm post={post} edit={true} /> 
        </Container>

    </div>
  ) : null
}

export default EditPost
