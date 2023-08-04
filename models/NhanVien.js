function NhanVien(){
    this.taiKhoan = '';
    this.hoVaTen = '';
    this.email = '';
    this.matKhau = '';
    this.ngaylam = 0;
    this.LuongCoBan = 0;
    this.chucVu = '';
    this.giolam = 0;
    this.tongLuong = function () {
        var output
        if (this.chucVu === "Sếp")
            output = this.LuongCoBan * 3
        if (this.chucVu === "Trưởng phòng")
            output = this.LuongCoBan * 2
        if (this.chucVu === "Nhân viên")
            output = this.LuongCoBan
        return output
    }
    this.loaiNhanVien = function () {
        var output
        if (this.giolam >= 192) {
            output = "Xuất Sắc"
        } else if (this.giolam >= 176) {
            output = "Giỏi"
        } else if (this.giolam >= 160) {
            output = "Khá"
        } else output = "Trung Bình"
        return output
    }
    this.hideshow = true

}
