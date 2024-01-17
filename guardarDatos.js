


function guardarYMostrarDatos() {
  const marca = document.getElementById('marca').value;
  const modelo = document.getElementById('modelo').value;
  const ano = document.getElementById('ano').value;
  const motor = document.getElementById('motor').value;

  // Validar si todos los campos están completos
  if (marca && modelo && ano && motor) {
    // Crear un nuevo elemento de lista
    const nuevaLista = document.getElementById('listaDatos');
    const nuevoItem = document.createElement('li');

    // Crear elementos p dentro del li para que estén en vertical
    const parrafoMarca = document.createElement('p');
    const parrafoModelo = document.createElement('p');
    const parrafoAno = document.createElement('p');
    const parrafoMotor = document.createElement('p');

    // Asignar el contenido de los párrafos con los datos ingresados
    parrafoMarca.textContent = `Marca: ${marca}`;
    parrafoModelo.textContent = `Modelo: ${modelo}`;
    parrafoAno.textContent = `Año: ${ano}`;
    parrafoMotor.textContent = `Motor: ${motor}`;

    // Agregar los párrafos al li
    nuevoItem.appendChild(parrafoMarca);
    nuevoItem.appendChild(parrafoModelo);
    nuevoItem.appendChild(parrafoAno);
    nuevoItem.appendChild(parrafoMotor);

    // Agregar el li a la lista
    nuevaLista.appendChild(nuevoItem);

    // Limpiar los campos del formulario después de guardar y mostrar los datos
    document.getElementById('marca').value = '';
    document.getElementById('modelo').value = '';
    document.getElementById('ano').value = '';
    document.getElementById('motor').value = '';


    // Mostrar el formulario después de mostrar los datos
    document.getElementById('formulario').style.display = 'none';

    // Mostrar el elemento con el ID 'datosMostrados'
    document.getElementById('datosMostrados').style.display = 'block';
    ocultarS3();
  } else {
    alert('Por favor, complete todos los campos.');

    
  }
}

function ocultarS3() {
  // Oculta la sección con la clase "s3"
  const s3Section = document.querySelector('.s3');
  if (s3Section) {
      s3Section.style.display = 'none';
  }
}