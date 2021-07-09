import ChuyenXe from "./ChuyenXe.js";

class ChuyenXeNgoaiThanh extends ChuyenXe {
    // extends: kế thừa lại phương thức, thuộc tính của lớp cha
    constructor(_chuyenXe, _tenTaiXe, _maSoChuyen, _soTuyen) {
        // this.soXe = _soXe;
        // this.tenTaiXe = _tenTaiXe;
        // this.maSoChuyen = _maSoChuyen;
        // super: là gọi constructor của parent (ChuyenXe)
        super(_chuyenXe, _tenTaiXe, _maSoChuyen);
        this.soTuyen = _soTuyen;
    }

    // Ghi đè phương thức của lớp cha (tính đa hình)
    tinhDoanhThu() {
        console.log('Tinh doanh thu cho chuyen xe ngoai thanh');
    }

    timSoTuyenGanNhat() {
        console.log('Tim so tuyen gan nhat');
    }
}