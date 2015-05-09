<?php
header("Content-type: text/xml; charset=utf-8");
require_once 'connection.php';
$resultset = mysql_query("select * from puntos_ruta",$conn);
$xml;
/*
$xml = $xml.'<?xml version="1.0" encoding="UTF-8"?>';
*/
$xml = $xml.'<root>';

while($register = mysql_fetch_array($resultset))
{
		$xml = $xml.'	<node>';
		$xml = $xml.'		<numero_ordinal>'.$register{"i_ordinal"}.'</numero_ordinal>'; 
		$xml = $xml.'		<nombre_lugar>'.$register{"s_nombre_marca"}.'</nombre_lugar>';
		$xml = $xml.'		<latitud>'.$register{"f_latitud"}.'</latitud>';
		$xml = $xml.'		<longitud>'.$register{"f_longitud"}.'</longitud>';
		$xml = $xml.'	</node>';
}

$xml = $xml.'</root>';

echo $xml;

?>