<?php

    $n = trim(fgets(STDIN));
    $segundos = $n%60;
    $minutos = intdiv($n, 60)%60;
    $horas = intdiv(intdiv($n, 60), 60);

    echo "$horas:$minutos:$segundos\n";

?>