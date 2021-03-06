let button = document.getElementById("button-send");
let popup = document.getElementById("button-credits");

popup.addEventListener("click", function (event) {
  event.preventDefault();
  showPopUp();
});

button.addEventListener("click", function (event) {
  event.preventDefault();
  send();
});

function showPopUp() {
  varWindow = window.open(
    "popup.html",
    "pagina",
    "width=350, height=255, top=100, left=110, scrollbars=no "
  );
}

var nameP = document.getElementById("name");
var messCol = document.getElementById("text");

function send() {

  var con = document.getElementById("content");

  if (messCol.value.trim() == "" || nameP.value == "") {
    alert("The input cannot be empty or blank");
    return;
  }

  var messDiv = document.createElement("div");

  messDiv.setAttribute(
    "style",
    "color: #ffffff;background-color: #b19cd9;border-radius: 3px;padding-left: auto;height: 30px;margin: 6px;display: flex;justify-content: space-between;"
  );
  {
    var messCon = document.createElement("div");
    messCon.setAttribute(
      "style",
      "float:left;width:350px;height=30px;line-height:30px;overflow:auto; background-color: 12224a; margin-left: 10px"
    );
    var del = document.createElement("a");
    del.setAttribute(
      "style",
      "background-color: #b19cd9;color: #12224a;border: none;cursor: pointer;transition: .4s ease; font-weight: bold; text-align: center; display: flex; align-items: center; text-align: center; margin-right: 10px;"
    );
    del.setAttribute("href", "javascript:;");
    del.innerHTML = "delete";
    messDiv.appendChild(messCon);
    messDiv.appendChild(del);
    messCon.innerHTML = nameP.value + ": " + messCol.value;
    del.onclick = function () {
      con.removeChild(this.parentNode);
    };
  }
  con.appendChild(messDiv);
  messCol.value = ""
  nameP.value = "";
}



