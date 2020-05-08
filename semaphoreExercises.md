### Ejercicios adicionales

1. Hacer un semáforo de 3 estados (rojo, ámbar, verde) para una sola bombilla, que empezará siendo verde, de manera que cuando pinche en la bombilla esta cambie su estado al siguiente, siguiendo esta secuencia:

- Verde -> Ámbar -> Rojo -> Verde ...

2. A partir de la solución anterior, hacer un semáforo de 4 estados (rojo, ámbar, verde, apagado) para una sola bombilla, que empezará apagada, de manera que cuando pinche en la bombilla la primera vez, esta cambie su estado a verde, y en sucesivos clicks siga la secuencia del ejercicio anterior (no volviendo a apagarse).

3. Hacer un semáforo con 3 bombillas donde cada una de ellas tenga 2 estados (ON/OFF), siendo que:

- La primera sea verde cuando está en ON
- La segunda sea ámbar cuando está en ON
- La tercera sea roja cuando está en ON
- Todas ellas sean negras cuando están en OFF

  Además, habrá un botón adicional que al pinchar sobre él cambiará el estado de las bombillas acorde a la secuencia del ejercicio anterior, es decir:

- El semáforo comienza apagado por completo
- Tras el primer click, se enciende solo la verde
- Segundo click, se apaga verde y se enciende ámbar
- Tercer click, se apaga ámbar y se enciende roja
- Cuarto click, se apaga roja y se enciende verde
  ...

  El botón que cambia el estado del semáforo debe hacerse obligatoriamente con este elemento HTML:

  `<a href="deadend.html">Cambiar</a>`