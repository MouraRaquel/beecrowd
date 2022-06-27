<?php

    $par = 0;
    $impar = 0;
    $pos = 0;
    $neg = 0;

    for ($i = 0; $i < 5; ++$i){
        $n = trim(fgets(STDIN));
        if ($n%2 == 0){
            $par +=1;
        }
        else{
            $impar += 1;
        }
        if ($n > 0 && $n != 0){
            $pos += 1;
        }
        if ($n < 0 && $n != 0){
            $neg += 1;
        }
    }

    echo "$par valor(es) par(es)\n";
    echo "$impar valor(es) impar(es)\n";
    echo "$pos valor(es) positivo(s)\n";
    echo "$neg valor(es) negativo(s)\n";

?>