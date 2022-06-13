<?php

    $nome = trim(fgets(STDIN));
    $salario = trim(fgets(STDIN));
    $vendas = trim(fgets(STDIN));

    $receber = ($vendas*0.15) + $salario;

    echo "TOTAL = R$ " .number_format($receber, 2, ".", ""). "\n";

?>