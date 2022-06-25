<?php

    $a = trim(fgets(STDIN));
    $b = trim(fgets(STDIN));
    $c = trim(fgets(STDIN));

    if ($a == "vertebrado") {
        if ($b == "ave") {
            if ($c == "carnivoro") {
                echo "aguia\n";
            }
            if ($c == "onivoro") {
                echo "pomba\n";
            }
        }
        if ($b == "mamifero") {
            if ($c == "onivoro") {
                echo "homem\n";
            }
            if ($c == "herbivoro") {
                echo "vaca\n";
            }
        }
    }
    if ($a == "invertebrado") {
        if ($b == "inseto") {
            if ($c == "hematofago") {
                echo "pulga\n";
            }
            if ($c == "herbivoro") {
                echo "lagarta\n";
            }
        }
        if ($b == "anelideo") {
            if ($c == "hematofago") {
                echo "sanguessuga\n";
            }
            if ($c == "onivoro") {
                echo "minhoca\n";
            }
        }
    }

?>