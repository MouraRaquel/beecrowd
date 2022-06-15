<?php

    $tg = trim(fgets(STDIN));
    $vm = trim(fgets(STDIN));
    
    $ql = ($tg*$vm)/12;

    $result = number_format($ql, 3, ".", "");
    echo "$result\n";

?>