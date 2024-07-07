import React,{useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

// file ka name or function ka different ho sakta hai 
export default function Protected({children, authentication= true}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
    // TODO: Make it more easy to Understand 

    // if(authStatus==true){
    //     navigate('/')
    // }else if(authStatus == false){
    //     navigate('/login')
    // }


    // const authValue = authStatus === true ? true : false (replace second checking statement with this Variable)
        if(authentication && authStatus !== authentication){
            navigate('/login')
        } else if(!authentication && authStatus !== authentication){
            navigate('/')
        }
    setLoader(false)

    }, [authStatus, navigate, authentication])
    


  return loader ? <h1>Loading...</h1> : <> {children} </>

}


