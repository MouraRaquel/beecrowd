<?php

    $a = fgets(STDIN);
    $b = fgets(STDIN);

    $media = ($a*3.5 + $b*7.5)/11;

    echo "MEDIA = " .number_format($media, 5, ".", ""). "\n";

?>