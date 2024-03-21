const mongoose = require("mongoose");

const infoCustomerSchema = new mongoose.Schema({
  hoTen: {
    type: String,
    required: true,
  },
  thuBacTrongGiaDinh: {
    type: String,
    required: true,
  },
  gioiTinh: {
    type: String,
    required: true,
  },
  sdt: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  thongTinSucKhoeHienTai: {
    type: String,
    required: true,
  },
  toaThuocDangSuDung: {
    type: String,
    required: true,
  },
  benhNen: {
    type: String,
    required: true,
  },
  benhBamSinh: {
    type: String,
    required: true,
  },
  loaiThuocDangSuDung: {
    type: String,
    required: true,
  },
  ngayTaiKhamDinhKy: {
    type: String,
    required: true,
  },
  soLanTiemVacxin: {
    type: String,
    required: true,
  },
  loaiVacxinDaTiem: {
    type: String,
    required: true,
  },
});

let infoCustomer = mongoose.model("info customer", infoCustomerSchema);

module.exports = { infoCustomer };
