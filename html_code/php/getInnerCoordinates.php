<?php
require_once 'connection.php';
$postvalue = $_GET["ordinal"];
$resultset = mysql_query("select * from campus_coord where i_ordinal = ".$postvalue,$conn);

while($register = mysql_fetch_array($resultset))
{
		echo $register{"i_ordinal"}."-".$register{"s_nombre_marca"}."-".$register{"f_latitud"}."-".$register{"f_longitud"}; 
}

?>