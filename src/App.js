import { useState } from "react";

export default function App() {
  const [peso, setPeso] = useState(0);
  const [horas, setHoras] = useState(0);
  const [precoFinal, setPrecoFinal] = useState(null);
  const [precoKg, setPrecoKg] = useState(75.0); // Novo estado para preço do kg

  const calcularPreco = () => {
    const custoKWh = 0.84;
    const potencia = 0.35;
    const desgaste = 1.0;
    const acabamento = 5.0;
    const margem = 2.0;

    const custoFilamento = (peso / 1000) * precoKg;
    const energiaKWh = potencia * horas;
    const custoEnergia = energiaKWh * custoKWh;
    const custoDesgaste = horas * desgaste;

    const subtotal = custoFilamento + custoEnergia + custoDesgaste + acabamento;
    const preco = subtotal * margem;

    setPrecoFinal(preco.toFixed(2));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-purple-600">Calculadora 3D</h1>

        <div className="mb-4">
          <label className="block text-sm font-medium">Preço do Filamento (R$/kg):</label>
          <input type="number" value={precoKg} onChange={(e) => setPrecoKg(Number(e.target.value))} className="w-full border rounded p-2 mt-1" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Peso da Peça (g):</label>
          <input type="number" value={peso} onChange={(e) => setPeso(Number(e.target.value))} className="w-full border rounded p-2 mt-1" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Tempo de Impressão (h):</label>
          <input type="number" value={horas} onChange={(e) => setHoras(Number(e.target.value))} className="w-full border rounded p-2 mt-1" />
        </div>

        <button onClick={calcularPreco} className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">Calcular Preço</button>

        {precoFinal && (
          <div className="mt-6 p-4 bg-purple-100 text-purple-800 rounded text-center">
            <p className="text-lg font-semibold">Preço sugerido:</p>
            <p className="text-2xl font-bold">R$ {precoFinal}</p>
          </div>
        )}
      </div>
    </div>
  );
}