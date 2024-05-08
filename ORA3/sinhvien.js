let ttSinhvienBD = {
    hoVaTen: "Hoàng Trọng Minh",
    namVaoTruong: "2021",
    bacDaoTao: "Đại học đại trà",
    chuongTrinh: "Khoa học máy tính",
    khoaQuanLi: "Trường Công nghệ thông tin và Truyền thông",
    maSv: "20215427",
    tinhTrangHocTap: "Học",
    gioiTinh: "Nam",
    lop: "Khoa học máy tính 02 Khóa 66",
    khoaHoc: "2021",
    email: "Minh.HT215427@sis.hust.edu.vn",
    srcImage: "./Contents/Images/anhDaiDien.png"
}
let ttSinhvienEdit = {
    hoVaTen: "Hoàng Trọng Minh",
    namVaoTruong: "2021",
    bacDaoTao: "Đại học đại trà",
    chuongTrinh: "Khoa học máy tính",
    khoaQuanLi: "Trường Công nghệ thông tin và Truyền thông",
    maSv: "20215427",
    tinhTrangHocTap: "Học",
    gioiTinh: "Nam",
    lop: "Khoa học máy tính 02 Khóa 66",
    khoaHoc: "2021",
    email: "Minh.HT215427@sis.hust.edu.vn",
    srcImage: "./Contents/Images/anhDaiDien.png"
}

function createBG() {
    console.log("Minh");
    document.getElementById("HoTen").innerText = ttSinhvienBD.hoVaTen
    document.getElementById("NamVaoTruong").innerText = ttSinhvienBD.namVaoTruong
    document.getElementById("BacDaoTao").innerText = ttSinhvienBD.bacDaoTao
    document.getElementById("ChuongTrinh").innerText = ttSinhvienBD.chuongTrinh
    document.getElementById("Khoa").innerText = ttSinhvienBD.khoaQuanLi
    document.getElementById("TinhTrangHocTap").innerText = ttSinhvienBD.tinhTrangHocTap
    document.getElementById("GioiTinh").innerText = ttSinhvienBD.gioiTinh
    document.getElementById("KhoaHoc").innerText = ttSinhvienBD.khoaHoc
    document.getElementById("Email").innerText = ttSinhvienBD.email
    document.getElementById("Lop").innerText = ttSinhvienBD.lop

}
createBG();

function edit() {

    HoTen.innerHTML = '<input type="text" id="editName" value="' + ttSinhvienEdit.hoVaTen + '">';
    NamVaoTruong.innerHTML = '<input type="text" id="editNamVaoTruong" value="' + ttSinhvienEdit.namVaoTruong + '">';
    BacDaoTao.innerHTML = `<select id="editBacDaoTao" name="editBacDaoTao" style="display: inline-block; margin-bottom: 5px; height: 20px">
    <option>Đại học đại trà</option>
    <option>Đào tạo tài năng</option>
    <option>Chương trình tiên tiến</option>
    <option>Khác</option>
  </select>`;
    document.getElementById('editBacDaoTao').value = ttSinhvienEdit.bacDaoTao;


    ChuongTrinh.innerHTML = `<select id="editChuongTrinh" name="editChuongTrinh" style="display: inline-block; margin-bottom: 5px; height: 20px">
  <option>Khoa học máy tính </option>
  <option>Kĩ thuật máy tính</option>
  <option>Việt Nhật</option>
  <option>Việt Pháp</option>
  <option>Khác</option>
</select>`;
    document.getElementById('editChuongTrinh').value = ttSinhvienEdit.chuongTrinh;
    Khoa.innerHTML = ` <select 
id="editKhoa"
name="editKhoa"
style="display: inline-block; margin-bottom: 5px; height: 20px;"
>
<option>Trường Công nghệ thông tin và Truyền thông</option>
<option>Trường Cơ khí</option>
<option>Trường Điện - Điện tử</option>
<option>Trường Hoá và Khoa học sự sống</option>
<option>Trường Vật liệu</option>
<option>Khoa Toán - Tin</option>
<option>Khoa Vật lý Kỹ thuật</option>
<option>Viện Kinh tế và Quản lý</option>
<option>Khoa Ngoại ngữ</option>
<option>Khoa Khoa học và Công nghệ Giáo dục</option>
</select>`;
    document.getElementById('editKhoa').value = ttSinhvienEdit.khoaQuanLi;


    TinhTrangHocTap.innerHTML = `<select  id="editTinhTrangHocTap"
name="editTinhTrangHocTap"
style="display: inline-block; margin-bottom: 5px; height: 20px;">
<option>Học</option>
<option>Buộc Thôi học</option>
<option>Nghỉ học</option>
<option>Tốt nghiệp</option></select>`;
    document.getElementById('editTinhTrangHocTap').value = ttSinhvienEdit.tinhTrangHocTap;




    GioiTinh.innerHTML = `<div class="gender-options">
<label class="gender-label">
    <input type="radio" id="gioiTinhNam" name="gioi_tinh" value="Nam"  checked>
    <label for="gioiTinhNam">Nam</label>
</label>
<label class="gender-label">
    <input type="radio" id="gioiTinhNu" name="gioi_tinh" value="Nữ" style="margin-left: 15px;" >
    <label for="gioiTinhNu">Nữ</label>
</label>
<label class="gender-label">
    <input type="radio" id="gioiTinhKhac" name="gioi_tinh" value="Khác" style="margin-left: 15px;">
    <label for="gioiTinhKhac">Khác</label>
</label>
</div>`;
    Lop.innerHTML = '<input type="text" id="editLop" style = "width : 200px" value="' + ttSinhvienEdit.lop + '">';
    KhoaHoc.innerHTML = '<input type="text" id="editKhoaHoc" value="' + ttSinhvienEdit.khoaHoc + '">';
    Email.innerHTML = '<input type="text" id="editEmail" style ="width : 220px" value="' + ttSinhvienEdit.email + '">';
    addButton.style.display = "block";
    fileInput.style.display = "block";

}

