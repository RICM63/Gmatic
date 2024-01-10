function guardarYMostrarDatos() {
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const ano = document.getElementById('ano').value;
    const motor = document.getElementById('motor').value;

    // Validar si ambos campos están completos
    if (marca && modelo && ano  && motor ) {
      // Crear un nuevo elemento de lista
      const nuevaLista = document.getElementById('listaDatos');
      const nuevoItem = document.createElement('li');
      // Asignar el contenido del ítem con los datos ingresados
      nuevoItem.textContent = ` Marca: ${marca},Modelo: ${modelo}, Año: ${ano}, Motor: ${motor}`;
      // Agregar el ítem a la lista
      nuevaLista.appendChild(nuevoItem);

      // Limpiar los campos del formulario después de guardar y mostrar los datos
      document.getElementById('marca').value = '';
      document.getElementById('modelo').value = '';
      document.getElementById('ano').value = '';
      document.getElementById('motor').value = '';

      // Ocultar el formulario después de mostrar los datos
      document.getElementById('formulario').style.display = 'none';
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }


    
   
 

      
     
     
   