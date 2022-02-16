function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
}

probarValidarNombre();


function probarValidarCiudad(){
    console.assert(validarCiudad('')==='Debes seleccionar una ciudad', 
    'Validar ciudad no valido que haya una ciudad seleccionada');
}

probarValidarCiudad();



function probarValidarDescripcionRegalo(){
    console.assert(validarDescripcionRegalo('')==='Debes describir el regalo que quieres', 
    'Validar descripcion regalo no valido si la descripcion estaba vacia')

    console.assert(validarDescripcionRegalo('111111111111111111111111111111111111111111111111111111111111111111111111111')===
    'Tranquilo! tu descripcion debe tener menos de 50 caracteres', 
    'Validar descripcion regalo no valido que la descripcion tenga menos de 50 caracteres')
};

probarValidarDescripcionRegalo();
