document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
  
    const createUserButton = document.getElementById("createUser");
    const findUserButton = document.getElementById("findUser");
    const updateUserEmailButton = document.getElementById("updateUserEmail");
    const deleteUserButton = document.getElementById("deleteUser");
  
    // Define an Axios instance with a base URL
    const axiosInstance = axios.create({
      baseURL: "express-railway-production-4a8a.up.railway.app/users", // Assuming your API routes start with "/users"
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    createUserButton.addEventListener("click", async () => {
      const name = document.getElementById("createName").value;
      const email = document.getElementById("createEmail").value;
      try {
        const response = await axiosInstance.post("/", { name, email });
        output.innerHTML = JSON.stringify(response.result);
      } catch (error) {
        output.innerHTML = JSON.stringify(error.response.msg);
      }
    });
  
    findUserButton.addEventListener("click", async () => {
      const name = document.getElementById("findName").value;
  
      try {
        const response = await axiosInstance.get(`/${name}`);
        output.innerHTML = JSON.stringify(response.data);
      } catch (error) {
        output.innerHTML = JSON.stringify(error.response.data);
      }
    });
  
    updateUserEmailButton.addEventListener("click", async () => {
      const name = document.getElementById("updateName").value;
      const email = document.getElementById("updateEmail").value;
  
      try {
        const response = await axiosInstance.put(`/${name}/email`, { email });
        output.innerHTML = JSON.stringify(response.data);
      } catch (error) {
        output.innerHTML = JSON.stringify(error.response.data);
      }
    });
  
    deleteUserButton.addEventListener("click", async () => {
      const name = document.getElementById("deleteName").value;
  
      try {
        await axiosInstance.delete(`/${name}`);
        output.innerHTML = "User deleted successfully.";
      } catch (error) {
        output.innerHTML = JSON.stringify(error.response.data);
      }
    });
  });
  