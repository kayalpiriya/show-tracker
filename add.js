function addd() {
  const input = document.getElementById("showName");
  const name = input.value.trim();
  if (!name) return alert("Please enter a TV Show name");

  const show = document.createElement("p");
  show.textContent = name;

  document.getElementById("showList").appendChild(show);
  input.value = "";
}