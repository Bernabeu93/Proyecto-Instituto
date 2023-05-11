class Estudiante {
  constructor(ID,DNI, Nombre, Apellidos, usuario, contraseña, foto, Direccion, telefono, tipo_usuario, activo) {
    this.ID = ID;
    this.DNI = DNI;
    this.Nombre = Nombre;
    this.Apellidos = Apellidos;
    this.usuario = usuario;
    this.contraseña = contraseña;
    this.foto = foto;
    this.Direccion = Direccion;
    this.telefono = telefono;
    this.tipo_usuario = tipo_usuario;
    this.activo = activo;
  }
}

class Cursos {
  constructor(nombre, id_a1, id_a2, id_a3, id_a4, id_a5, id_a6, id_a7, id_a8, id_a9, id_a10) {
    this.id = null;
    this.Nombre = nombre;
    this.id_a1 = id_a1;
    this.id_a2 = id_a2;
    this.id_a3 = id_a3;
    this.id_a4 = id_a4;
    this.id_a5 = id_a5;
    this.id_a6 = id_a6;
    this.id_a7 = id_a7;
    this.id_a8 = id_a8;
    this.id_a9 = id_a9;
    this.id_a10 = id_a10;
  }
}

class Notas {
  constructor(id_alumno, id_asignatura, id_curso, nota) {
    this.id = null;
    this.id_alumno = id_alumno;
    this.id_asignatura = id_asignatura;
    this.id_curso = id_curso;
    this.nota = nota;
  }
}

// Array de objetos Estudiante
var estudiantes = [
  new Estudiante("1","12345678A","Cristian","Bernabeu Romero","Bernabeu93","123456789","foto.jpg","Calle Falsa 123","999888444","alumno",true),
  new Estudiante("2","98765412R","Ana","Romero Rus","AnaMariaRomero","789654123","foto2.jpg","Calle de la Piruleta","667607593","estudiante",true),
  new Estudiante("3","65478932F","Javier","Bernabeu Guerrero","Guerrero99","111111111","foto3.jpg","Calle Monserrat","estudiante", true)
];

// Array de objetos Cursos
var cursos = [
  new Cursos("Matemáticas", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
  new Cursos("Historia", 2, 3, 4, 5, 6, 7, 8, 9, 10, 1),
  new Cursos("Lengua", 3, 4, 5, 6, 7, 8, 9, 10, 1, 2)
];

// Array de objetos Notas
var notas = [
  new Notas(1, 2, 3, 8.5),
  new Notas(2, 2, 3, 7.0),
  new Notas(3, 1, 4, 9.2)
];

for (let i = 0; i < estudiantes.length; i++) {
  console.log(estudiantes[i].DNI);
  console.log(estudiantes[i].Nombre);
  console.log(estudiantes[i].Apellidos);
  console.log(estudiantes[i].usuario);
  console.log(estudiantes[i].contraseña);
  console.log(estudiantes[i].foto);
  console.log(estudiantes[i].Direccion);
  console.log(estudiantes[i].telefono);
  console.log(estudiantes[i].tipo_usuario);
  console.log(estudiantes[i].activo);
}
