<?php

    $a = explode(" ", trim(fgets(STDIN)));

    $A = floatval($a[0]);
    $B = floatval($a[1]);
    $C = floatval($a[2]);

    $pi = 3.14159;

    echo "TRIANGULO: " .number_format(($A*$C) / 2, 3, ".", ""). "\n";
    echo "CIRCULO: " .number_format($pi*($C**2), 3, ".", ""). "\n";
    echo "TRAPEZIO: " .number_format((($A+$B)*$C)/2, 3, ".", ""). "\n";
    echo "QUADRADO: " .number_format($B**2, 3, ".", ""). "\n";
    echo "RETANGULO: " .number_format($A*$B, 3, ".", ""). "\n";

?>