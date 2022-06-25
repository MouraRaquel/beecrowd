<?php

    $x = explode(" ", trim(fgets(STDIN)));

    $nums = $x;
    sort($nums);
    
    foreach ($nums as $n) {
        echo "$n\n";
    }
    
    echo "\n";
    
    foreach ($x as $n) {
        echo "$n\n";
    }

?>