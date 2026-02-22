function Subtraction() {

  function handleSubtract() {
    const num1 = document.getElementById("sub1").value;
    const num2 = document.getElementById("sub2").value;

    const difference = Number(num1) - Number(num2);

    document.getElementById("subResult").innerText =
      "Result: " + difference;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Subtraction Calculator</h2>

      <input
        type="number"
        id="sub1"
        placeholder="Enter first number"
      />
      <br /><br />

      <input
        type="number"
        id="sub2"
        placeholder="Enter second number"
      />
      <br /><br />

      <button onClick={handleSubtract}>Subtract</button>

      <h3 id="subResult"></h3>
    </div>
  );
}

export default Subtraction;