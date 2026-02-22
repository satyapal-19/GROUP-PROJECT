function Division() {

  function handleDivide() {
    const num1 = document.getElementById("div1").value;
    const num2 = document.getElementById("div2").value;

    const a = Number(num1);
    const b = Number(num2);

    if (b === 0) {
      document.getElementById("divResult").innerText =
        "Cannot divide by zero";
    } else {
      const result = a / b;
      document.getElementById("divResult").innerText =
        "Result: " + result;
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Division Calculator</h2>

      <input
        type="number"
        id="div1"
        placeholder="Enter first number"
      />
      <br /><br />

      <input
        type="number"
        id="div2"
        placeholder="Enter second number"
      />
      <br /><br />

      <button onClick={handleDivide}>Divide</button>

      <h3 id="divResult"></h3>
    </div>
  );
}

export default Division;