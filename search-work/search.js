let companys = [
  {
    name: "Công ty 1",
    job: "Công việc 1",
    location: "Hà nội",
    salary: "3000000",
    ranks: "sinh viên",
    time: "3 ngày trước",
    forms: "Thực tập",
  },
  {
    name: "Công ty 2",
    job: "Công việc 2",
    location: "Hà nội",
    salary: "5000000",
    ranks: "Nhân viên",
    time: "3 ngày trước",
    forms: "NV chính thức",
  },
  {
    name: "Công ty 3",
    job: "Công việc 3",
    location: "TP HCM ",
    salary: "7000000",
    ranks: "Nhân Viên",
    time: "5 ngày trước",
    forms: "NV chính thức",
  },
  {
    name: "Công ty 4",
    job: "Công việc 4",
    location: "Đà Nẵng",
    salary: "10000000",
    ranks: "Quản Lý",
    time: "5 ngày trước",
    forms: "NV chính thức",
  },
  {
    name: "Công ty 5",
    job: "Công việc 5",
    location: "Nghệ An",
    salary: "15000000",
    ranks: "Quản Lý",
    time: "5 ngày trước",
    forms: "NV chính thức",
  },
];

function find() {
  let ten = document.getElementById("nameCompany").value;
  let congViec = document.getElementById("jobCompany").value;
  let diaDiem = document.getElementById("locationCompany").value;
  let luong = document.getElementById("salary").value;
  let chucVu = document.getElementById("ranks").value;
  let thoiGian = document.getElementById("timeUpload").value;
  let hinhThuc = document.getElementById("forms").value;
  let innerHTMLs = "";
  let result = companys.filter(
    (o) =>
      o.name == ten ||
      o.job == congViec ||
      o.location == diaDiem ||
      o.salary == luong ||
      o.ranks == chucVu ||
      o.time == thoiGian ||
      o.forms == hinhThuc
  );
  for (let company of result) {
    innerHTMLs += ` <tr>
    <td>${company.name}</td> 
    <td>${company.job}</td>
    <td>${company.location}</td>
    <td>${company.salary}</td>
    <td>${company.ranks}</td>
    <td>${company.time}</td>
    <td>${company.forms}</td>
</tr>`;
  }
  document.getElementById("content").innerHTML = innerHTMLs;
}
