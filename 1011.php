<?php

    $raio = trim(fgets(STDIN));
    $pi = 3.14159;


    $volume = (4.0/3)*$pi*($raio**3);

    echo "VOLUME = " .number_format($volume, 3, ".", ""). "\n";

?>