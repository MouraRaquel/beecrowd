<?php

    $n = trim(fgets(STDIN));
    $ht = trim(fgets(STDIN));
    $vh = fgets(STDIN);

    $salario = $ht*$vh;

    echo "NUMBER = $n\n";
    echo "SALARY = U$ " .number_format($salario, 2, ".", ""). "\n";

?>