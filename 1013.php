<?php

    $a = explode(" ", trim(fgets(STDIN)));

    $A = intval($a[0]);
    $B = intval($a[1]);
    $C = intval($a[2]);

    if ($A > $B && $A > $C) {
        echo "$A eh o maior\n";
    } else if ($B > $C) {
        echo "$B eh o maior\n";
    } else {
        echo "$C eh o maior\n";
    }

?>