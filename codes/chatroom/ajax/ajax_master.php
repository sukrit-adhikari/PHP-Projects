<?php
session_start();

/////////////////////////SECURITY///////////////////////////////
// LOGIN CHECK

if(!isset($_SESSION['login']) ){
	exit();
}


////////////END/////SECURITY////END/////////////////////////////






////////////////////////////////////////////////////////////////
// get "GET" varaibles

$sots=$_GET['sots'];
$pots=$_GET['pots'];
$stts=$_GET['stts'];
$ptts=$_GET['ptts'];
$show=$_GET['show'];

// THESE all MUST always be PRESENT...
////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////
//

if($sots=="yes"){

	include 'sots.php';
//echo "<br>NEXT<br>"; //REDUNDANT
}

//
////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////
//

if($pots=="yes"){

	include 'pots.php';

echo "<br>NEXT<br>";
}

//
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
//

if($stts=="yes"){

	include 'stts.php';
//echo "<br>NEXT<br>"; //REDUNDANT
}

//
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
//

if($ptts=="yes"){

	include 'ptts.php';
echo "<br>NEXT<br>";
}

//
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
//

if($show=="yes"){

	include 'show.php';
//echo "<br>NEXT<br>"; //REDUNDANT
}

//
////////////////////////////////////////////////////////////////



?>
