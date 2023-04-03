export const localUserService = {
    // Hàm get dùng để lấy dữ liệu từ localStorage
    get: () =>{
        let dataJson = localStorage.getItem("USER_INFOR");
        return JSON.parse(dataJson);
    },
    // Hàm set dùng để lưu thông tin đăng nhập của user vào localStorage
    set : (userInfor) =>{
        let dataJson = JSON.stringify(userInfor);
        localStorage.setItem("USER_INFOR", dataJson);
    },
    // Hàm remove dùng để xóa thông tin đăng nhập của user ra khỏi localStorage (đăng xuất)
    remove: () =>{
        localStorage.removeItem("USER_INFOR");
    }
}