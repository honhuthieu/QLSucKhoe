var fullname = document.querySelector("#fullname");
var thuBacTrongGiaDinh = document.querySelector("#thuBac");
var gioiTinh = document.querySelector("#gioiTinh");
var phone = document.querySelector("#phone");
var email = document.querySelector("#email");
var suckhoehientai = document.querySelector("#suckhoehientai");
var toathuocdangsudung = document.querySelector("#toathuocdangsudung");
var benhnen = document.querySelector("#benhnen");
var benhbamsinh = document.querySelector("#benhbamsinh");
var loaithuocdangsudung = document.querySelector("#loaithuocdangsudung");
var ngaytaikhamdinhky = document.querySelector("#ngaytaikhamdinhky");
var solantiemvacxin = document.querySelector("#solantiemvacxin");
var loaivacxindatiem = document.querySelector("#loaivacxindatiem");
var form = document.querySelector("form");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  info = {
    hoTen: fullname.value,
    thuBacTrongGiaDinh: thuBacTrongGiaDinh.value,
    gioiTinh: gioiTinh.value,
    sdt: phone.value,
    email: email.value,
    thongTinSucKhoeHienTai: suckhoehientai.value,
    toaThuocDangSuDung: toathuocdangsudung.value,
    benhNen: benhnen.value,
    benhBamSinh: benhbamsinh.value,
    loaiThuocDangSuDung: loaithuocdangsudung.value,
    ngayTaiKhamDinhKy: ngaytaikhamdinhky.value,
    soLanTiemVacxin: solantiemvacxin.value,
    loaiVacxinDaTiem: loaivacxindatiem.value,
  };
  var url = "http://localhost:4000/json_info";
  var res = await axios.post(url, info);
  if (res) {
    alert("submit thành công")
    window.location="http://127.0.0.1:5500/thongtinsuckhoe.html"
  } else {
    alert("Lỗi");
  }
});
