let btnSubmit = document.getElementById('btn-submit');
let carts = [];

function submitHandler() {
    let id = carts.length ? carts[carts.length - 1].id + 1 : 1;

    let namaValue = document.getElementById('nama').value.trim();
    let itemValue = document.getElementById('item').value.trim();
    let hargaValue = document.getElementById('harga').value.trim();

    if (!namaValue || !itemValue || !hargaValue) {
        alert("Harap isi semua bidang");
        return;
    }

    let tempObj = {
        id,
        item: itemValue,
        harga: +hargaValue,
        nama: namaValue
    };

    carts.push(tempObj);
    getCarts();

    // Jangan kosongkan nama agar bisa tambah banyak barang dengan nama yang sama
    document.getElementById('item').value = '';
    document.getElementById('harga').value = '';
}

function getCarts() {
    let tBody = document.getElementById('tbody');
    tBody.innerHTML = '';

    carts.forEach(cart => {
        tBody.innerHTML += `<tr>
            <td class="py-2 px-4 border-b text-center">${cart.id}</td>
            <td class="py-2 px-4 border-b">${cart.item}</td>
            <td class="py-2 px-4 border-b text-right">Rp ${cart.harga.toLocaleString('id-ID')}</td>
        </tr>`;
    });

    // Update nama pembeli untuk ditampilkan saat print
    const namaDisplay = document.getElementById('nama-display');
    if (carts.length > 0) {
        namaDisplay.innerText = `Nama Pembeli: ${carts[0].nama}`;
        namaDisplay.classList.remove('hidden');
    }
}

function printHandler() {
    // Sembunyikan form input saat print
    const formSection = document.querySelector('.space-y-4');
    const btnSection = document.querySelector('.text-center.mb-6');

    formSection.style.display = 'none';
    btnSection.style.display = 'none';

    window.print();

    // Tampilkan kembali setelah print
    formSection.style.display = 'block';
    btnSection.style.display = 'block';
}

let btnPrint = document.getElementById('cetak');
btnPrint.addEventListener('click', printHandler);
btnSubmit.addEventListener('click', submitHandler);
