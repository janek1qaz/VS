function jd(){
y='';
x=window.prompt('wpisz zdanie');
p= parseInt(prompt('liczba przesunięć'));
for(i=0;i<x.length;i++){
y+=String.fromCharCode(x.charCodeAt(i)+p);
}
document.write(y);
}