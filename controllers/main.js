var arrNhanVien = [];

document.querySelector('#btnThemNV').onclick = function(){
    //lấy thông tin nhân viên từ người dùng nhập vào
    // var nvNew = new NhanVien();
    // nvNew.taiKhoan = document.querySelector('#tknv').value;
    // nvNew.hoVaTen = document.querySelector('#name').value;
    // nvNew.email = document.querySelector('#email').value;
    // nvNew.matKhau = document.querySelector('#password').value;
    // nvNew.ngayLam = document.querySelector('#datepicker').value;
    // nvNew.chucVu = document.querySelector('#chucvu').value;
    // nvNew.giolam = document.querySelector('#gioLam').value;


    // console.log(nvNew);
    // arrNhanVien.push(nvNew);
    // renderTableNhanVien(arrNhanVien);
    // tạo ra tr khi mỗi làn click vào thêm người dùng
    // var trNhanVien = document.createElement('tr');

    //tạo ra các thẻ td
    // var tdTaiKhoan = document.createElement('td');
    // tdTaiKhoan.innerHTML = nv.taiKhoan;
    // var tdHoVaten = document.createElement('td');
    // tdHoVaten.innerHTML = nv.hoVaTen;
    // var tdemail = document.createElement('td');
    // tdemail.innerHTML = nv.email;
    // var tdNgayLam = document.createElement('td');
    // tdNgayLam.innerHTML = nv.Ngaylam;
    // var tdChucVu = document.createElement('td');
    // tdChucVu.innerHTML = nv.chucVu;
    // var tdTongLuong = document.createElement('td');
    // tdTongLuong.innerHTML ="0";

    //append td vào tr
    // trNhanVien.appendChild(tdTaiKhoan);
    // trNhanVien.appendChild(tdHoVaten);
    // trNhanVien.appendChild(tdemail);
    // trNhanVien.appendChild(tdNgayLam);
    // trNhanVien.appendChild(tdChucVu);
    // trNhanVien.appendChild(tdTongLuong);

    //append tr vào tbody
    // document.querySelector('#tableDanhSach').appendChild(trNhanVien);
    //thêm nhân viên vào mảng
    var st = new NhanVien()
    var check = true
    do {
        st.taiKhoan = document.querySelector('#tknv').value
        if (arrNhanVien.length > 0) {
            if (!validateAccountExit(st.taiKhoan, arrNhanVien)) {
                check = false
                break
            }
        }
        if (!validateAccount(st.taiKhoan)) {
            check = false
            break
        }
        st.hoVaTen = document.querySelector('#name').value
        if (!validateEmployeeName(st.hoVaTen)) {
            check = false
            break
        }
        st.email = document.querySelector('#email').value
        if (!validateEmail(st.email)) {
            check = false
            break
        }
        st.matKhau = document.querySelector('#password').value
        if (!validatePassword(st.matKhau)) {
            check = false
            break
        }
        st.ngaylam = document.querySelector('#datepicker').value
        if (!validateNL(st.ngaylam)) {
            check = false
            break
        }
        st.LuongCoBan = document.querySelector('#luongCB').value
        if (!validateSalary(st.LuongCoBan)) {
            check = false
            break
        }
        st.chucVu = document.querySelector('#chucvu').value
        if (!validateCV(st.chucVu)) {
            check = false
            break
        }
        st.giolam = document.querySelector('#gioLam').value
        if (!validateGL(st.giolam)) {
            check = false
            break
        }
        st.tongLuong = st.tongLuong()
        st.loaiNhanVien = st.loaiNhanVien()
        if (check) {
            arrNhanVien.push(st) 
        }
    }
    while (!check)
    if (arrNhanVien.length > 0)
        document.querySelector("#tableDanhSach").innerHTML = renderTableNhanVien(arrNhanVien)
    
        saveStorageArrNhanVien(arrNhanVien); 
        // document.querySelector('#tknv').disabled = true;  
        // document.querySelector('#btnThemNV').disabled = true; 
}
//tạo table nhân viên
function renderTableNhanVien(arrNV) {
    var outputHTML = '';
    for (var index = 0; index < arrNV.length; index++) {
        var nhanVien = arrNV[index];
        console.log(nhanVien.tongLuong)
        if (nhanVien.tongLuong > 0 ){
            outputHTML += `
            <tr>
                <td>${nhanVien.taiKhoan}</td>
                <td>${nhanVien.hoVaTen}</td>
                <td>${nhanVien.email}</td>
                <td>${nhanVien.ngaylam}</td>
                <td>${nhanVien.chucVu}</td>
                <td>${nhanVien.tongLuong}</td>
                <td>${nhanVien.loaiNhanVien}</td>
                <td>
                    <button class="btn btn-danger" onclick="xoaNhanVien('${index}')">Xoá</button>
                    <button class="btn btn-primary mx-2" onclick="updateNhanVien('${index}')">Sửa</button>
                </td>
            </tr>
        `
        }else{
            outputHTML += `
            <tr>
                <td>${nhanVien.taiKhoan}</td>
                <td>${nhanVien.hoVaTen}</td>
                <td>${nhanVien.email}</td>
                <td>${nhanVien.ngaylam}</td>
                <td>${nhanVien.chucVu}</td>
                <td>${nhanVien.tongLuong()}</td>
                <td>${nhanVien.loaiNhanVien()}</td>
                <td>
                    <button class="btn btn-danger" onclick="xoaNhanVien('${index}')">Xoá</button>
                    <button class="btn btn-primary mx-2" onclick="updateNhanVien('${index}')">Sửa</button>
                </td>
            </tr>
        `
        }
        
    }
    return outputHTML;
}
//Tìm kiếm
document.querySelector('#btnTimNV').onclick = function () {
    var lNV = document.querySelector('#searchName').value
    var nv = []
    console.log("Loai NV:   "+lNV)
    if (lNV === "Loại nhân viên") {
        document.querySelector("#tableDanhSach").innerHTML = renderTableNhanVien(arrNhanVien)
    } else {
        for (var index = 0; index < arrNhanVien.length; index++) {
            if (arrNhanVien[index].hideshow) {
                if (arrNhanVien[index].loaiNhanVien === lNV)
                    nv.push(arrNhanVien[index])
                    console.table(nv)
            }
            
        }
        
        document.querySelector("#tableDanhSach").innerHTML = renderTableNhanVien(nv)
    }
           
}
//Hàm xóa nhân viên
function xoaNhanVien(indexDel) {
    arrNhanVien.splice(indexDel, 1);
    //luu
    saveStorageArrNhanVien(arrNhanVien);
    //tạo table
    document.querySelector("#tableDanhSach").innerHTML = renderTableNhanVien(arrNhanVien)
     alert('Bạn có chắc chắn muốn xóa')
}


