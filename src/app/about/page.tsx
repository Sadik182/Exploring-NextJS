export default async function About() {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json();
    return(
        <div>
            <div className="text-center py-10 bg-gray-100">
                <h1 className="text-3xl text-black">About Us</h1>
                <p className="text-gray-600 max-w-2xl mx-auto mt-2">We are a team dedicated to providing the best solutions using modern web technologies.</p>
            </div>
            <div className="py-8 px-4 bg-gray-100 text-center">
                <h2 className="text-2xl font-semibold text-black">Our Mission</h2>
                <p className="text-gray-700 mt-2">Our mission is to create user-friendly web applications that make life easier for businesses and individuals.</p>

            </div>
            <div className="py-8 px-4 bg-gray-100 text-center">
                <h2 className="text-2xl font-semibold text-black">Meet with Our Team</h2>
                <div className="text-black grid lg:grid-cols-3 gap-6 mt-3 ">
                    {users.map((user: any) => (
                        <div key={user.id} className="bg-white p-4 shadow-md rounded-lg">
                            <h1 className="text-lg">Name: {user.name}</h1>
                            <h1 className="text-lg">Email: {user.email}</h1>
                            <h1 className="text-lg">Phone: {user.phone}</h1>
                        </div>
                    ))}
                </div>

            </div>
            <div className="text-center py-8 bg-gray-100">
                <h2 className="text-2xl text-black font-semibold">Our Journey</h2>
                <p className="text-gray-700 my-2">We started in 2023 as a small team passionate about web development. Since then, we've grown into a leading soltion provider.</p>
            </div>
        </div>
    )
}