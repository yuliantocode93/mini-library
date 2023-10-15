// Definisikan class untuk data pengguna
class User {
    constructor(id, nama, email) {
        this.id = id;
        this.nama = nama;
        this.email = email;
    }
}

// Simulasikan data pengguna
const users = [
    new User(1, "yulianto", "yulianto@gmail.com"),
    new User(2, "Kwon Yuli", "kwonyuli@gmail.com"),
    new User(3, "julian", "julian@gmail.com")
];

// Ambil elemen tbody dari tabel
const tableBody = document.getElementById('data-table-body');

// Tambahkan data ke dalam tabel
users.forEach(user => {
    const row = `<tr>
                    <td>${user.id}</td>
                    <td>${user.nama}</td>
                    <td>${user.email}</td>
                </tr>`;
    tableBody.innerHTML += row;
});
