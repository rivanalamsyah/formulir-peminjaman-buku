document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var book = document.getElementById("book").value;
  var dueDate = document.getElementById("due-date").value;

  var formData = {
    name: name,
    email: email,
    book: book,
    dueDate: dueDate
  };

  // Kirim data ke endpoint API
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (response.ok) {
      console.log("Data formulir berhasil dikirim!");
      // Lakukan tindakan setelah pengiriman berhasil
    } else {
      console.error("Gagal mengirim data formulir.");
      // Lakukan tindakan setelah pengiriman gagal
    }
  })
  .catch(error => {
    console.error("Terjadi kesalahan:", error);
  });

  // Clear input setelah pengiriman
  document.getElementById("myForm").reset();
});
