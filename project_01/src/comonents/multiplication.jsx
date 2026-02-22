function Multiplication() {

  function handleMultiply() {
    const num1 = document.getElementById("mul1").value;
    const num2 = document.getElementById("mul2").value;

    const product = Number(num1) * Number(num2);

    document.getElementById("mulResult").innerText =
      "Result: " + product;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Multiplication Calculator</h2>

      <input
        type="number"
        id="mul1"
        placeholder="Enter first number"
      />
      <br /><br />

      <input
        type="number"
        id="mul2"
        placeholder="Enter second number"
      />
      <br /><br />

      <button onClick={handleMultiply}>Multiply</button>

      <h3 id="mulResult"></h3>
    </div>
  );
}

export default Multiplication;