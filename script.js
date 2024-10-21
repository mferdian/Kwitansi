let btnSubmit = document.getElementById('btn-submit');
let carts = [];

function submitHandler() {
    let id = carts.length ? carts[carts.length - 1].id + 1 : 1;

    let namaValue = document.getElementById('nama').value;
    let itemValue = document.getElementById('item').value;
    let hargaValue = document.getElementById('harga').value;

    if (!namaValue || !itemValue || !hargaValue) {
        alert("Harap isi semua bidang");
        return;
    }

    let tempObj = {
        id,
        item: itemValue,
        harga: +hargaValue
    };

    carts.push(tempObj);
    getCarts();

    // Clear the input fields after submission
    document.getElementById('nama').value = '';
    document.getElementById('item').value = '';
    document.getElementById('harga').value = '';
}

function getCarts() {
    let tBody = document.getElementById('tbody');
    tBody.innerHTML = '';
    carts.forEach(cart => {
        tBody.innerHTML += `<tr>
            <td>${cart.id}</td>
            <td>${cart.item}</td>
            <td>Rp ${cart.harga.toLocaleString()}</td>
        </tr>`;
    });
}

function printHandler() {
    let formBox = document.querySelector('.form-box');
    formBox.style.display = 'none';
    window.print();
    formBox.style.display = 'block';
}

let btnPrint = document.getElementById('cetak');
btnPrint.addEventListener('click', printHandler);

btnSubmit.addEventListener('click', submitHandler);
