import React from 'react'

const page = async (props: any) => {
    const url = await fetch(`https://jsonplaceholder.typicode.com/users/${props.params.id}`)
    // console.log(props)
    const response = await url.json()
    console.log(response)

    return (
        <div>
            <h1 className='text-center text-4xl'>User Detail</h1>
            <h1 className='md:text-3xl justify-center leading-44 items-center ml-22 md:ml-[500px] border-2 border-gray-300 md:w-[50%] bg-gray-300 rounded-2xl mt-6 mx-auto'>
                
               <p><span className='font-normal md:text-2xl bg-black text-white'>ID:</span> {response.id}</p>
                <p><span className='font-normal md:text-2xl bg-black text-white'>Name</span> {response.name}</p>
                <p><span className='font-normal md:text-2xl bg-black text-white'>Username:</span> {response.username}</p>
                <p><span className='font-normal md:text-2xl bg-black text-white'>Email:</span> {response.email}</p>
                <p><span className='font-normal md:text-2xl bg-black text-white'>Address:</span> {response.address.street}</p>
                <p><span className='font-normal md:text-2xl bg-black text-white'>Address Suite:</span> {response.address.suite}</p>
                <p><span className='font-normal md:text-2xl bg-black text-white'>City:</span> {response.address.city}</p>
                <p><span className='font-normal md:text-2xl bg-black text-white'>ZipCode:</span> {response.address.zipcode}</p>
                <p><span className='font-normal md:text-2xl bg-black text-white'>Address Geo:</span> {response.address.geo.lat}</p>
                <p><span className='font-normal md:text-2xl bg-black text-white'>Address Geo Lng:</span> {response.address.geo.lng}</p>
                <p><span className='font-normal md:text-2xl bg-black text-white'>Phone:</span> {response.phone}</p>
               <p><span className='font-normal md:text-2xl bg-black text-white'> Website:</span> {response.website}</p>
           
                <p><span className='font-normal md:text-2xl bg-black text-white'>Company Name:</span> {response.company.name}</p>
               <p><span className='font-normal md:text-2xl bg-black text-white'>Company CatchPhrase:</span> {response.company.catchPhrase}</p>
               <p><span className='font-normal md:text-2xl bg-black text-white'>Company BS:</span> {response.company.bs}</p>


            </h1>
        </div>
    )
}

export default page
