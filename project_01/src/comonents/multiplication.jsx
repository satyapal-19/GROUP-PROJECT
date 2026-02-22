function Multiplication() {
  const a = 10;
  const b = 5;

  return (
    <div className="bg-white p-4 rounded shadow w-64 text-center">
      <p className="font-semibold">Multiplication</p>
      <p>{a} × {b} = {a * b}</p>
    </div>
  );
}

export default Multiplication;