

const $lucesDelCirculo = document.querySelectorAll('.luces-circulo');
let contadorDeLuz = 2; // Iniciar con el índice del color rojo
let todosLosAspectos = document.getElementById('todasEncendidas')

const mostrarLuz = () => {
    // Restablecer todas las luces a su estado original
    $lucesDelCirculo.forEach(luz => luz.className = 'luces-circulo');
    if (todosLosAspectos.checked){
        $lucesDelCirculo[2].classList.add('red'); // Amarillo (segundo)
        $lucesDelCirculo[3].classList.add('yellow'); // Amarillo (último)
        $lucesDelCirculo[1].classList.add('yellow'); // Amarillo (segundo)
        $lucesDelCirculo[0].classList.add('green'); // Amarillo (segundo)
    }else{
        // Añadir clases específicas según el contadorDeLuz
        if (contadorDeLuz === 0){
            $lucesDelCirculo[2].classList.add('red'); // Amarillo (segundo)
        }
        else if (contadorDeLuz === 1) {
            $lucesDelCirculo[1].classList.add('yellow'); // Amarillo (segundo)
        }else if (contadorDeLuz === 2) {
            $lucesDelCirculo[3].classList.add('yellow'); // Amarillo (último)
            $lucesDelCirculo[1].classList.add('yellow'); // Amarillo (segundo)
        }else if (contadorDeLuz === 3) {
            $lucesDelCirculo[0].classList.add('green'); // Amarillo (segundo)
        }
    }
    contadorDeLuz =  contadorDeLuz < 3 ? contadorDeLuz + 1: 0; // Incrementar el contador y asegurarse de que vuelva a 0 después de llegar a 3
};

setInterval(mostrarLuz, 2000);

const canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');
