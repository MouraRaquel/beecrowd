<?php

    $p1 = explode(" ", trim(fgets(STDIN)));
    $p2 = explode(" ", trim(fgets(STDIN)));

    $dist = ((floatval($p2[0]) - floatval($p1[0]))**2 + (floatval($p2[1]) - floatval($p1[1]))**2)**0.5;
    $result = number_format($dist, 4, ".", "");
    echo $result . "\n";

?>