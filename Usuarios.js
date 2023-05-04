function Estudiante(DNI, Nombre, Apellidos, usuario, contraseña, foto, Direccion, telefono, tipo_usuario, activo) {
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

  const Cristian=new Estudiante("12345678A","Cristian","Bernabeu Romero","Bernabeu93","123456789","foto.jpg","Calle Falsa 123","999888444","alumno",true);