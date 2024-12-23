import Link from "next/link";

export default async function Home() {
  const url = await fetch('https://jsonplaceholder.typicode.com/users/')
  const response = await url.json()
  console.log(response)

  return (
    <div >
<h1 className='text-center text-4xl mb-6'>List Of Users</h1>

<div className="border-2 border-gray-200 md:w-[80%] mx-auto rounded-3xl w-full ">

      {

        response.map((user: any) => (
            <div key={user.id}>
          <Link href={`${user.id}`}>
            <div >
            <div className="flex md:w-[30%] mx-auto ">
              <h1 className="md:text-3xl text-xl hover:bg-black hover:text-white">
                {user.id} {user.name}
              </h1>
            </div>
            </div>
          </Link>
          </div>
        ))
      }
      </div>
    </div>
  );
}
