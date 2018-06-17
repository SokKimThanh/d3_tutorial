/*
 Navicat Premium Data Transfer

 Source Server         : MySQL
 Source Server Type    : MySQL
 Source Server Version : 50721
 Source Host           : localhost:3333
 Source Schema         : tracnghiemtinhcach

 Target Server Type    : MySQL
 Target Server Version : 50721
 File Encoding         : 65001

 Date: 04/05/2018 05:36:47
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for career
-- ----------------------------
DROP TABLE IF EXISTS `career`;
CREATE TABLE `career`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'mã nghề nghiệp',
  `code` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'code đánh dấu nhóm tính cách theo nghề',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'tên nghề nghiệp',
  `status` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'trạng thái nghề nghiệp vd: 1 phổ biến 0 không phổ biến',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for cung_hoang_dao
-- ----------------------------
DROP TABLE IF EXISTS `cung_hoang_dao`;
CREATE TABLE `cung_hoang_dao`  (
  `cung_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id cung hoang dao',
  `cung_code` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'ma cung hoang dao',
  `cung_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'ten cung hoang dao',
  `from_date` int(11) NULL DEFAULT NULL COMMENT 'sinh tu ngay',
  `to_date` int(11) NULL DEFAULT NULL COMMENT 'sinh den ngay',
  `bieu_tuong` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'bieu tuong cung hoang dao',
  `vi_tri` int(255) NULL DEFAULT NULL COMMENT 'vi tri cung hoang dao',
  `tinh_cach` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'tinh cach cung hoang dao',
  `image_path` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT 'hinh anh dai dien',
  `language_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'vi' COMMENT 'ngon ngu vi:viet nam en:english',
  PRIMARY KEY (`cung_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 22 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cung_hoang_dao
-- ----------------------------
INSERT INTO `cung_hoang_dao` VALUES (1, 'bachduong', 'bach duong', 213, 194, 'con cuu trang', 1, 'em  be so sinh', 'http://nuocnhatplus.com/wp-content/uploads/2017/07/ten-12-cung-hoang-dao-bang-tieng-nhat.jpg', 'vi');
INSERT INTO `cung_hoang_dao` VALUES (2, 'aries', 'aries', 213, 194, 'A white sheep', 1, 'baby', 'http://nuocnhatplus.com/wp-content/uploads/2017/07/ten-12-cung-hoang-dao-bang-tieng-nhat.jpg', 'en');
INSERT INTO `cung_hoang_dao` VALUES (3, 'kimnguu', 'kim nguu', 204, 205, 'con bo', 2, 'em be duoc an ngon mac dep', 'http://nuocnhatplus.com/wp-content/uploads/2017/07/ten-12-cung-hoang-dao-bang-tieng-nhat-2.jpg', 'vi');
INSERT INTO `cung_hoang_dao` VALUES (4, 'thaurus', 'thaurus', 204, 205, 'con bo', 2, 'em be duoc an ngon mac dep', 'http://nuocnhatplus.com/wp-content/uploads/2017/07/ten-12-cung-hoang-dao-bang-tieng-nhat-2.jpg', 'en');
INSERT INTO `cung_hoang_dao` VALUES (5, 'songtu', 'song tu', 215, 206, 'cap song sinh', 3, 'em be ham hoc hoi', 'http://nuocnhatplus.com/wp-content/uploads/2017/07/ten-12-cung-hoang-dao-bang-tieng-nhat-3.jpg', 'vi');
INSERT INTO `cung_hoang_dao` VALUES (6, 'gemini', 'gemini', 215, 206, 'cap song sinh', 3, 'em be ham hoc hoi', 'http://nuocnhatplus.com/wp-content/uploads/2017/07/ten-12-cung-hoang-dao-bang-tieng-nhat-4.jpg', 'en');
INSERT INTO `cung_hoang_dao` VALUES (7, 'cugiai', 'cu giai', 216, 227, 'con cua', 4, 'em be biet lo nghi den gia dinh', 'http://nuocnhatplus.com/wp-content/uploads/2017/07/ten-12-cung-hoang-dao-bang-tieng-nhat-4.jpg', 'vi');
INSERT INTO `cung_hoang_dao` VALUES (8, 'cancer', 'cancer', 216, 227, 'con cua', 4, 'em be biet lo nghi den gia dinh', 'http://nuocnhatplus.com/wp-content/uploads/2017/07/ten-12-cung-hoang-dao-bang-tieng-nhat-4.jpg', 'en');
INSERT INTO `cung_hoang_dao` VALUES (9, 'sutu', 'su tu', 237, 228, 'con su tu', 5, 'hot boy hot girl', 'http://nuocnhatplus.com/wp-content/uploads/2017/07/ten-12-cung-hoang-dao-bang-tieng-nhat-5.jpg', 'vi');
INSERT INTO `cung_hoang_dao` VALUES (10, 'leo', 'leo', 237, 228, 'The lion', 5, 'hot boy hot girl', 'http://nuocnhatplus.com/wp-content/uploads/2017/07/ten-12-cung-hoang-dao-bang-tieng-nhat-5.jpg', 'en');
INSERT INTO `cung_hoang_dao` VALUES (11, 'xunu', 'xu nu', 238, 229, 'co gai dong trinh', 6, 'hoc sinh cham ngoan', 'http://nuocnhatplus.com/wp-content/uploads/2017/07/ten-12-cung-hoang-dao-bang-tieng-nhat.jpg', 'vi');
INSERT INTO `cung_hoang_dao` VALUES (12, 'vigor', 'vigor', 238, 229, 'co gai dong trinh', 6, 'hoc sinh cham ngoan', 'http://nuocnhatplus.com/wp-content/uploads/2017/07/ten-12-cung-hoang-dao-bang-tieng-nhat.jpg', 'en');
INSERT INTO `cung_hoang_dao` VALUES (13, 'thienbinh', 'thien binh', 239, 2210, 'can can', 7, 'hoc sinh da tot nghiep', 'http://nuocnhatplus.com/wp-content/uploads/2017/07/ten-12-cung-hoang-dao-bang-tieng-nhat.jpg', 'vi');
INSERT INTO `cung_hoang_dao` VALUES (14, 'libra', 'libra', 239, 2210, 'can can', 7, 'hoc sinh da tot nghiep', 'http://nuocnhatplus.com/wp-content/uploads/2017/07/ten-12-cung-hoang-dao-bang-tieng-nhat.jpg', 'en');
INSERT INTO `cung_hoang_dao` VALUES (15, 'thienyet', 'thien yet', 2310, 2211, 'con bo cap', 8, 'thanh nien cung', 'http://nuocnhatplus.com/wp-content/uploads/2017/07/ten-12-cung-hoang-dao-bang-tieng-nhat.jpg', 'vi');
INSERT INTO `cung_hoang_dao` VALUES (16, 'scopius', 'scopius', 2310, 2211, 'con bo cap', 8, 'thanh nien cung', 'http://nuocnhatplus.com/wp-content/uploads/2017/07/ten-12-cung-hoang-dao-bang-tieng-nhat.jpg', 'en');
INSERT INTO `cung_hoang_dao` VALUES (17, 'nhanma', 'nhanma', 2311, 2212, 'sinh vat nua nguoi nua ngua tay cam cung ten', 9, 'thanh nien roi xa to am', 'http://nuocnhatplus.com/wp-content/uploads/2017/07/ten-12-cung-hoang-dao-bang-tieng-nhat-9.jpg', 'vi');
INSERT INTO `cung_hoang_dao` VALUES (18, 'sagittarius', 'sagittarius', 2311, 2212, 'sinh vat nua nguoi nua ngua tay cam cung ten', 9, 'thanh nien roi xa to am', 'http://nuocnhatplus.com/wp-content/uploads/2017/07/ten-12-cung-hoang-dao-bang-tieng-nhat-9.jpg', 'en');
INSERT INTO `cung_hoang_dao` VALUES (19, 'maket', 'maket', 2212, 191, 'con de co duoi ca', 10, 'ong cu non', 'http://nuocnhatplus.com/wp-content/uploads/2017/07/ten-12-cung-hoang-dao-bang-tieng-nhat-10.jpg', 'vi');
INSERT INTO `cung_hoang_dao` VALUES (20, 'baobinh', 'baobinh', 201, 182, 'nguoi mang nuoc', 11, 'ong ba cu', 'http://nuocnhatplus.com/wp-content/uploads/2017/07/ten-12-cung-hoang-dao-bang-tieng-nhat-11.jpg', 'vi');
INSERT INTO `cung_hoang_dao` VALUES (21, 'songngu', 'songngu', 192, 203, 'hai con ca', 12, 'thay boi', 'http://nuocnhatplus.com/wp-content/uploads/2017/07/ten-12-cung-hoang-dao-bang-tieng-nhat-12.jpg', 'vi');
-- ----------------------------
-- Table structure for question
-- ----------------------------
DROP TABLE IF EXISTS `question`;
CREATE TABLE `question`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ma so cau hoi',
  `code` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'code nhóm số câu hỏi',
  `number` int(11) NULL DEFAULT NULL COMMENT 'thu tu cau hoi',
  `question` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'noi dung cau hoi',
  `status` int(11) NULL DEFAULT NULL COMMENT 'trạng thái trả lời câu hỏi vd: 1 đã trả lời, 0 chưa trả lời',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of question
-- ----------------------------
INSERT INTO `question` VALUES (1, '19', 1, 'Tôi có tính tự lập', 1);

-- ----------------------------
-- Table structure for tinhcach
-- ----------------------------
DROP TABLE IF EXISTS `tinhcach`;
CREATE TABLE `tinhcach`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'mã nhóm tính cách phân biệt',
  `code` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'code đánh dấu ký tự nhóm tính cách',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'tên nhóm tính cách',
  `status` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'trạng thái nhóm tính cách vd: 1 phổ biến 0 không phổ biến',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_code` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `firstname` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `lastname` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `email` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `gender` int(11) NULL DEFAULT NULL,
  `useraddress` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
  `username` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `status` int(11) NULL DEFAULT NULL,
  `univer_code` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`) USING BTREE,
  UNIQUE INDEX `user_code`(`user_code`) USING BTREE,
  INDEX `univer_code`(`univer_code`) USING BTREE,
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`univer_code`) REFERENCES `university` (`univer_code`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
