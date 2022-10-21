let handleClick = (value) => {
  document.getElementById("display").value += value;
};

let handleSubmit = () => {
  let value = document.getElementById("display").value;
  if (value === "1234") {
    document.getElementById("message").classList.remove('failed');
    document.getElementById("message").classList.add('success');
    document.getElementById("message").innerHTML = "Success";
  } else {
    document.getElementById("message").classList.remove('success');
    document.getElementById("message").classList.add('failed');
    document.getElementById("message").innerHTML = "Incorrect";

  }
  handleClear();
};

let handleClear = () => {
  document.getElementById("display").value = "";
};
