import { CountryServices } from "../services";

function App() {
  const fetchCountries = async () => {
    const resp = await CountryServices.getCountries();
    console.log("RESPUESTA", resp);
  };

  const fetchSendMessage = async () => {
    const resp = await CountryServices.sendMessage("Hola cómo estás?");
    console.log("RESPUESTA", resp);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3lx font-bold text-center mb-6">User Explorer</h1>
      <div className="flex justify-center mb-4">
        <button
          onClick={fetchCountries}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Obtener todos los países
        </button>
        <button
          onClick={fetchSendMessage}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Enviar mensaje 'Hola'
        </button>
      </div>
    </main>
  );
}

export default App;
