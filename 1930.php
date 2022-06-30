<?php

    $line = explode(" ", trim(fgets(STDIN)));
    $t1 = floatval($line[0]);
    $t2 = floatval($line[1]);
    $t3 = floatval($line[2]);
    $t4 = floatval($line[3]);

    $ti = ($t1 + $t2 + $t3 + $t4) - 3;

    echo "$ti\n";

?>