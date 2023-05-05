class Estudiante {
  constructor(id, dni, nombre, apellidos, usuario, contraseña, foto, direccion, telefono, tipoUsuario, activo) {
    this.id = id;
    this.dni = dni;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.usuario = usuario;
    this.contraseña = contraseña;
    this.foto = foto;
    this.direccion = direccion;
    this.telefono = telefono;
    this.tipoUsuario = tipoUsuario;
    this.activo = activo;
  }
}

let contadorIds = 0;

const Cristian = new Estudiante(++contadorIds, "12345678A", "Cristian", "Bernabeu Romero", "Bernabeu93", "123456789", "foto.jpg", "Calle Falsa 123", "999888444", "alumno", true);
console.log(Cristian);

const Ana = new Estudiante(++contadorIds, "98765412R", "Ana", "Romero Rus", "AnaMariaRomero", "789654123", "foto2.jpg", "Calle de la Piruleta", "667607593", "estudiante", true);
console.log(Ana);

const Javier = new Estudiante(++contadorIds, "65478932F", "Javier", "Bernabeu Guerrero", "Guerrero99", "111111111", "foto3.jpg", "Calle Monserrat", "666555444", "estudiante", true);
console.log(Javier);
