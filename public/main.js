const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       
        var data = JSON.parse(xhttp.responseText);
        var HTMLResponse = document.getElementById("app");
        
        data.data.forEach(data =>  {
        HTMLResponse.innerHTML +=  `Nombre :<li> ${data.name} <br>  Precio: <br> ${data.price_usd} </li> `;
                 });
                 
    }
};
xhttp.open("GET", "https://api.coinlore.net/api/tickers/?start=100&limit=100/data", true);
xhttp.send();

function bienvenida(){
    var form_name = document.getElementById("email").value;
    sessionStorage.setItem("email", form_name);
   /* if (localStorage.getItem("nombre") == undefined) {
        document.getElementsByClassName("login").show();
        document.getElementsByClassName("vista").hide();
      
    
    } else {
        document.getElementsByClassName("login").hide();
        document.getElementsByClassName("vista").show();
    } */   
    
}

let datoSet = sessionStorage.getItem("email");
datoSet = datoSet.split("@")[0]
console.log(datoSet);
document.getElementById("#bienvenida").innerText = datoSet;




