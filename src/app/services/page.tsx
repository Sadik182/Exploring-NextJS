export default async function Services() {
  const res = await fetch("https://dummyjson.com/products?limit=9");
  const data = await res.json();
  const services = data.products || [];
  
  return (
    <div className="bg-gray-100 text-black py-8 min-h-screen">
      <h1 className="text-center font-semibold text-2xl py-4">Our Services</h1>
      <div className="grid grid-cols-3 gap-4 mt-4 px-4">
        {services.map((service: any) => (
          <div key={service.id} className="bg-white shadow rounded-lg text-center p-3">
            <h1>Name: {service.title}</h1>
            <h1>Price: ${service.price}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
