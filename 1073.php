<?php

    $n = trim(fgets(STDIN));

    for ($i = 1; $i < $n + 1; ++$i){
        if ($i%2 == 0){
            $q = $i**2;
            echo "$i^2 = $q\n";

        }

    }

?>