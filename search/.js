const company = [
  {
    name: "Công ty TNHH TM Quốc Tế Hải Sản Hoàng Gia",
    job: "NHÂN VIÊN BÁN HÀNG",
    salary: "7000000",
    rank: "Nhân Viên",
    time: "5 ngày trước",
    form: "Nhân Viên Chính Thức",
  },
  {
    name: "CTCP Mạc Tích",
    job: "Chuyên Viên Lập Trình",
    salary: "10000000",
    rank: "Trưởng Nhóm/Giám sát",
    time: "2 ngày trước",
    form: "Thực tập",
  },
  {
    name: "Công ty TNHH Bao bì nhựa thái dương",
    job: "CHUYÊN VIÊN ISO - ĐÀO TẠO",
    salary: "5000000",
    rank: "Nhân viên",
    time: "2 ngày trước",
    form: "Thời vụ/ Nghề tự do",
  },
  {
    name: "Công ty TNHH A",
    job: "Lập trình game",
    salary: "10000000",
    rank: "Nhân viên",
    time: "2 ngày trước",
    form: "Tạm thời/ Dự án",
  },
];
let valueInput = [];
function find() {
  let ten = document.getElementById("nameCompany").value;
  let congViec = document.getElementById("jobCompany").value;
  let luong = document.getElementById("salary").value;
  let chucVu = document.getElementById("rank").value;
  let thoiGian = document.getElementById("timeUp").value;
  let hinhThuc = document.getElementById("typeCompany").value;
  let innerHTMLs = "";

  let result = companys.filter(
    (item) =>
      item.name == ten ||
      item.job == congViec ||
      item.salary == luong ||
      item.rank == chucVu ||
      item.time == thoiGian ||
      item.form == hinhThuc
  );

  console.log(result);

  for (let company of result) {
    innerHTMLs += ` <tr>
          <td>${company.name}</td> 
          <td>${company.job}</td>
          <td>${company.salary}</td>
          <td>${company.rank}</td>
          <td>${company.time}</td>
          <td>${company.form}</td>
     </tr>`;
  }

  document.getElementById("content").innerHTML = innerHTMLs;
}

function unhide() {
  var subMenu = document.getElementsByClassName("sub-menu");
  var body = document.getElementsByClassName("body");

  if (subMenu[0].style.top === "-70px") {
    subMenu[0].style.top = "120px";
    body[0].style.top = "260px";
  } else {
    subMenu[0].style.top = "-70px";
    body[0].style.top = "100px";
  }
}
