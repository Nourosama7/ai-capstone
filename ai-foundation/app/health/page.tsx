async function getData() {
    const res = await fetch(
      "http://localhost:3000/api/health",
      {
        cache: "no-store",
      }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch health data");
    }
  
    return res.json();
  }
  
  export default async function Health() {
    const data = await getData();
  
    return (
      <main className="p-10">
        <h1 className="text-3xl font-bold mb-5">
          Health Check
        </h1>
  
        <pre className="bg-gray-100 p-5 rounded">
          {JSON.stringify(data, null, 2)}
        </pre>
      </main>
    );
  }