document.getElementById('fileInput').addEventListener('change', function () {
    updateImage();
});
let srcF = "./Contents/Images/anhDaiDien.png";
function updateImage() {
    let fileInput = document.getElementById('fileInput');
    let imagePreview = document.getElementById('ctl00_ctl00_contentPane_MainPanel_MainContent_UserImageCPanel_imgUserImage');

    let file = fileInput.files[0];
    let reader = new FileReader();

    reader.onload = function (e) {
        imagePreview.src = e.target.result;
        srcF = e.target.result;
    };

    reader.readAsDataURL(file);
}






function myFunctionOK() {
    ttSinhvienEdit.hoVaTen = document.getElementById('editName').value;
    ttSinhvienEdit.namVaoTruong = document.getElementById('editNamVaoTruong').value;
    ttSinhvienEdit.bacDaoTao = document.getElementById('editBacDaoTao').value;
    ttSinhvienEdit.chuongTrinh = document.getElementById('editChuongTrinh').value;
    ttSinhvienEdit.khoaQuanLi = document.getElementById('editKhoa').value;
    ttSinhvienEdit.tinhTrangHocTap = document.getElementById('editTinhTrangHocTap').value;
    ttSinhvienEdit.lop = document.getElementById('editLop').value;
    ttSinhvienEdit.khoaHoc = document.getElementById('editKhoaHoc').value;
    ttSinhvienEdit.email = document.getElementById('editEmail').value;
    ttSinhvienEdit.namVaoTruong = document.getElementById('editNamVaoTruong').value;
    ttSinhvienEdit.srcImage = srcF;

    var selectedGender = document.querySelector('input[name="gioi_tinh"]:checked').value;
    ttSinhvienEdit.gioiTinh = selectedGender;
    console.log(ttSinhvienEdit);

    document.getElementById("HoTen").innerText = ttSinhvienEdit.hoVaTen;
    document.getElementById("MSSV").innerText = ttSinhvienEdit.maSv
    document.getElementById("NamVaoTruong").innerText = ttSinhvienEdit.namVaoTruong
    document.getElementById("BacDaoTao").innerText = ttSinhvienEdit.bacDaoTao
    document.getElementById("ChuongTrinh").innerText = ttSinhvienEdit.chuongTrinh
    document.getElementById("Khoa").innerText = ttSinhvienEdit.khoaQuanLi
    document.getElementById("TinhTrangHocTap").innerText = ttSinhvienEdit.tinhTrangHocTap
    document.getElementById("GioiTinh").innerText = ttSinhvienEdit.gioiTinh
    document.getElementById("KhoaHoc").innerText = ttSinhvienEdit.khoaHoc
    document.getElementById("Email").innerText = ttSinhvienEdit.email
    document.getElementById("Lop").innerText = ttSinhvienEdit.lop
    document.getElementById("ctl00_ctl00_contentPane_MainPanel_MainContent_UserImageCPanel_imgUserImage").src = ttSinhvienEdit.srcImage;

    addButton.style.display = "none";
    fileInput.style.display = "none";

}

