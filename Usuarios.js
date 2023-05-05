class Estudiante {
  constructor(DNI, Nombre, Apellidos, usuario, contraseña, foto, Direccion, telefono, tipo_usuario, activo) {
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

var estudiante = new estudiante1("12345678A","Cristian","Bernabeu Romero","Bernabeu93","123456789","foto.jpg","Calle Falsa 123","999888444","alumno",true);
var estudiante = new estudiante2("98765412R","Ana","Romero Rus","AnaMariaRomero","789654123","foto2.jpg","Calle de la Piruleta","667607593","estudiante",true);
var estudiante = new estudiante3("65478932F","Javier","Bernabeu Guerrero","Guerrero99","111111111","foto3.jpg","Calle Monserrat","estudiante", true);

// Array de objetos Cursos

var cursos = new Cursos1("Matemáticas", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
var cursos = new Cursos2("Historia", 2, 3, 4, 5, 6, 7, 8, 9, 10, 1);
var cursos = new Cursos3("Lengua", 3, 4, 5, 6, 7, 8, 9, 10, 1, 2);


// Array de objetos Notas

var notas = new Notas1(1, 2, 3, 8.5);
var notas = new Notas2(2, 2, 3, 7.0);
var notas = new Notas3(3, 1, 4, 9.2);


for (let i = 0; i < estudiante.length; i++) {
  console.log(estudiante[i].DNI);
  console.log(estudiante[i].Nombre);
  console.log(estudiante[i].Apellidos);
  console.log(estudiante[i].usuario);
  console.log(estudiante[i].contraseña);
  console.log(estudiante[i].foto);
  console.log(estudiante[i].Direccion);
  console.log(estudiante[i].telefono);
  console.log(estudiante[i].tipo_usuario);
  console.log(estudiante[i].activo);
}
