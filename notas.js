class Notas {
    constructor(id_alumno, id_asignatura, id_curso, nota) {
      this.id = null;
      this.id_alumno = id_alumno;
      this.id_asignatura = id_asignatura;
      this.id_curso = id_curso;
      this.nota = nota;
    }
  }
  
const notas1 = new Notas(1, 2, 3, 8.5);
const notas2 = new Notas(2, 2, 3, 7.0);
const notas3 = new Notas(3, 1, 4, 9.2);
