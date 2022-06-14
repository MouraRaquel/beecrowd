<?php

    $x = trim(fgets(STDIN));
    $y = trim(fgets(STDIN));

    $cm = $x/$y;
    $result = number_format($cm, 3, ".", "");
    echo "$result km/l\n";

?>