let handleClick = (value) => {
  document.getElementById("display").value += value;
};

let handleSubmit = () => {
  let value = document.getElementById("display").value;
  if (value === "1234") {
    alert("Success");
  } else {
    alert("Incorrect Pin");
  }
  handleClear();
};

let handleClear = () => {
  document.getElementById("display").value = "";
};
