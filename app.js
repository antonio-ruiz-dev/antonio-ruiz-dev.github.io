const amigos = []; // Arreglo para almacenar los nombres de los amigos  

document.getElementById('agregarBtn').addEventListener('click', agregarAmigo);  
document.getElementById('sortearBtn').addEventListener('click', sortearAmigo);  

function agregarAmigo() {  
    const input = document.getElementById('nombreAmigo');  
    const nombre = input.value.trim();  

    if (nombre) {
          
        // Ocultar Ganadores anteriores  
        const ganadorContainer = document.getElementById('ganadorContainer');  
        const ganadorDiv = document.getElementById('ganador');  
        ganadorDiv.innerHTML = ""; // Limpiar el contenido anterior  
        ganadorContainer.classList.add('hidden');  

        //Agregar amigo nuevo
        amigos.push(nombre); // Agregar el nombre al arreglo  
        const li = document.createElement('li');  
        li.textContent = nombre;  
        document.getElementById('amigosList').appendChild(li);  
        input.value = ''; // Limpiar la caja de texto  
        animaImagen('assets/figura_humana.gif', 750, true);
              

    } else {  
        alert('Por favor, ingrese un nombre.');  
    }  
}

function animaImagen(imagenAnimada, durationInMillis, removeImage){
    // Mostrar la figura animada  
    const figuraContainer = document.getElementById('figuraContainer');  
    figuraContainer.classList.remove('hidden');  

    const figura = document.createElement('img');  
    figura.src = imagenAnimada; // Ruta de la imagen  
    figura.classList.add('figura');  

    figuraContainer.appendChild(figura);  
    if (removeImage) {
        // Remover la figura después de un tiempo  
        setTimeout(() => {  
            figuraContainer.removeChild(figura);  
        }, durationInMillis); // Mantener visible por 3/4 segundo      

    }    
}

function sortearAmigo() {  
    if (amigos.length === 0) {  
        alert('Agrega amigos antes de sortear.');  
        return;  
    }  
    animaImagen('assets/spinning.gif', 1500, true);
    // Revolver amigos visualmente  
    const ganadorContainer = document.getElementById('ganadorContainer');  
    const ganadorDiv = document.getElementById('ganador');  
    ganadorDiv.innerHTML = ""; // Limpiar el contenido anterior  
    ganadorContainer.classList.remove('hidden');  
    
    let suerte = amigos.slice(); // Copia del arreglo para revolver  
    let interval = setInterval(() => {  
        const randomIndex = Math.floor(Math.random() * suerte.length);  
        ganadorDiv.textContent = suerte[randomIndex];  
    }, 100); // Cambiar el ganador cada 100 ms  

    setTimeout(() => {  
        clearInterval(interval); // Detener la animación  
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);  
        const amigoSorteado = amigos[indiceAleatorio];  
        ganadorDiv.textContent = amigoSorteado; // Mostrar el nombre final después de la animación  
    }, 1500); // 1.5 segundos de animación  

    const figuraContainer = document.getElementById('figuraContainer');  
    figuraContainer.classList.remove('hidden');  

    const figura = document.createElement('img');  
    figura.src = 'assets/spinning-stop.png'; // Ruta de la imagen  
    figura.classList.add('figura');  
}