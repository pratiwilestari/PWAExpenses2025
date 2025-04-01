document.getElementById("dataForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const catatan = document.getElementById("catatan").value;
    const status = document.getElementById("status");

    fetch("https://script.google.com/macros/s/AKfycbyp1F5tdIWsFm-UvBLvQcR5CgvIbMdAkZIfYl_7mmTy6SHM1ngFhvPQTQNsFUhqCBRZ/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nama, catatan }),
    })
    .then(response => response.json())
    .then(data => {
        status.innerText = "✅ Data berhasil dikirim!";
        document.getElementById("dataForm").reset();
    })
    .catch(error => {
        status.innerText = "❌ Gagal mengirim data!";
        console.error(error);
    });
});
