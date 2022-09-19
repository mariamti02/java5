


function hitung(){
    //penjabaran variabel dan tangkap value
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
 
    var tombol = frm.tombol.value;

    //inisialisasi fungsi
    switch (tombol) {
        case tambah():
            if (isNaN(a1) || isNaN(a2)) {
                alert("Harap masukkan angka!!");
            } else {
                var total = a1 + a2; //rumus
                frm.hasil.value = total; //penempatan hasil 
            } break;
        case kurang():
            if (isNaN(a1) || isNaN(a2)) {
                alert("Harap masukkan angka!!");
            } else {
                var total = a1 - a2; //rumus
                frm.hasil.value = total; //penempatan hasil 
            } break;
        case kali():
            if (isNaN(a1) || isNaN(a2)) {
                alert("Harap masukkan angka!!");
            } else {
                var total = a1 * a2; //rumus
                frm.hasil.value = total; //penempatan hasil 
            } break;
        case bagi():
            if (isNaN(a1) || isNaN(a2)) {
                alert("Harap masukkan angka!!");
            } else {
                var total = a1 / a2; //rumus
                frm.hasil.value = total; //penempatan hasil 
            } break;
        case pangkat():
            if (isNaN(a1) || isNaN(a2)) {
                alert("Harap masukkan angka!!");
            } else {
                var total = Math.pow(a1,a2); //rumus
                frm.hasil.value = total; //penempatan hasil
            } break;
        
    
        default:
            break;

   }
}


function tambah(){
   
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    
    if (isNaN(a1) || isNaN(a2)) {
        alert("Harap masukkan angka!!");
    } else {
        var total = a1 + a2; 
        frm.hasil.value = total; 
    } 
}

function kurang(){
   
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    
    if (isNaN(a1) || isNaN(a2)) {
        alert("Harap masukkan angka!!");
    } else {
       var total = a1 - a2; 
       frm.hasil.value = total; 
    } 
}

function kali(){
   
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);

    if (isNaN(a1) || isNaN(a2)) {
        alert("Harap masukkan angka!!");
    } else {
        var total = a1 * a2; 
        frm.hasil.value = total; 
    } 
}

function bagi(){
  
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);

    if (isNaN(a1) || isNaN(a2)) {
        alert("Harap masukkan angka!!");
    } else {
        var total = a1 / a2; 
        frm.hasil.value = total; 
    }  
}

function pangkat(){
  
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);

    if (isNaN(a1) || isNaN(a2)) {
        alert("Harap masukkan angka!!");
    } else {
        var total = Math.pow(a1,a2); 
        frm.hasil.value = total; 
    } 
}