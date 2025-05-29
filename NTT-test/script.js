document.addEventListener("DOMContentLoaded", () => {
  const statusDiv = document.getElementById("statusMessage");
  const tbody = document.querySelector("#usersTable tbody");

  fetch("https://randomuser.me/api/?results=10&inc=gender,name,location,email,dob,picture")
    .then(response => {
      if (!response.ok) {
        throw new Error("Respuesta de red no satisfactoria");
      }
      return response.json();
    })
    .then(data => {
      if (!data.results || data.results.length === 0) {
        showMessage("No se encontraron usuarios.", "info");
        return;
      }

      data.results.forEach(user => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${user.name.first} ${user.name.last}</td>
        <td>${user.gender === "male" ? "Masculino" : "Femenino"}</td>
        <td>${user.location.city}, ${user.location.country}</td>
        <td>${user.email}</td>
        <td>${new Date(user.dob.date).toLocaleDateString()}</td>
        <td><img src="${user.picture.thumbnail}" alt="Foto de ${user.name.first}" /></td>
        `;
        tbody.appendChild(tr);
      });
    })
    .catch(error => {
      console.error("Error al obtener los usuarios:", error);
      showMessage("❌ Ocurrió un error al cargar los usuarios. Intente más tarde.", "error");
    });

  // Función para mostrar mensajes
  function showMessage(message, type = "info") {
    statusDiv.textContent = message;
    statusDiv.className = `status-message ${type}`;
    statusDiv.style.display = "block";
  }
});


