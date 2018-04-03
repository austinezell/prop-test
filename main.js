const content = document.getElementById("content");
document.body.addEventListener("click", function() {
  const li = document.createElement("li");
  li.innerText = "Clicked";
  content.insertBefore(li, content.firstChild);
});
document.body.addEventListener("touchstart", function() {
  const li = document.createElement("li");
  li.innerText = "Touch Start";
  content.insertBefore(li, content.firstChild);
});
document.body.addEventListener("touchend", function() {
  const li = document.createElement("li");
  li.innerText = "Touch End";
  content.insertBefore(li, content.firstChild);
});
document.body.addEventListener("touchcancel", function() {
  const li = document.createElement("li");
  li.innerText = "Touch Cancel";
  content.insertBefore(li, content.firstChild);
});
