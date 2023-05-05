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
  
const Matemáticas = new Cursos("Curso 1", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const Historia = new Cursos("Curso 2", 2, 3, 4, 5, 6, 7, 8, 9, 10, 1);
const Lengua = new Cursos("Curso 3", 3, 4, 5, 6, 7, 8, 9, 10, 1, 2);
