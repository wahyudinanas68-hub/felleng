<?php 

$isijson = file_get_contents('pizza.json');

$isijson = utf8_encode($isijson);

$result = json_decode($isijson, true);

var_dump($result);

?>