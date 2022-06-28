<?php

    $x = trim(fgets(STDIN));
    $y = trim(fgets(STDIN));
    $soma = 0;

    for ($i = ($y + 1); $i < $x; ++$i){
        if ($i%2 != 0){
            $soma +=$i;
        }

    }

    echo "$soma\n";

?>