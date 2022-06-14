<?php

    $a = explode(" ", trim(fgets(STDIN)));
    $b = explode(" ", trim(fgets(STDIN)));


    $x1 = intval($a[1]) * floatval($a[2]);
    $x2 = intval($b[1]) * floatval($b[2]);

    $valor = $x1 + $x2;

    echo "VALOR A PAGAR: R$ " .number_format($valor, 2, ".", ""). "\n";

?>