//làm mới nhân viên khi click vao thêm nhân viên
function newTableNhanVien() {
    document.querySelector('#tknv').value = null
    document.querySelector('#name').value = null
    document.querySelector('#email').value = null
    document.querySelector('#password').value = null
    document.querySelector('#datepicker').value = null
    document.querySelector('#luongCB').value = null
    document.querySelector('#chucvu').value = "Chọn chức vụ"
    document.querySelector('#gioLam').value = null

    // document.querySelector('#btnThemNV').enable  = false;
    // document.querySelector('#tknv').enable  = false;
}
//Phương thức lưu vào application storage
function saveStorageArrNhanVien(arr) {
    //Chuyển arr về chuỗi
    var strNhanVien = JSON.stringify(arr); // '[{},{},{}]'
    //Lưu string vào storage
    localStorage.setItem('arrNhanVien', strNhanVien);
}

//Phương thức lấy dữ liệu từ localstorage
function getStorageJSON(name) {

    if (localStorage.getItem(name)) { //Nếu có storage name đó thì mới đi vào if
        var str = localStorage.getItem(name);
        var jsonValue = JSON.parse(str);
    console.log(jsonValue)
        console.log('jsonValue', jsonValue);
        return jsonValue;
        
    }
    return null;
}

window.onload = function () { //Sự kiện khi windown load xong html css js 
    //Khi trang web load lên thì lấy dữ liệu từ storage arrSinhVien nếu có thì gán vào 
    if (getStorageJSON('arrNhanVien')) {
        //Lấy ra 
        arrNhanVien = getStorageJSON('arrNhanVien');
        //Tạo table
        document.querySelector("#tableDanhSach").innerHTML = renderTableNhanVien(arrNhanVien)
    }
}