document.getElementById('fileInput').addEventListener('change', function () {
    updateImage();
});

function myFunctionCancel() {
    document.getElementById("HoTen").innerText = ttSinhvienEdit.hoVaTen;
    document.getElementById("MSSV").innerText = ttSinhvienEdit.maSv
    document.getElementById("NamVaoTruong").innerText = ttSinhvienEdit.namVaoTruong
    document.getElementById("BacDaoTao").innerText = ttSinhvienEdit.bacDaoTao
    document.getElementById("ChuongTrinh").innerText = ttSinhvienEdit.chuongTrinh
    document.getElementById("Khoa").innerText = ttSinhvienEdit.khoaQuanLi
    document.getElementById("TinhTrangHocTap").innerText = ttSinhvienEdit.tinhTrangHocTap
    document.getElementById("GioiTinh").innerText = ttSinhvienEdit.gioiTinh
    document.getElementById("KhoaHoc").innerText = ttSinhvienEdit.khoaHoc
    document.getElementById("Email").innerText = ttSinhvienEdit.email
    document.getElementById("Lop").innerText = ttSinhvienEdit.lop
    document.getElementById("ctl00_ctl00_contentPane_MainPanel_MainContent_UserImageCPanel_imgUserImage").src = ttSinhvienEdit.srcImage;
    console.log(ttSinhvienEdit);

    addButton.style.display = "none";
    fileInput.style.display = "none";


}
function myFunctionReset() {
    ttSinhvienEdit.hoVaTen = ttSinhvienBD.hoVaTen
    ttSinhvienEdit.namVaoTruong = ttSinhvienBD.namVaoTruong
    ttSinhvienEdit.bacDaoTao = ttSinhvienBD.bacDaoTao
    ttSinhvienEdit.chuongTrinh = ttSinhvienBD.chuongTrinh
    ttSinhvienEdit.khoaQuanLi = ttSinhvienBD.khoaQuanLi
    ttSinhvienEdit.maSv = ttSinhvienBD.maSv
    ttSinhvienEdit.tinhTrangHocTap = ttSinhvienBD.tinhTrangHocTap
    ttSinhvienEdit.gioiTinh = ttSinhvienBD.gioiTinh
    ttSinhvienEdit.lop = ttSinhvienBD.lop
    ttSinhvienEdit.khoaHoc = ttSinhvienBD.khoaHoc
    ttSinhvienEdit.email = ttSinhvienBD.email
    ttSinhvienEdit.srcImage = ttSinhvienBD.srcImage

    document.getElementById("HoTen").innerText = ttSinhvienBD.hoVaTen;
    document.getElementById("MSSV").innerText = ttSinhvienBD.maSv
    document.getElementById("NamVaoTruong").innerText = ttSinhvienBD.namVaoTruong
    document.getElementById("BacDaoTao").innerText = ttSinhvienBD.bacDaoTao
    document.getElementById("ChuongTrinh").innerText = ttSinhvienBD.chuongTrinh
    document.getElementById("Khoa").innerText = ttSinhvienBD.khoaQuanLi
    document.getElementById("TinhTrangHocTap").innerText = ttSinhvienBD.tinhTrangHocTap
    document.getElementById("GioiTinh").innerText = ttSinhvienBD.gioiTinh
    document.getElementById("KhoaHoc").innerText = ttSinhvienBD.khoaHoc
    document.getElementById("Email").innerText = ttSinhvienBD.email
    document.getElementById("Lop").innerText = ttSinhvienBD.lop
    document.getElementById("ctl00_ctl00_contentPane_MainPanel_MainContent_UserImageCPanel_imgUserImage").src = ttSinhvienBD.srcImage;
    addButton.style.display = "none";
    fileInput.style.display = "none";
    console.log(ttSinhvienEdit);

}
let k = 0;
function fcaddGroup() {
    let newDiv = document.createElement("div");
    newDiv.style = "border : solid 1px orange ; margin: 50px;padding: 15px;";
    let newGroupName = document.createElement("div");
    newGroupName.style = "display : flex ;"

    let newDivName = document.createElement("p");
    let newButtonItem = document.createElement("button");
    let newButtonGroup = document.createElement("button");

    newDivName.ondblclick = function () {


        newDivName.contentEditable = true;

        newDivName.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {
                newDivName.blur(); // Mất focus khỏi trường chỉnh sửa
                event.preventDefault(); // Ngăn chặn việc thực hiện hành động mặc định của phím Enter (thêm dòng mới trong trường văn bản)
            }
        });

    }

    let newDeleteItem1 = document.createElement("button");
    newDeleteItem1.style.marginLeft = "20px"
    let newImg1 = document.createElement("img");
    newImg1.src = "./Contents/Images/delete-icon-1864x2048-bp2i0gor (1).png";
    newImg1.style = "height : 15px ;"
    newDeleteItem1.appendChild(newImg1);

    newDeleteItem1.addEventListener('click', function () {
        const confirmDelete = confirm("Are you sure you want to delete, Hoàng Trọng Minh 20215427 ?");
        if (confirmDelete) {
            container.removeChild(newDiv);
        }
    });

    let newDivAddItem = document.createElement("div");

    newDivName.style = "color :  #105694 ; font-size: 16px;font-weight: bold; ";
    newDivName.innerHTML = "Group Item_20215427";
    newButtonItem.style = "margin-left :30px;background-color: white ; border : solid 1px ; font-weight: bold ";
    newButtonItem.innerHTML = "Add info Item";
    newButtonItem.onclick = function () {
        let newDiv = document.createElement("div");
        newDiv.style.display = "flex";
        newDiv.style.margin = "20px";

        let newNameItem = document.createElement("p");
        newNameItem.innerHTML = "Item Inf Name";
        newNameItem.style.marginLeft = "20px";
        newNameItem.ondblclick = function () {


            newNameItem.contentEditable = true;

            // Bắt sự kiện khi người dùng nhấn phím
            newNameItem.addEventListener("keydown", function (event) {
                // Kiểm tra xem phím đã nhấn có phải là phím Enter không
                if (event.key === "Enter") {
                    // Kết thúc chỉnh sửa khi nhấn Enter
                    newNameItem.blur(); // Mất focus khỏi trường chỉnh sửa
                    event.preventDefault(); // Ngăn chặn việc thực hiện hành động mặc định của phím Enter (thêm dòng mới trong trường văn bản)
                }
            });

        }

        let newValueItem = document.createElement("p");
        newValueItem.style = "border: solid 1px; width: 200px;margin-left : 20px";
        newValueItem.ondblclick = function () {

            // Thiết lập thuộc tính contenteditable thành true khi double click
            newValueItem.contentEditable = true;

            // Bắt sự kiện khi người dùng nhấn phím
            newValueItem.addEventListener("keydown", function (event) {
                // Kiểm tra xem phím đã nhấn có phải là phím Enter không
                if (event.key === "Enter") {
                    // Kết thúc chỉnh sửa khi nhấn Enter
                    newValueItem.blur(); // Mất focus khỏi trường chỉnh sửa
                    event.preventDefault(); // Ngăn chặn việc thực hiện hành động mặc định của phím Enter (thêm dòng mới trong trường văn bản)
                }
            });

        }


        let newDeleteItem = document.createElement("button");
        newDeleteItem.style.marginLeft = "20px"
        let newImg = document.createElement("img");
        newImg.src = "./Contents/Images/delete-icon-1864x2048-bp2i0gor (1).png"; // Update the image path accordingly
        newImg.style = "height : 15px ;"
        newDeleteItem.appendChild(newImg);


        newDeleteItem.addEventListener('click', function () {
            const confirmDelete = confirm("Are you sure you want to delete, Hoàng Trọng Minh 20215427 ?");
            if (confirmDelete) {
                newDivAddItem.removeChild(newDiv);
            }
        });


        newDiv.appendChild(newNameItem);
        newDiv.appendChild(newValueItem);
        newDiv.appendChild(newDeleteItem);


        newDivAddItem.appendChild(newDiv);
    };

    newButtonGroup.style = "margin-left :30px;background-color: white ; border : solid 1px ; font-weight: bold ";
    newButtonGroup.innerHTML = "Add group Item";
    newButtonGroup.onclick = function () {
        fcaddGroup();
    };

    //buttonDelete.style = "margin-left :30px;background-color: white ; border : solid 1px ; font-weight: bold ";
    //buttonDelete.innerHTML = "Delete";


    newGroupName.appendChild(newDivName);
    newGroupName.appendChild(newDeleteItem1);
    newGroupName.appendChild(newButtonItem);
    newGroupName.appendChild(newButtonGroup);


    newDiv.appendChild(newGroupName);
    newDiv.appendChild(newDivAddItem);

    let container = document.getElementById("addGroupItem");
    container.appendChild(newDiv);

}
function fcaddItem() {
    let newDiv = document.createElement("div");
    newDiv.style.display = "flex";
    newDiv.style.margin = "20px";

    let newNameItem = document.createElement("p");
    newNameItem.innerHTML = "Item Inf Name";
    newNameItem.style.marginLeft = "20px";
    newNameItem.ondblclick = function () {


        newNameItem.contentEditable = true;
        newNameItem.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                newNameItem.blur(); // Mất focus khỏi trường chỉnh sửa
                event.preventDefault(); // Ngăn chặn việc thực hiện hành động mặc định của phím Enter (thêm dòng mới trong trường văn bản)
            }
        });

    }



    let newValueItem = document.createElement("p");
        newValueItem.style = "border: solid 1px; width: 200px;margin-left : 20px";
        newValueItem.ondblclick = function () {

            // Thiết lập thuộc tính contenteditable thành true khi double click
            newValueItem.contentEditable = true;

            // Bắt sự kiện khi người dùng nhấn phím
            newValueItem.addEventListener("keydown", function (event) {
                // Kiểm tra xem phím đã nhấn có phải là phím Enter không
                if (event.key === "Enter") {
                    // Kết thúc chỉnh sửa khi nhấn Enter
                    newValueItem.blur(); // Mất focus khỏi trường chỉnh sửa
                    event.preventDefault(); // Ngăn chặn việc thực hiện hành động mặc định của phím Enter (thêm dòng mới trong trường văn bản)
                }
            });

        }


    let newDeleteItem = document.createElement("button");
    newDeleteItem.style.marginLeft = "20px"

    let newImg = document.createElement("img");
    newImg.src = "./Contents/Images/delete-icon-1864x2048-bp2i0gor (1).png"; // Update the image path accordingly
    newImg.style = "height : 15px ; "
    newDeleteItem.appendChild(newImg);


    newDiv.appendChild(newNameItem);
    newDiv.appendChild(newValueItem);
    newDiv.appendChild(newDeleteItem);

    newDeleteItem.addEventListener('click', function () {
        const confirmDelete = confirm("Are you sure you want to delete, Hoàng Trọng Minh 20215427 ?");
        if (confirmDelete) {
            finElement.removeChild(newDiv);
        }
    });


    let finElement = document.getElementById("addItemMain");
    finElement.appendChild(newDiv);


}
function EditingMain() {
    var editableParagraph = document.getElementById("groupMain");

    editableParagraph.contentEditable = true;

    editableParagraph.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            editableParagraph.blur(); // Mất focus khỏi trường chỉnh sửa
            event.preventDefault(); // Ngăn chặn việc thực hiện hành động mặc định của phím Enter (thêm dòng mới trong trường văn bản)

        }
    });
}

var docPDF = new jsPDF();

// Hàm để tải xuống PDF từ phần tử có id là "thongTinCaNhanPDF" với tên file là invoiceNo
function downloadPDF(invoiceNo) {
    // Sử dụng selector trực tiếp trong phương thức html()
    docPDF.html("#thongTinCaNhanPDF", {
        callback: function(pdf) {
            pdf.save(invoiceNo + '.pdf');
        },
        x: 15,
        y: 15,
        width: 170,
        windowWidth: 650
    });
}

