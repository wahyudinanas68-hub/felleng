<?php 

$dbh = new PDO('mysql:host=localhost;dbname=sinandung_db', 'root', '');

$db = $dbh->prepare('SELECT * FROM building');

$db->execute();

$sekolah = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($sekolah);

echo $data;



?>