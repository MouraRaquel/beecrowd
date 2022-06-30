<?php

    $n = trim(fgets(STDIN));
    $x = $n;
    while ($x != 0){
        $div = $n/$x;
        if ($n%$x == 0){
            echo "$div\n";
        }
        $x = $x - 1;
    }
    
?>