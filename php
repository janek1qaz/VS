<?php
$gatunek=@$_POST["gatunek"];
echo $gatunek;





include mysql_connect2inc.php;
$polaczenie=mysql_connect[$host,$login,$haslo,$baza] or die ("nie uzyskano polaczenia") ;
$sql1= "SELECT tytul FROM filmy";
$wynik_zap=mysql_query($polaczenie,$sql1);
$ilew = mysql_num_rows($wynik_zap);
echo $ilew;
$tytul = mysqli_fetch_array(

?>
