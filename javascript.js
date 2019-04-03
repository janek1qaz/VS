/*var n = prompt("wproawadź liczbę6");
function fibonacci(n) {
    if (n === 0) return 0;
    else if (n === 1) return 1;
    else if (n > 1) {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
	document.getElementById("sort").innerHTML = n;
}


function iloczyn(a,b){
    var x=prompt("podaj wynik: "+a+"*"+b+",");
    if(x==a*b)
    document.write("Brawo! wynik poprawny.");
    else
    document.write("Błąd! "+a+"*"+b+" = "+(a*b));
} 
x=prompt("podaj pierwszą liczbę: ");
y=prompt("podaj drugą liczbę: ")
iloczyn(x,y);
*/
const pacjent = {
    specializacja: "lekarz",

};
document.write(pacjent.specializacja);
var test = confirm("Tekst okienka decyzyjnego:");
if(test==true){
    document.write("Został kliknięty przycisk OK.");
}
else{
    document.write("Został kliknięty przycisk Anuluj");
}
function przekierowanie(){
    window.location.replace("http://www.wsip.pl/");

}
/*
setTimeout("przekierowanie();", 10000);
document.write("za 10s. nastąpi przekierowanie na stronę<br>");
document.write("www.wsip.pl");
document.write("Informacje o dokumencie:<br>");
document.write("Tytuł:<b>"+document.title+"</b><br>");
document.write("Ostatnia modyfikacja: <b>"+document.lastModified+"</b><br>")
document.write("URL: <b>"+document.location+"</b><br>");
var teskt="javascript";
document.write(tekst+"<br>");
document.write(tekst.italics()+"<br>");
document.write(tekst.strike().fontcolor("red")+"<br>");
document.write(tekst.substring(4,10)+"<br>");
document.write(tekst.toUpperCase()+"<br>");
*/
var data_czas = new Date();
document.write ("Data i czas:<b>"+data_czas+"</b><br>");
document.write("Dzień:<b>"+data_czas.getDay()+"</b><br>");
document.write("Miesąc: <b>"+data_czas.getMonth()+"</b><br>");
document.write("Rok: <b>"+data_czas.getFullYear()+"</b><br>");
var x=prompt("Podaj x:");
var y=prompt("Podaj y:");
document.write("Wartość max: <b>"+Math.max(x,y)+"</b><br>");
document.write("x do potęgi y: <b>"+Math.pow(x,y)+"</b><br>");
document.write("pierwiastek kwadratowy z x: <b>"+Math.sqrt(x)+"</b><br>");
document.write("logarytm naturalny y: <b>"+Math.log(y)+"</b><br>");