document.querySelector('#btnThem').onclick = function () {
    newTableNhanVien()
}


function updateNhanVien(nv) {
    document.getElementById("btnThem").click()
    document.querySelector('#tknv').value = arrNhanVien[nv].taiKhoan
    document.querySelector('#name').value = arrNhanVien[nv].hoVaTen
    document.querySelector('#email').value = arrNhanVien[nv].email
    document.querySelector('#password').value = arrNhanVien[nv].matKhau
    document.querySelector('#datepicker').value = arrNhanVien[nv].ngaylam
    document.querySelector('#luongCB').value = arrNhanVien[nv].LuongCoBan
    document.querySelector('#chucvu').value = arrNhanVien[nv].chucVu
    document.querySelector('#gioLam').value = arrNhanVien[nv].giolam
    var newUpdate = new NhanVien()
    document.querySelector('#btnCapNhat').onclick = function () {
        var check = true, savetk = arrNhanVien[nv].taiKhoan
        do {
            newUpdate.taiKhoan = document.querySelector('#tknv').value
            arrNhanVien[nv].taiKhoan = ""
            if (arrNhanVien.length > 0) {
                if (!validateAccountExit(newUpdate.taiKhoan, arrNhanVien)) {
                    check = false
                    arrNhanVien[nv].taiKhoan = savetk
                    break
                } else {
                    arrNhanVien[nv].taiKhoan = savetk
                }  
            }
           
            if (!validateAccount(newUpdate.taiKhoan)) {
                check = false
                break
            }
            newUpdate.hoVaTen = document.querySelector('#name').value
            if (!validateEmployeeName(newUpdate.hoVaTen)) {
                check = false
                break
            }
            newUpdate.email = document.querySelector('#email').value
            if (!validateEmail(newUpdate.email)) {
                check = false
                break
            }
            newUpdate.matKhau = document.querySelector('#password').value
            if (!validatePassword(newUpdate.matKhau)) {
                check = false
                break
            }
            newUpdate.ngaylam = document.querySelector('#datepicker').value
            if (!validateNL(newUpdate.ngaylam)) {
                check = false
                break
            }
            newUpdate.LuongCoBan = document.querySelector('#luongCB').value
            if (!validateSalary(newUpdate.LuongCoBan)) {
                check = false
                break
            }
            newUpdate.chucVu = document.querySelector('#chucvu').value
            if (!validateCV(newUpdate.chucVu)) {
                check = false
                break
            }
            newUpdate.giolam = document.querySelector('#gioLam').value
            if (!validateGL(newUpdate.giolam)) {
                check = false
                break
            }

            if (check) {
                newUpdate.tongLuong = newUpdate.tongLuong()
                newUpdate.loaiNhanVien = newUpdate.loaiNhanVien()
                arrNhanVien.push(newUpdate)
                alert("Cập nhật nhân Viên Thành Công")
                arrNhanVien.splice(nv, 1);
                //luu
                saveStorageArrNhanVien(arrNhanVien);
                localStorage.setItem("NhanVien", JSON.stringify(arrNhanVien))
                document.querySelector("#tableDanhSach").innerHTML = renderTableNhanVien(arrNhanVien)
                document.getElementById("btnDong").click()
            }
        } while (!check)

        localStorage.setItem("NhanVien", JSON.stringify(arrNhanVien))
        if (arrNhanVien.length > 0)
            document.querySelector("#tableDanhSach").innerHTML = renderTableNhanVien(arrNhanVien)

        // document.querySelector('#tknv').disabled = false;  
        // document.querySelector('#btnThemNV').disabled = false; 

    }
    
}