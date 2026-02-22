function Division() {
  const a = 10;
  const b = 5;

  return (
    <div className="bg-white p-4 rounded shadow w-64 text-center">
      <p className="font-semibold">Division</p>
      <p>
        {a} ÷ {b} = {b !== 0 ? a / b : "Error"}
      </p>
    </div>
  );
}

export default Division;