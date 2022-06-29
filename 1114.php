<?php

    $senha = trim(fgets(STDIN));
    while ($senha != 2002){
        echo "Senha Invalida\n";
        $senha = trim(fgets(STDIN));
    }
    if ($senha == 2002){
        echo "Acesso Permitido\n";
    }
    
?>