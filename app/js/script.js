document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
  
    const createUserButton = document.getElementById("createUser");
    const findUserButton = document.getElementById("findUser");
    const updateUserEmailButton = document.getElementById("updateUserEmail");
    const deleteUserButton = document.getElementById("deleteUser");

    const baseURL = 'http://localhost:3000/users'

    createUserButton.addEventListener("click", async () => {
      const name =  document.getElementById("createName").value;
      const email = document.getElementById("createEmail").value;

      const response = await fetch(baseURL + '/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name, email}),
      });

      const result = await response.json();
      output.innerHTML = JSON.stringify(result);
    });

    findUserButton.addEventListener("click", async () => {
      const name =  document.getElementById("findName").value;

      const response = await fetch(baseURL + '/' + name, {
        method: "GET",
      });
      const result = await response.json();
      output.innerHTML = JSON.stringify(result);
    });

    updateUserEmailButton.addEventListener("click", async () => {
      const name =  document.getElementById("updateName").value;
      const email = document.getElementById("updateEmail").value;

      const response = await fetch(baseURL + '/' + name, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email}),
      });

      const result = await response.json();
      output.innerHTML = JSON.stringify(result);
    });

    deleteUserButton.addEventListener("click", async () => {
      const name =  document.getElementById("deleteName").value;

      const response = await fetch(baseURL + '/' + name, {
        method: "DELETE",
      });
      console.log(response);
      if (response === null) {
        output.innerHTML = "Sukses delete!";
        return;
      }
      const result = await response.json();
      output.innerHTML = JSON.stringify(result);
    });
  });
  