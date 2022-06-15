<?php
    $notas = array(100, 50, 20, 10, 5, 2, 1);

    $valor = readline();

    echo $valor . "\n";

    for ($i = 0; $i < 7; $i++) {
        $count =  $valor / $notas[$i];
        
        echo (int) $count . " nota(s) de R$ " . $notas[$i] . ",00\n";
        
        $valor %= $notas[$i];
    }
?>