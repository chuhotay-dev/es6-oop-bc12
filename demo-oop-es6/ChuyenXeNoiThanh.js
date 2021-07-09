import ChuyenXe from "./ChuyenXe.js";

class ChuyenXeNoiThanh extends ChuyenXe {
    constructor(_chuyenXe, _tenTaiXe, _maSoChuyen, _noiDen) {
        super(_chuyenXe, _tenTaiXe, _maSoChuyen);
        this.noiDen = _noiDen;
    }

    tinhDoanhThu() {
        console.log('Tinh doanh thu chuyen xe noi thanh');
    }

    tinhSoNgayDiDuoc() {
        console.log('Tinh so ngay di duoc');
    }
}