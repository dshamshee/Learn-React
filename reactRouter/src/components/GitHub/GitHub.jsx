import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
    const userdata = useLoaderData()
    //     const [userdata, setUserData] = useState([])
    //    useEffect(()=>{

    //         // fetch('https://api.github.com/users/dshamshee')
    //         // .then(response => response.json())
    //         // .then(data => {
    //         //     console.log(data)
    //         //     setData(data)

    //         // })



    //         axios.get(`https://api.github.com/users/dshamshee`)
    //         .then((response) => {
    //             // console.log(response.data)
    //         //   setUserData(response.data)
    //         setUserData(response.data)
    //         })
    //         .catch((error) => {
    //           console.error('Error fetching data:', error);
    //         });


    //    }, [])
    // console.log(`I am Here: ${userdata}`)
    return (
        <div className='bg-gray-600 text-center  m-4 text-white p-4 text-3xl flex flex-row gap-16 justify-around'>
            <div>
                <img className="rounded-full shadow-md shadow-lime-300 hover:shadow-lime-500" src={userdata.avatar_url} alt="Git picture" width={300} />
            </div>
            <div className="w-[580px] p-5">


                <div className="flex flex-row  w-[320px] items-center ">
                    <h1 className=" ml-12">{userdata.followers}  </h1>
                    <h1 className=" ml-[400px]">{userdata.following}</h1>
                </div>

                <div className="flex flex-row justify-between gap-20 w-auto">
                    <h1 className="">Follower</h1>
                    <h1>Following</h1>
                </div>


                <h1 className="mt-10 text-start">{userdata.bio}</h1>
            </div>
        </div>
    )
}

export default GitHub


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/dshamshee')
    return response.json()
}
