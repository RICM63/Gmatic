$(".boton").on("click", function () {
  var evento = $(this);
  guardarYMostrarContenido(evento);
});



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
    nuevoItem.style.color = 'white';
    nuevoItem.style.fontWeight = 'bold';

    const parrafoMarca = document.createElement('p');
    const parrafoModelo = document.createElement('p');
    const parrafoAno = document.createElement('p');
    const parrafoMotor = document.createElement('p');


    parrafoMarca.textContent = ` Marca: ${marca}`;
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
  const s3Section = document.querySelector('.s3');
  if (s3Section) {
    s3Section.style.display = 'none';
  }
}

function mostrarContenido() {
  const s2 = document.getElementById('s2');
  s2.style.display = 'block';
}

function guardarYMostrarContenido(evento) {
  console.log("f");
  // Obtener la fuente de la imagen dentro del elemento en s3
  const contenidoAGuardar = evento.closest('#elementoAGuardar').find('img#caja').attr('src');
  // Mostrar la imagen en s1
  const s3 = document.getElementById('s12');
  s3.innerHTML = `<img src="${contenidoAGuardar}" alt="imagen guardada">`;
  document.getElementById('s12').style.display = 'block';
  document.getElementById('s2').style.display = 'none';
}
