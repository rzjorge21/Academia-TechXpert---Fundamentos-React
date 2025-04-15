import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import axios from "axios";

function App() {
  const [users, setUsers] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    const response = await axios.get("https://randomuser.me/api/?results=5");
    setUsers(response.data.results);

    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3lx font-bold text-center mb-6">User Explorer</h1>
      <div className="flex justify-center mb-4">
        <button onClick={fetchUsers} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Reload Users
        </button>
      </div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="grid gap-4 max-w-md mx-auto">
          {users.map((item: any, idx: any) => (
            <UserCard
              key={idx}
              name={item.name.first}
              email={item.email}
              image={item.picture.large}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default App;
