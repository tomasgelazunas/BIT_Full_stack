<?php

//DB prisijungimas
try {
    $conn = new PDO('mysql:host=localhost;dbname=ytube', 'root', '');
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
  }

require_once('sql.php');
require_once('functions.php');

//$pepper naudojamas registracijos ir prisijungimo metu. Vietoje userio passwordo sugeneruojamas SHA, kuris talpinamas SQL DB (dėl passw saugumo).

$pepper = "c1isvFdxMDdmjOlvxpecFw";

$search = isset($_GET['search']) ? htmlentities($_GET['search']) : '';
$page = (isset($_GET['page']) AND !empty($_GET['page'])) ? (int) $_GET['page'] : 1;

define("isUser", isLoggedIn());

?>