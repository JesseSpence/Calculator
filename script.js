let sum = "";
function buildSum(char) {
  sum += char;
  document.getElementById("output").innerHTML = sum;
}
function calculate() {
  sum = eval(sum);
  document.getElementById("output").innerHTML = sum;
}
function reset() {
  sum = "";
  document.getElementById("output").innerHTML = sum;
}

let menu_btn = document.querySelector("#menu-btn")
        let sidebar = document.getElementById("sidebar")
        let container = document.getElementById("my_container")

        menu_btn.addEventListener("click", function() {
            sidebar.classList.toggle("active-nav")
            container.classList.toggle("active-cont")
        })
       