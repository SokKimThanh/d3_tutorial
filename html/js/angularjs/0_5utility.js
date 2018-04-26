"use strict";
var page_size = 10;
//var regex1 = /^(\+[0-9]{2,2})+\s+([0-9]{1,3})+\s+([0-9]{3,4})+\s+([0-9]{3,4})+$/;
var regex1 = /^([\+0-9\s]{10,32})+$/;
var regex2 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var regex3 = /^([a-zA-Z0-9_\.\-])+\.+([a-z]{2,4})+$/;
var classRegExp = /^\[object\s(.*)\]$/;
var com_id = ""; var branch_id_login = ""; var u_id = ""; var com_code = ""; var u_name = ""; var user_name = ""; var fullname = ""; var avatar_path = ""; var language = ""; var business_model = ""; var branch_name = ""; var translation = ""; var dataRoomList = []; var page_length = 1000000; var format_date = "dd-MM-yyyy"; var format_time = ""; var format_money = ""; var format_number = ""; var item_per_page = ""; var item_per_page_list = ""; var agentsID = ""; var img_customer_book_reser = ""; var account_type = ""; var company_module_active_list = []; var gendevice_id = "";
//dev 40743 , live 54780
var app_id_guest = 40743;
var utility = (function () {
  function toUpperCaseFirst(str) { str = str.trim(); var first = str.substring(0, 1).toUpperCase(); var second = str.substring(1, str.length); return first + second; }
  /**THANH.SOK */
  function getuDate(value, format) { if (value === "" || value === null || value === undefined) { return ""; } if (format === "dd-MM-yyyy") { return value.split("-")[0].split(" ")[0]; } else if (format === "MM-dd-yyyy") { return value.split("-")[1].split(" ")[0]; } else if (format === "yyyy-MM-dd") { return value.split("-")[0] } else { return ""; } }
  function getuMonth(value, format) { if (format === "dd-MM-yyyy") { return value.split("-")[1]; } else if (format === "MM-dd-yyyy") { return value.split("-")[0]; } else if (format === "yyyy-MM-dd") { return value.split("-")[1]; } else { return ""; } }
  function getuYear(value, format) {    /* // ============ */    if (format === "dd-MM-yyyy") { return value.split("-")[2]; } else if (format === "MM-dd-yyyy") { return value.split("-")[2]; } else if (format === "yyyy-MM-dd") { return value.split("-")[2]; } else { return ""; } }
  /** GET DEFAULT FORMAT*/
  function getdefaultFormat(value, format) { var year = getuYear(value, format); var month = getuMonth(value, format); var date = getuDate(value, format); if (format === "dd-MM-yyyy") { return date + "-" + month + "-" + year; } else if (format === "MM-dd-yyyy") { return month + "-" + date + "-" + year; } else if (format === "yyyy-MM-dd") { return year + "-" + month + "-" + date; } else { return ""; } }
  /**FIX CAI BUG KIEU NGAY GIO TREN FORM SEARCH EDIT */
  function kieu_ngay_gio(value, format_date) { var ddMMyyyy = value.split(" ")[0];/* Cắt chuỗi ddMMyyyy 0:[1-1-2018],1:[00:00:00] */    return checkValue(ddMMyyyy) ? getdefaultFormat(ddMMyyyy, format_date) : ""; }
  /** FIX CAI BUG XUAT DU LIEU DONG */
  function ngBlurKiemtradate(value, format_date) { try { var key = getString(value); /**Verified */      var input = $(key); var ddMMyyyy = getString(input.val()); /**Verified */      if (check_date(ddMMyyyy, format_date)) { var date_return = getdefaultFormat(ddMMyyyy, format_date); /**Verified */        return input.val(date_return); } else { return input.val(""); } } catch (e) { alert(e.message + "\n" + e.stack) } }  /**return string lowercase */
  function toLowerCase(value) { checkValue(value) ? value.toLowerCase() : "" }
  /** * Return array đã được sắp xếp */
  function bubbleSort(a) { var swapped; do { swapped = false; for (var i = 0; i < a.length - 1; i++) { if (a[i] > a[i + 1]) { var temp = a[i]; a[i] = a[i + 1]; a[i + 1] = temp; swapped = true; } } } while (swapped); }
  /** * Return true/false */
  function checkArrayLength(value) { return value.length === 0 ? true : false; }
  function checkArrayLengthGreater(value) { return value.length > 0 ? true : false; }
  /** * RETURN TRUE/FALSE */
  function checkValue(value) { return value !== undefined && value !== "" && value !== null && value !== "null" && value !== "undefined" && value !== NaN ? true : false; }
  /** * RETURN TRUE/FALSE */
  function checkNoErr(err) { return err === 0 ? true : false; }
  /** * RETURNS THE OBJECT'S CLASS, ARRAY, DATE, REGEXP, OBJECT*/
  var getClass = function (val) { return Object.prototype.toString.call(val).match(classRegExp)[1]; };
  /** * XÁC ĐỊNH LOẠI GIÁ TRỊ, KIỂU MỞ RỘNG */
  var getType = function (val) { if (val === undefined) return "undefined"; if (val === null) return "null"; var type = typeof val; if (type === "object") type = getClass(val).toLowerCase(); if (type === "number") { if (val.toString().indexOf(".") > 0) return "float"; else return "integer"; } return type; };
  /** * RETURN TRUE/FALSE */
  var compareObjects = function (a, b) { if (a === b) return true; for (var i in a) { if (b.hasOwnProperty(i)) { if (!equal(a[i], b[i])) return false; } else { return false; } } for (var i in b) { if (!a.hasOwnProperty(i)) { return false; } } return true; };
  /** * @RETURN TRUE/FALE */
  var compareArrays = function (a, b) { if (a === b) return true; if (a.length !== b.length) return false; for (var i = 0; i < a.length; i++) { if (!equal(a[i], b[i])) return false; } return true; };
  var _equal = {}; _equal.array = compareArrays; _equal.object = compareObjects; _equal.date = function (a, b) { return a.getTime() === b.getTime(); }; _equal.regexp = function (a, b) { return a.toString() === b.toString(); };
  //	uncoment to support function as string compare
  //	_equal.fucntion =  _equal.regexp;

  /** RETURN TRUE/FALSE */
  var equal = function (a, b) { if (a !== b) { var atype = getType(a), btype = getType(b); if (atype === btype) return _equal.hasOwnProperty(atype) ? _equal[atype](a, b) : a == b; return false; } return true; };
  /** * RETURN TRUE/FALSE */
  function checkObject(value) { return getType(value) === typeof {} ? true : false; }  /**RETURN ARRAY */  function getArray(value) { return checkValue(value) ? value : []; }
  /** * RETURN OBJECT */
  function getObj(val) {    /** * trả về một giá trị mặc định */    var value = checkValue(val) ? val : {}; return checkObject(value) ? value : JSON.parse(value); }
  /** * RETURN NUMBER */
  function getNumber(value) { return checkValue(value) ? Number(String(value)) : 0; }
  /** * RETURN STRING */
  function getString(string) { return checkValue(string) ? string : ""; }
  /** * RETURN -1 */
  function getNull(number) { return checkValue(number) ? Number(String(number)) : -1; }
  function getNullStr(number) { return checkValue(number) ? String(number) : "-1"; }
  /** * RETURN LANGUAGE */
  function getLanguage(value) { return checkValue(value) ? value : "en"; }
  /** * RETURN DATE dd-MM-yyyy */
  function getDate(value, format_date) { return checkValue(value) ? kieu_ngay_gio(value, format_date) : ""; }
  /** * return Array = [0,1,2,3] Cắt value [Key:Value] */
  function getArrayAnonymous(value) { var new_array = []; Object.getOwnPropertyNames(value).forEach(function (val, idx, array) { var obj = JSON.parse(JSON.stringify(value[val])); var arr1 = Object.keys(obj); arr1.map(function (k) { new_array.push(obj[k]); }); }); return new_array; }
  /** * return Object = {0,1,2,3} Cắt key [key:value]*/
  function getObjectAnonymous(value) { var new_obj = {}; Object.getOwnPropertyNames(value).forEach(function (val, idx, array) { var obj = JSON.parse(JSON.stringify(value[val])); var arr1 = Object.keys(obj); new_obj = arr1; }); return new_obj; }
  function getDate(value, format_date) { return checkValue(value) ? kieu_ngay_gio(value, format_date) : ""; }
  /** * return Array = [0,1,2,3] Cắt value [Key:Value] */
  function getArrayAnonymous(value) { var new_array = []; Object.getOwnPropertyNames(value).forEach(function (val, idx, array) { var obj = JSON.parse(JSON.stringify(value[val])); var arr1 = Object.keys(obj); arr1.map(function (k) { new_array.push(obj[k]); }); }); return new_array; }
  /** * return Object = {0,1,2,3} Cắt key [key:value]*/
  function getObjectAnonymous(value) { var new_obj = {}; Object.getOwnPropertyNames(value).forEach(function (val, idx, array) { var obj = JSON.parse(JSON.stringify(value[val])); var arr1 = Object.keys(obj); new_obj = arr1; }); return new_obj; }
  function check_date(data, format_date) { var ngaytrongthang = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; var ngaytrongthangnhuan = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; var kieu1 = ""; if (typeof (data) === typeof ("")) { kieu1 = data.split("-"); } else if (typeof (data) === typeof ([])) { kieu1 = data; } if (format_date === "dd-MM-yyyy") { if (kieu1.length == 3) { if (isNaN(kieu1[0]) || isNaN(kieu1[1]) || isNaN(kieu1[2])) { return false; } else { /* dinh dang ngày tháng năm */            if (kieu1[2] > 1000 && kieu1[2] < 9999) { if (kieu1[1] > 12 || kieu1[1] < 1) { return false; } else {                /* // nam nhuan */                if ((kieu1[2] % 4 == 0 && kieu1[2] % 100 != 0) || kieu1[2] % 400 == 0) { if (kieu1[0] > ngaytrongthangnhuan[Number(kieu1[1])] || kieu1[0] <= 0) { return false; } } else {                 /* //khong phai nam nhuan */                  if (kieu1[0] > ngaytrongthang[Number(kieu1[1])] || kieu1[0] <= 0) { return false; } } } } else { return false; } } } else { return false; } } else if (format_date === "MM-dd-yyyy") { if (kieu1.length == 3) { if (isNaN(kieu1[0]) || isNaN(kieu1[1]) || isNaN(kieu1[2])) { return false; } else {            /* //dinh dang ngày tháng năm */            if (kieu1[2] > 1000 && kieu1[2] < 9999) { if (kieu1[0] > 12 || kieu1[0] < 1) { return false; } else {            /*nam nhuan */            if ((kieu1[2] % 4 == 0 && kieu1[2] % 100 != 0) || kieu1[2] % 400 == 0) { if (kieu1[1] > ngaytrongthangnhuan[Number(kieu1[0])] || kieu1[1] <= 0) { return false; } } else {                  /*khong phai nam nhuan */              if (kieu1[1] > ngaytrongthang[Number(kieu1[0])] || kieu1[1] <= 0) { return false; } } } } else { return false; } } } else { return false; } } else if (format_date === "yyyy-MM-dd") { if (kieu1.length == 3) { if (isNaN(kieu1[0]) || isNaN(kieu1[1]) || isNaN(kieu1[2])) { return false; } else {            /*dinh dang ngày tháng năm */          if (kieu1[0] > 1000 && kieu1[0] < 9999) { if (kieu1[1] > 12 || kieu1[1] < 1) { return false; } else {                /*nam nhuan */              if ((kieu1[0] % 4 == 0 && kieu1[0] % 100 != 0) || kieu1[0] % 400 == 0) { if (kieu1[2] > ngaytrongthangnhuan[Number(kieu1[1])] || kieu1[2] <= 0) { return false; } } else {                  /*khong phai nam nhuan */                if (kieu1[2] > ngaytrongthang[Number(kieu1[1])] || kieu1[2] <= 0) { return false; } } } } else { return false; } } } else { return false; } } return true; }
  function getDateRange(from_date, to_date) {
    try {
      /* truong hop ngay chua duoc thay doi dinh dang */
      let fromdate = new Date(from_date).getDate(),
        todate = new Date(to_date).getDate();
      let timeDiff = todate - fromdate,
        diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)),
        songay = diffDays;  /* tính ra số ngày  */
      return songay;
    } catch (e) { swal("error", e.message + "\n" + e.stack, "error"); }
  }
  function checkDateRange(from_date, to_date) {
    try {
      let songay = getDateRange(from_date, to_date);
      return getNumber(songay) > 0 ? true : false;
    }
    catch (e) { swal("error", e.message + "\n" + e.stack, "error"); }
  }
  function clone(obj) { let copy;    /* Handle the 3 simple types, and null or undefined */    if (null == obj || "object" != typeof obj) return obj;    /* Handle Date */    if (obj instanceof Date) { copy = new Date(); copy.setTime(obj.getTime()); return copy; }    /* Handle Array */    if (obj instanceof Array) { copy = []; for (var i = 0, len = obj.length; i < len; i++) { copy[i] = clone(obj[i]); } return copy; }    /* Handle Object */    if (obj instanceof Object) { copy = {}; for (var attr in obj) { if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]); } return copy; } throw new Error("Unable to copy obj! Its type isn't supported."); }
  /* Return true if match url */
  function checkMatchUrl(auto_link, domain_link) {
    /*dieu kien hien thi*/
    try {
      var expression = domain_link;
      var regex = new RegExp(expression);
      if (auto_link.match(regex)) {
        return true;
      } else {
        return false;
      }
    } catch (e) { swal("Warning", e.message + "\n" + e.stack, "warning") };
  }
  function text_capitalize(text) {
    let text_x = getString(text);
    let text_capitalizes = text.replace(/\b\w/g, l => l.toUpperCase());
    return text_capitalizes;
  }
  return {
    /**return string uppercase first */
    toUpperCaseFirst: function (value) { return toUpperCaseFirst(value); },
    /**return string lowercase */
    toLowerCase: function (value) { return toLowerCase(value); },
    /** * fix bug kiem tra date bang value */
    ngBlurKiemtradate: (value, format_date) => { return ngBlurKiemtradate(value, format_date) },
    /** * return Array = [0,1,2,3] Cắt value [Key:Value] mảng bất định*/
    getArrayAnonymous: function (value) { return getArrayAnonymous(value); },
    /** return object = {"a","b","c","d"} Cắt key {key:value} đối tượng bất định */
    getObjectAnonymous: function (value) { return getObjectAnonymous(value); },
    /** * RETURN TRUE/FALSE */
    checkValue: function (value) { return checkValue(value); },
    /** * RETURN TRUE/FALSE */
    checkNoErr: function (err) { return checkNoErr(err); },
    /** * Return true/false NẾU LENGTH=0 return TRUE*/
    checkArrayLength: function (value) { return checkArrayLength(value) },
    /** * Return true/false NẾU LENGTH>0 return TRUE*/
    checkArrayLengthGreater: function (value) { return checkArrayLengthGreater(value) },
    /** * RETURN TRUE/FALSE */
    checkObject: function (value) { return checkObject(value); },
    /**RETURN ARRAY [{key:value},]*/
    getArray: function (value) { return getArray(value); },
    /**RETURN Obj {key:value}*/
    getObj: function (value) { return getObj(value); },
    /**RETURN "" */
    getString: function (string) { return getString(string); },
    /**RETURN 0 */
    getNumber: function (value) { return getNumber(value); },
    /**RETURN -1 */
    getNull: function (number) { return getNull(number); },
    /**RETURN "-1" dùng cho location_id */
    getNullStr: function (number) { return getNull(number); },
    /**RETURN "vi" */
    getLanguage: function (value) { return getLanguage(value); },
    /**RETURN "dd-mm-yyyy" */
    getDate: function (value, format) { return getDate(value, format); },
    /** * XÁC ĐỊNH LOẠI GIÁ TRỊ, KIỂU MỞ RỘNG*/
    getType: function (value) { return getType(value); },
    /** * RETURNS THE OBJECT'S CLASS, ARRAY, DATE, REGEXP, OBJECT */
    getClass: function (value) { return getClass(value); },
    compareArrays: function (a, b) { return compareArrays(a, b); },
    compareObjects: function (a, b) { return compareObjects(a, b); },
    /** CÓ HAI GIÁ TRỊ BẰNG NHAU KHI SO SÁNH CÁC ĐỐI TƯỢNG VÀ MẢNG.
    * * RETURN TRUE/FALSE 
        * * Author: thanh.sok
        * * Created Date: 2018-01-01
    */
    equal: function (a, b) { return equal(a, b); },
    /** * Return array đã được sắp xếp */
    bubbleSort: function (a) { return bubbleSort(a); },
    getdefaultFormat: function (value, format) { return getdefaultFormat(value, format); },
    /**get utility date */
    getuDate: function (value, format) { return getuDate(value, format); },
    getuMonth: function (value, format) { return getuMonth(value, format) },
    getuYear: function (value, format) { return getuYear(value, format) },
    /**FIX CAI BUG KIEU NGAY GIO TREN FORM SEARCH EDIT */
    kieu_ngay_gio: (value, format_date) => { return kieu_ngay_gio(value, format_date); },
    dialog: function (title, text, type, open) { var previousWindowKeyDown = window.onkeydown; wal({ title: title, text: text, type: type, showCancelButton: true, confirmButtonColor: "#DD6B55", confirmButtonText: "Ok !", cancelButtonText: "Cancel !", closeOnConfirm: false }, function (isConfirm) { window.onkeydown = previousWindowKeyDown; if (isConfirm) { open(); } }); }, swal: function (title, message, type) { swal({ title: title, text: message, type: type, timer: 2000 }); },
    check_error403: function (data) { if (data === 403) { swal("Notice ", "Your account is expired, please relog", "warning"); document.cookie = "dn=;expires=-1"; document.cookie = "dn-change=;expires=-1";    /*     // window.localStorage.removeItem("dn"); */        window.location = "login.html"; return; } },
    get_image_path_company: function (url, s_src) { var path = url.replace("/api", ""); if (s_src !== "" && s_src !== undefined) { return path + s_src; } else { return path + "assets/img/no_image.jpg"; } },
    get_image_path: function (url, s_src) { var path = url.replace("/api", ""); if (s_src !== "" && s_src !== undefined) { return path + s_src; } else { return path + "assets/img/no_imagesmall.jpg"; } },
    get_url: function (user, source) { return ('permission?cm=permission&dt={"permission":{"users_id":' + user + ',"resource_id":"' + source + '"}}'); },
    get_url_com: function (company, user, source) { return ("permission?cm=permission&dt={company:{company_id:" + company + "},permission:{users_id:" + user + ",resource_id:" + source + "}}"); },
    get_allow: function (response) { var p = [false, false, false, false]; if (response.dt.permission_list.length > 0) { p[0] = response.dt.permission_list[0].allow_addnew; p[1] = response.dt.permission_list[0].allow_edit; p[2] = response.dt.permission_list[0].allow_delete; p[3] = response.dt.permission_list[0].allow_print; } return p; },
    update_turn_room_booking: function (array) { var room_id_detail_list = []; for (var i = 0; i < array.length; i++/*  //lọc ra mảng chứa các room_id có trong ds */) { if (room_id_detail_list <= 0) { room_id_detail_list.push(Number(array[i].room_id)); } else { if (room_id_detail_list.indexOf(Number(array[i].room_id)) < 0) { room_id_detail_list.push(Number(array[i].room_id)); } } } var main_room_id_detail_list = []; for (var i = 0; i < room_id_detail_list.length; i++ /* //gán mặc dinh số lần xuất hiện room_id sau 1 khoảng thời gian là 0 */) { var temp = { id: 0, number: 0 }; temp.id = room_id_detail_list[i]; main_room_id_detail_list.push(temp); } for (var i = 0; i < array.length; i++) { if (i == 0) {          /* //lần đầu tiên gán field turn của dòng đầu tiên trong ds là 0 */          array[i].turn = 0; for (var j = 0; j < main_room_id_detail_list.length; j++) { if (array[i].room_id == main_room_id_detail_list[j].id) {              /*         //cập nhật tăng số lần xuất hiện của phòng đó vào vào mảng dựa vào room_id */              main_room_id_detail_list[j].number += 1; break; } } } else { if (array[i].room_id == array[i - 1].room_id) {            /* // lần thứ 2 trở đi, kiểm tra nếu dòng tiếp theo trong ds vẩn là phòng cũ thì thì set field turn như dòng trên */            array[i].turn = array[i - 1].turn; } else { for (var j = 0; j < main_room_id_detail_list.length; j++/*  //ngược lại thì set field turn của phòng theo mảng dựa vào room_id sau đó tăng biến number trong mảng lên 1 */) { if (array[i].room_id == main_room_id_detail_list[j].id) { array[i].turn = main_room_id_detail_list[j].number; main_room_id_detail_list[j].number += 1; break; } } } } } return array; },

    check_date: function (data, format_date) { return check_date(data, format_date); },
    /*RETURN TRUE/FALSE and MESSAGE SWAL  from date < to date*/
    checkDateRange: function (fromtdate, todate) { return checkDateRange(fromtdate, todate); },
    /*RETURN TRUE/FALSE and MESSAGE SWAL  */
    getDateRange: function (fromtdate, todate) { return getDateRange(fromtdate, todate); },
    check_date_from_to: function (data, data1) { try { if (data !== undefined && data !== "" && data1 !== undefined && data1 !== "") { data = data.split("-"); data1 = data1.split("-"); if (format_date === "dd-MM-yyyy") { if (Number(data[2]) > Number(data1[2])) { swal("Notice ", " 'To date' must be greater than 'From date'", "warning"); return false; } else if (Number(data[2]) === Number(data1[2])) { if (Number(data[1]) > Number(data1[1])) { swal("Notice ", " 'To date' must be greater than 'From date'", "warning"); return false; } else if (Number(data[1]) === Number(data1[1])) { if (Number(data[0]) > Number(data1[0])) { swal("Notice ", " 'To date' must be greater than 'From date'", "warning"); return false; } } } } else if (format_date === "MM-dd-yyyy") { if (Number(data[2]) > Number(data1[2])) { swal("Notice ", " 'To date' must be greater than 'From date'", "warning"); return false; } else if (Number(data[2]) === Number(data1[2])) { if (Number(data[0]) > Number(data1[0])) { swal("Notice ", " 'To date' must be greater than 'From date'", "warning"); return false; } else if (Number(data[0]) === Number(data1[0])) { if (Number(data[1]) > Number(data1[1])) { swal("Notice ", " 'To date' must be greater than 'From date'", "warning"); return false; } } } } else if (format_date === "yyyy-MM-dd") { if (Number(data[0]) > Number(data1[0])) { swal("Notice ", " 'To date' must be greater than 'From date'", "warning"); return false; } else if (Number(data[0]) === Number(data1[0])) { if (Number(data[0]) > Number(data1[0])) { swal("Notice ", " 'To date' must be greater than 'From date'", "warning"); return false; } else if (Number(data[0]) === Number(data1[0])) { if (Number(data[2]) > Number(data1[2])) { swal("Notice ", " 'To date' must be greater than 'From date'", "warning"); return false; } } } } } else { return true; } } catch (error) { swal("Notice ", "Format error", "warning"); return false; } },
    change_number: function (data) { var t = data + ""; var nStr = t.replace(/[,]/g, ""); nStr += ""; var x = nStr.split("."); var x3 = ""; if (x.length > 1) {        /*  trường hợp 1.0 .0 */        x3 = x[1]; if (Number(x3) === 0) { var xtemp = x[0]; var x = xtemp.split("."); var x1 = x[0]; var x2 = x.length > 1 ? "." + x[1] : ""; var rgx = /(\d+)(\d{3})/; while (rgx.test(x1)) x1 = x1.replace(rgx, "$1" + "," + "$2"); return x1 + x2; } } var x1 = x[0]; var x2 = x.length > 1 ? "." + x[1] : ""; var rgx = /(\d+)(\d{3})/; while (rgx.test(x1)) x1 = x1.replace(rgx, "$1" + "," + "$2"); return x1 + x2; },
    clone: function () { return clone(); },
    /* FIX CAI BUG DOMAIN LINK */
    checkDomainLink: function (auto_link, domain_link) {
      return checkMatchUrl(auto_link, domain_link);
    },
    text_capitalize: function (text) {
      return text_capitalize(text);
    }
  };
})();
