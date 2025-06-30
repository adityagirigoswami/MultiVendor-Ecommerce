function validateForm() {
    const name = document.getElementById("name").value;
    if (name.trim() === "") {
      alert("Name is required");
      return false;
    }
    return true;
  }
  