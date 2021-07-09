export default class ChuyenXe {
    constructor(_chuyenXe, _tenTaiXe, _maSoChuyen) {
        this.chuyenXe = _chuyenXe;
        this.tenTaiXe = _tenTaiXe;
        this.maSoChuyen = _maSoChuyen;
    }

    tinhDoanhThu() {
        console.log('Tinh doanh thu cho ChuyenXe');
    }
}
