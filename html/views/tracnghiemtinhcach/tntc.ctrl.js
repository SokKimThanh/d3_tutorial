var trac_nghiem_tinh_cach_ctrl = function ($scope, d3service, $timeout, $filter, $http, $uibModal, $log, $document) {
  /*1: 2 10: 4 18: 3 26: 4 34: 2 42: 3 50: 2 28 - 36: 29
    2: 2 11: 3 19: 2 27: 4 35: 3 43: 4 51: 2 37 - 45: 24
    3: 4 12: 3 20: 2 28: 4 36: 2 44: 2 52: 2 46 - 54: 21
    4: 4 13: 4 21: 4 29: 4 * 37: 4 45: 2 53: 3
    6: 4 14: 3 22: 4 30: 3 38: 4 * 46: 4 54: 2
    7: 0 15: 0 23: 3 31: 4 39: 4 47: 2 1 - 9: 18
    8: 4 16: 4 24: 2 32: 3 40: 3 48: 2 10 - 18: 28
    9: 2 17: 4 25: 4 33: 4 41: 2 49: 2 19 - 27: 29 */
  $scope.is_load_chart = false;
  $scope.danhsach_cauhoi = [{
    "code": "1 - 9",
    "value": [
      { number: 1, question: "Tôi có tính tự lập" },
      { number: 2, question: "Tôi suy nghĩ thực tế" },
      { number: 3, question: "Tôi là người thích nghi với môi trường mới" },
      { number: 4, question: "Tôi có thể vận hành, điều khiển các máy móc thiết bị" },
      { number: 5, question: "Tôi làm việc các công việc thủ công như gấp giấy, đan, móc" },
      { number: 6, question: "Tôi thích tiếp xúc với thiên nhiên, động vật, cây cỏ" },
      { number: 7, question: "Tôi thích những công việc sử dụng tay chân hơn là trí óc" },
      { number: 8, question: "Tôi thích những công việc thấy ngay kết quả" },
      { number: 9, question: "Tôi thích làm việc ngoài trời hơn là trong phòng học, văn phòng" }
    ],
  }, {
    "code": "10 - 18",
    "value": [
      { number: 10, question: "Tôi có tìm hiểu khám phá vấn đề mới" },
      { number: 11, question: "Tôi có khả năng phân tích vấn đề" },
      { number: 12, question: "Tôi biết suy nghĩ một cách mạch lạc, chặt chẽ" },
      { number: 13, question: "Tôi thích thực hiện các thí nghiệm hay nghiên cứu" },
      { number: 14, question: "Tôi có khả năng tổng hợp, khái quát, suy đoán những vấn đề" },
      { number: 15, question: "Tôi thích những hoạt động điều tra, phân loại, kiểm tra, đánh giá" },
      { number: 16, question: "Tôi tự tổ chức công việc mình phải làm" },
      { number: 17, question: "Tôi thích suy nghĩ về những vấn đề phức tạp, làm những công việc phức tạp" },
      { number: 18, question: "Tôi có khả năng giải quyết các vấn đề" },
    ],
  }, {
    "code": "19 - 27",
    "value": [
      { number: 19, question: "Tôi là người dễ xúc động" },
      { number: 20, question: "Tôi có óc tưởng tượng phong phú" },
      { number: 21, question: "Tôi thích sự tự do, không theo những quy định, quy tắc" },
      { number: 22, question: "Tôi có khả năng thuyết trình, diễn xuất" },
      { number: 23, question: "Tôi có thể chụp hình hoặc vẽ tranh, trang trí, điêu khắc" },
      { number: 24, question: "Tôi có năng khiểu âm nhạc" },
      { number: 25, question: "Tôi có khả năng viết, trình bày những ý tưởng của mình" },
      { number: 26, question: "Tôi thích làm những công việc mới, đòi hỏi sự sáng tạo" },
      { number: 27, question: "Tôi thoải mái bộc lộ những ý thích" },
    ],
  }, {
    "code": "28 - 36",
    "value": [
      { number: 28, question: "Tôi là người thân thiện hay giúp đỡ người khác" },
      { number: 29, question: "Tôi thích gặp gỡ, làm việc với con người" },
      { number: 30, question: "Tôi là người lịch sự, tử tế" },
      { number: 31, question: "Tôi thích khuyên bảo, huấn luyện hay giảng giải cho người khác" },
      { number: 32, question: "Tôi là người biết lắng nghe" },
      { number: 33, question: "Tôi thích các hoạt động chăm sóc sức khỏe của bản thân và người khác" },
      { number: 34, question: "Tôi thích các hoạt động vì mục tiêu chung của cộng đồng, xã hội" },
      { number: 35, question: "Tôi mong muốn mình có đóng góp để xã hội tốt đẹp hơn" },
      { number: 36, question: "Tôi có khả năng hòa giải, giải quyết những sự việc mâu thuẫn" },
    ],
  }, {
    "code": "37 - 45",
    "value": [
      { number: 37, question: "Tôi là người có tính phiêu lưu, mạo hiểm" },
      { number: 38, question: "Tôi có tính quyết đoán" },
      { number: 39, question: "Tôi là người năng động" },
      { number: 40, question: "Tôi có khả năng diễn đạt, tranh luận và thuyết phục người khác" },
      { number: 41, question: "Tôi thích các việc quản lý, đánh giá" },
      { number: 42, question: "Tôi thường đặt ra các mục tiêu, kế hoạch trong cuộc sống" },
      { number: 43, question: "Tôi thích gây ảnh hưởng đến người khác" },
      { number: 44, question: "Tôi là người thích cạnh tranh và muốn mình giỏi hơn người khác" },
      { number: 45, question: "Tôi muốn người khác phải kính trọng, nể phục tôi" },
    ],
  },
  {
    "code": "46 - 54",
    "value": [
      { number: 46, question: "Tôi là người có đầu óc sắp xếp, tổ chức" },
      { number: 47, question: "Tôi có tính cẩn thận" },
      { number: 48, question: "Tôi là người chu đáo, chính xác và đáng tin cậy" },
      { number: 49, question: "Tôi thích công việc tính toán sổ sách, ghi chép số liệu" },
      { number: 50, question: "Tôi thích các công việc lưu trư, phân loại, cập nhật thông tin" },
      { number: 51, question: "Tôi thường đặt ra những mục tiêu, kế hoạch trong cuộc sống" },
      { number: 52, question: "Tôi thích dự kiến các khoản thu chi" },
      { number: 53, question: "Tôi thích lập thời khóa biểu, sắp xếp lịch làm việc" },
      { number: 54, question: "Tôi thích làm việc với các con số, làm việc theo hướng dẫn, quy trình" },
    ]
  }];
  function get_list_by_group(danhsach_cauhoi) {
    let dsch = [];
    danhsach_cauhoi.forEach(element => {
      for (y in element) {
        let obj2 = element[y];
        dsch.push(obj2);
      }
    });
    return dsch;
  }


  $scope.danh_sach_giatri_cau_tra_loi = [
    { code: "none", name: "Hoàn toàn sai", value: 0 },
    { code: "none", name: "Đúng một vài trường hợp", value: 1 },
    { code: "none", name: "Đúng một nữa", value: 2 },
    { code: "none", name: "Đúng hầu hết", value: 3 },
    { code: "none", name: "Hoàn toàn đúng", value: 4 },
  ]
  let get_tong_diem_f = (mangsodiem) => {
    let tong_diem = 0;
    for (x in mangsodiem) {
      let obj = mangsodiem[x]
      tong_diem += obj.value;
    }
    return tong_diem;
  }

  let arr_kq = [];
  let arr_tongdiem = [];
  let newarr_tongdiem = [];
  let count = 0;
  $scope.tinhtong = function (result) {
    count++;
    let obj = { value: result }
    arr_kq.push(obj);
    let tongdiem = get_tong_diem_f(arr_kq);
    for (x in arr_kq) {
      $scope.get_tong_diem = { cauhoiso: count, value: tongdiem };
      $scope.save($scope.get_tong_diem);
      arr_kq = [];
    }
  }
  $scope.save = (get_tong_diem) => {
    if (utility.checkValue(get_tong_diem)) {
      arr_tongdiem.push(get_tong_diem);
      if (arr_tongdiem.length >= 9) {
        let tongdiem_9cau = { value: get_tong_diem_f(arr_tongdiem) }
        newarr_tongdiem.push(tongdiem_9cau);
        $scope.newarr_tongdiem = newarr_tongdiem;
        count = 0;
        arr_kq = [];
        arr_tongdiem = [];
        $scope.get_tong_diem = "";
      } else {
        // alert("Chưa chọn hết 9 cái")
      }
    } else {
      alert("no data")
    }
  }
  let refresh = function () {

    $http({
      method: 'GET',
      url: '/trac_nghiem_tinh_cach'
    }).then(function successCallback(response) {
      let trac_nghiem_tinh_cach_list = response.data;
      console.table(trac_nghiem_tinh_cach_list);
    }, function errorCallback(response) {

    });
  }
  refresh();

  let openPopup = function (item) {
    try {
      if (utility.checkValue(item)) {
        var modalInstance = $uibModal.open({
          templateUrl: 'views/tracnghiemtinhcach/tntc.edit.html',
          animation: false,/* nhat dinh phai co */
          controller: crud_trac_nghiem_tinh_cach_ctrl,
          windowClass: "animated fadeInDown",
          backdrop: "static",
          draggable: true,
          size: 'lg',
          locked: true,
          resolve: {
            items: function () {
              return item;
            },
          }
        })
        modalInstance.result.then(function (selectedItem) {
          // $ctrl.selected = selectedItem;
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
      } else {
        alert("no data")
      }
    } catch (e) {
      alert(e)
    }
  }
  $scope.xacdinhtinhcach = function () {
    openPopup($scope.newarr_tongdiem);
  };
};
