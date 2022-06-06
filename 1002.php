<?php

$raio = fgets(STDIN);

$n = 3.14159;

$A = $n * pow($raio, 2);

echo "A=" . number_format($A, 4, '.', "") . PHP_EOL;

?>