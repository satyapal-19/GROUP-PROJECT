import { useState } from "react";
import Addition from "./comonents/addition";
import Subtraction from "./comonents/substration";
import Multiplication from "./comonents/multiplication";
import Division from "./comonents/division";

function App() {
  const [operation, setOperation] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">
        Calculator App
      </h1>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => setOperation("add")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add
        </button>

        <button
          onClick={() => setOperation("sub")}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Subtract
        </button>

        <button
          onClick={() => setOperation("mul")}
          className="px-4 py-2 bg-purple-500 text-white rounded"
        >
          Multiply
        </button>

        <button
          onClick={() => setOperation("div")}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Divide
        </button>
      </div>

      {/* Conditional Rendering */}
      <div className="mt-4">
        {operation === "add" && <Addition />}
        {operation === "sub" && <Subtraction />}
        {operation === "mul" && <Multiplication />}
        {operation === "div" && <Division />}
      </div>
    </div>
  );
}

export default App;