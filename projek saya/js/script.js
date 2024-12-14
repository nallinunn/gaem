function tebak() {
    const nama = document.getElementById("username").value.trim();
    if (!nama) {
        document.getElementById("result").textContent = "Harap masukkan nama Anda!";
        return;
    }

    const khodams = [
        "Macan Putih",
        "Tuyul",
        "Beat Racing",
        "Genderuwo",
        "Tuyul Racing",
        "Bakwan",
        "Naga Putih",
        "Ayam Mangan",
        "Joko Kendil",
        "Pocong Judol"
    ];

    const randomIndex = Math.floor(Math.random() * khodams.length);
    const khodam = khodams[randomIndex];

    document.getElementById("result").textContent = `Halo ${nama}! Khodam Anda adalah  ${khodam}.`;
}