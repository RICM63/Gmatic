function guardarYMostrarDatos() {
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const ano = document.getElementById('ano').value;
    const motor = document.getElementById('motor').value;

    if (marca && modelo && ano  && motor ) {
      // Crear un nuevo elemento de lista
      const nuevaLista = document.getElementById('listaDatos');
      const nuevoItem = document.createElement('li');
     
      nuevoItem.textContent = ` Marca: ${marca},Modelo: ${modelo}, Año: ${ano}, Motor: ${motor}`;
      nuevaLista.appendChild(nuevoItem);

      document.getElementById('marca').value = '';
      document.getElementById('modelo').value = '';
      document.getElementById('ano').value = '';
      document.getElementById('motor').value = '';

      document.getElementById('formulario').style.display='block';

      document.getElementById('datosMostrados').style.display ='block';

     
      document.getElementById('formulario').style.display = 'none';
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }
