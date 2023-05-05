function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = estudiantes.find((estudiante) => estudiante.usuario === username && estudiante.contraseña === password);
    
    if (!user) {
      alert('Nombre de usuario o contraseña incorrectos');
      return false;
    }
    
    window.location.href = "file:///C:/Users/Usuario/Desktop/Proyecto%20P%C3%A1gina%20Cavanilles/Proyecto_Cavanilles-main/InicioAlumno.html";
    return false;
  }
  
  const estudiantes = [Cristian, Ana, Javier];
  
