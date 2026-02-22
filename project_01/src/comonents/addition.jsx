function Addition() {

  function handleAdd() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    const sum = Number(num1) + Number(num2);

    document.getElementById("result").innerText = "Result: " + sum;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Addition Calculator</h2>

      <input type="number" id="num1" placeholder="Enter first number" />
      <br /><br />

      <input type="number" id="num2" placeholder="Enter second number" />
      <br /><br />

      <button onClick={handleAdd}>Add</button>

      <h3 id="result"></h3>
    </div>
  );
}

export default Addition;