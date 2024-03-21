var list = document.querySelector(".list");
var searchInput = document.querySelector(".searchInput");

var fetchApi = async function () {
  // lấy dữ liệu
  var res = await axios.get("http://localhost:4000/json_info");
  var datas = res.data;
// Hàm tìm kiếm 
searchInput.addEventListener("change", (e) => {
  const searchUser = e.target.value;
  const resultUser = datas.filter((data) =>
    data.benhNen.toLowerCase().includes(searchUser.toLowerCase()) &&
    data.soLanTiemVacxin.toLowerCase().includes(searchUser.toLowerCase())
  );

    var htmls = resultUser.map(function (data) {
      return `
            <li>
                <div class="list-item">
                    <span>
                        <p><span>Họ tên:</span> ${data.hoTen}</p>
                        <p><span>Thứ bậc trong gia đình:</span> ${data.thuBacTrongGiaDinh}</p>
                        <p><span>Giới tính:</span> ${data.gioiTinh}</p>
                        <p><span>Phone:</span> ${data.sdt}</p>
                        <p><span>Email:</span> ${data.email}</p>
                        <p><span>Thông tin sức khỏe hiện tại:</span> ${data.thongTinSucKhoeHienTai}</p>
                        <p><span>Toa thuốc đang sử dụng:</span> ${data.toaThuocDangSuDung}</p>
                    </span>
                    <span>
                        <p><span>Bệnh nền</span> ${data.benhNen}</p>
                        <p><span>Bệnh bẩm sinh:</span> ${data.benhBamSinh}</p>
                        <p><span>Loại thuốc đang sử dụng:</span> ${data.loaiThuocDangSuDung}</p>
                        <p><span>Ngày tái khám định kỳ:</span> ${data.ngayTaiKhamDinhKy}</p>
                        <p><span>Số lần tiêm vacxin:</span> ${data.soLanTiemVacxin}</p>
                        <p><span>Loại vacxin đã tiêm:</span> ${data.loaiVacxinDaTiem}</p>
                    </span>
                </div>
                <button type="button" class="btn btn-primary btn-detail" value=${data._id}>Chi tiết</button>
                <button type="button" class="btn btn-danger btn-delete" value=${data._id}>Xóa</button>
            </li>
        `;
    });
    list.innerHTML = htmls.join("");

    var btnDeletes = document.querySelectorAll(".btn-delete");
    btnDeletes.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        handleDelelte(e.target.value);
      });
    });

    var btnDetails = document.querySelectorAll(".btn-detail");
    btnDetails.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        detail(e.target.value);
      });
    });
  });

  var handleDelelte = async function (id) {
    var urlDelete = `http://localhost:4000/json_info/${id}`;
    var res = await axios.delete(urlDelete);
    if (res) {
      alert("Xóa thành công");
      window.location.reload();
    } else {
      alert("lỗi");
    }
  };

  var detail = function (id) {
    const dataDetail = datas.find((data) => data._id == id);
    const now = moment(); // Lấy thời gian hiện tại
    const nextAppointment = moment(dataDetail.ngayTaiKhamDinhKy); // Chuyển ngày tái khám thành đối tượng moment
    const diffDays = nextAppointment.diff(now, "days"); // Tính số ngày còn lại đến ngày tái khám

    if (diffDays == 0) {
      alert(`Hôm nay đã đến ngày tái khám của ${dataDetail.hoTen}.`);
    } else if (diffDays < 0) {
      alert(`Ngày tái khám của ${dataDetail.hoTen} đã qua.`);
    } else if (diffDays === 1) {
      alert(`Ngày tái khám của ${dataDetail.hoTen} là ngày mai.`);
    } else {
      alert(
        `Còn ${diffDays} ngày nữa đến ngày tái khám của ${dataDetail.hoTen}.`
      );
    }
  };

  function notifyNextAppointment(data) {
    const now = moment(); // Lấy thời gian hiện tại
    const nextAppointment = moment(data.ngayTaiKhamDinhKy); // Chuyển ngày tái khám thành đối tượng moment
    const diffDays = nextAppointment.diff(now, "days"); // Tính số ngày còn lại đến ngày tái khám

    if (diffDays == 0) {
      alert(`Hôm nay đã đến ngày tái khám của ${data.hoTen}.`);
    } else if (diffDays < 0) {
      console.log(`Ngày tái khám của ${data.hoTen} đã qua.`);
    } else if (diffDays === 1) {
      console.log(`Ngày tái khám của ${data.hoTen} là ngày mai.`);
    } else {
      console.log(
        `Còn ${diffDays} ngày nữa đến ngày tái khám của ${data.hoTen}.`
      );
    }
  }

  // Sử dụng hàm thông báo ngày tái khám
  datas.forEach((data) => {
    notifyNextAppointment(data);
  });

  var htmls = datas.map(function (data) {
    return `
            <li>
                <div class="list-item">
                    <span>
                        <p><span>Họ tên(Nick name ở nhà):</span> ${data.hoTen}</p>
                        <p><span>Thứ bậc trong gia đình:</span> ${data.thuBacTrongGiaDinh}</p>
                        <p><span>Giới tính:</span> ${data.gioiTinh}</p>
                        <p><span>SĐT(Phone):</span> ${data.sdt}</p>
                        <p><span>Email:</span> ${data.email}</p>
                        <p><span>Thông tin sức khỏe hiện tại:</span> ${data.thongTinSucKhoeHienTai}</p>
                        <p><span>Toa thuốc đang sử dụng:</span> ${data.toaThuocDangSuDung}</p>
                    </span>
                    <span>
                        <p><span>Bệnh nền</span> ${data.benhNen}</p>
                        <p><span>Bệnh bẩm sinh:</span> ${data.benhBamSinh}</p>
                        <p><span>Loại thuốc đang sử dụng cho từng loại bệnh:</span> ${data.loaiThuocDangSuDung}</p>
                        <p><span>Ngày tái khám định kỳ:</span> ${data.ngayTaiKhamDinhKy}</p>
                        <p><span>Số lần tiêm vacxin:</span> ${data.soLanTiemVacxin}</p>
                        <p><span>Loại vacxin đã tiêm:</span> ${data.loaiVacxinDaTiem}</p>
                    </span>
                </div>
                <button type="button" class="btn btn-primary btn-detail" value=${data._id}>Chi tiết</button>
                <button type="button" class="btn btn-danger btn-delete" value=${data._id}>Xóa</button>
            </li>
        `;
  });
  list.innerHTML = htmls.join("");

  var btnDeletes = document.querySelectorAll(".btn-delete");
  btnDeletes.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      handleDelelte(e.target.value);
    });
  });

  var btnDetails = document.querySelectorAll(".btn-detail");
  btnDetails.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      detail(e.target.value);
    });
  });
};

fetchApi();
