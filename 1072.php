<?php

    $n = trim(fgets(STDIN));
    $dentro = 0;
    $fora = 0;

    for ($i = 0; $i < $n; ++$i){
        $valor = trim(fgets(STDIN));
        if($valor >= 10 && $valor <=20){
            $dentro +=1;
        }else{
            $fora +=1;
        }

    }

    echo "$dentro in\n";
    echo "$fora out\n";
?>