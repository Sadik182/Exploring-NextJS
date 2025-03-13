import Image from "next/image";

export default async function Team() {
    const res = await fetch('https://dummyjson.com/users?limit=6');
    const data = await res.json();
    const users = data.users || [];

    const teamImage = [
        "/user3.jpg",
    ]
    return(
        <div>
            <h1 className="bg-gray-200 text-center font-bold text-3xl text-black py-7">Meet With Our Team</h1>
            <div className="grid lg:grid-cols-3 gap-6 py-8 px-8 items-center justify-items-center bg-gray-200 text-black">
                {
                    users.map((user: any, index: number) => (
                        <div key={user.id} className="bg-gray-100 shadow-md rounded-lg p-6 w-100 h-60 flex flex-col items-center">
                            <Image
                            src={teamImage[index % teamImage.length]} 
                            alt="User Image"
                            width={100}
                            height={200}
                            className="rounded-full"
                            />
                            <h2 className="text-3xl py-2">Name: {user.firstName} {user.lastName}</h2>
                            <h2>Role: {user.role}</h2>
                            <h2>Title: {user.company.title}</h2>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}