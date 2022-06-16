<?php

    $tempo = trim(fgets(STDIN));
    $anos = intdiv($tempo, 365);
    $meses = intdiv(($tempo%365) , 30);
    $dias = ($tempo%365)%30;

    echo "$anos ano(s)\n";
    echo "$meses mes(es)\n";
    echo "$dias dia(s)\n";

?>