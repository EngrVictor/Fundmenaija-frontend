-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 20, 2023 at 11:39 AM
-- Server version: 5.7.41-cll-lve
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fund`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `AccountNo` varchar(12) NOT NULL,
  `Balance` varchar(100) NOT NULL,
  `SavingBalance` varchar(100) NOT NULL,
  `SavingTarget` varchar(100) NOT NULL,
  `AccountType` text NOT NULL,
  `State` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `AccountNo`, `Balance`, `SavingBalance`, `SavingTarget`, `AccountType`, `State`) VALUES
(1, '120222215049', '0.0', '0.0', '10000', 'Savings', 0),
(2, '121022125635', '0.0', '0.0', '', 'Savings', 0),
(3, '208231020580', '0.0', '0.0', '', 'Savings', 0),
(0, '214231101400', '0.0', '0.0', '', 'Savings', 0),
(0, '214231642500', '0.0', '0.0', '', 'Savings', 0),
(0, '214232259280', '0.0', '0.0', '', 'Savings', 0),
(0, '215231258040', '0.0', '0.0', '', 'Savings', 0),
(0, '215231339040', '0.0', '0.0', '', 'Savings', 0),
(0, '219231719060', '0.0', '0.0', '', 'Savings', 0);

-- --------------------------------------------------------

--
-- Table structure for table `cards`
--

CREATE TABLE `cards` (
  `srNo` int(11) NOT NULL,
  `AccountNo` varchar(12) NOT NULL,
  `Name` varchar(80) NOT NULL,
  `CardNo` varchar(16) NOT NULL,
  `cvv` int(3) NOT NULL,
  `IssuedDate` varchar(20) NOT NULL,
  `ExpiryDate` varchar(20) NOT NULL,
  `Status` varchar(12) NOT NULL,
  `Verified` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cards`
--

INSERT INTO `cards` (`srNo`, `AccountNo`, `Name`, `CardNo`, `cvv`, `IssuedDate`, `ExpiryDate`, `Status`, `Verified`) VALUES
(1, '208231020580', 'KENNETH MATTHEWS', '8220823103233020', 638, '', '', 'Active', 'Yes'),
(2, '214231101400', 'KENECHUKWU  ANSELM ', '4221523130342021', 471, '', '', 'Inactive', 'No');

-- --------------------------------------------------------

--
-- Table structure for table `customer_detail`
--

CREATE TABLE `customer_detail` (
  `C_No` int(11) NOT NULL,
  `Account_No` varchar(12) NOT NULL,
  `C_First_Name` text NOT NULL,
  `C_Last_Name` text NOT NULL,
  `C_Mobile_No` varchar(25) NOT NULL,
  `C_Email` varchar(200) NOT NULL,
  `Id_type` varchar(255) NOT NULL,
  `C_Adhar_Doc` varchar(500) NOT NULL,
  `C_Pan_Doc` varchar(500) NOT NULL,
  `Create_Date` varchar(255) NOT NULL DEFAULT 'current_timestamp()',
  `ProfileColor` varchar(100) NOT NULL,
  `ProfileImage` varchar(400) NOT NULL,
  `Bio` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer_detail`
--

INSERT INTO `customer_detail` (`C_No`, `Account_No`, `C_First_Name`, `C_Last_Name`, `C_Mobile_No`, `C_Email`, `Id_type`, `C_Adhar_Doc`, `C_Pan_Doc`, `Create_Date`, `ProfileColor`, `ProfileImage`, `Bio`) VALUES
(1, '120222215049', 'cybergate', 'abel', '0703775772', 'abelchinedu2@gmail.com', '', 'customer_data/SSN_doc/1(1)1222022215049.jpg', 'customer_data/Pan_doc/profile.jpg', '2022-12-02', '#3b25cf', '', ''),
(4, '214231101400', 'Kenechukwu ', 'Anselm ', '07067160288', 'emedike2027@gmail.com', 'NIN', 'customer_data/SSN_doc/IMG_20230214_115751_62202142023110140.jpg', 'customer_data/SSN_doc/IMG_20230214_115751_62202142023110140.jpg', 'current_timestamp()', '#7165fe', 'Not Available', 'Biolography'),
(3, '208231020580', 'kenneth', 'matthews', '08062179543', 'possibilitiesafrica2015@gmail.com', 'NIN', 'customer_data/SSN_doc/WhatsApp_Image_2022-12-30_at_08.16.190282023102058.jpeg', 'customer_data/SSN_doc/WhatsApp_Image_2022-12-30_at_08.16.190282023102058.jpeg', 'current_timestamp()', '#1ec0d2', 'Not Available', 'Biolography'),
(5, '214231642500', 'Isaac', 'Enaholo', '07031311386', 'isaacjet.e@gmail.com', 'international_passport', 'customer_data/SSN_doc/Image_(1)_102142023164250.jpg', 'customer_data/SSN_doc/Image_(1)_102142023164250.jpg', 'current_timestamp()', '#850a64', 'Not Available', 'Biolography'),
(6, '214232259280', 'Josiah', 'Gogonte', '07041521410', 'josiahbestman77@gmail.com', 'voters_card', 'customer_data/SSN_doc/IMG_20220314_090952_41002142023225928.jpg', 'customer_data/SSN_doc/IMG_20220314_090952_41002142023225928.jpg', 'current_timestamp()', '#2d18ac', 'Not Available', 'Biolography'),
(7, '215231258040', 'Oladipupo', 'Oluwaseun', '08142819047', 'oladipupooluwaseun1996@gmail.com', 'NIN', 'customer_data/SSN_doc/tmp-cam-190807317453923221602152023125804.jpg', 'customer_data/SSN_doc/tmp-cam-190807317453923221602152023125804.jpg', 'current_timestamp()', '#ed6c45', 'Not Available', 'Biolography'),
(8, '215231339040', 'Asiagwu', 'Blessing', '08037323882', 'bblondon04@gmail.com', 'NIN', 'customer_data/SSN_doc/IMG_20230215_142743_559~202152023133904.jpg', 'customer_data/SSN_doc/IMG_20230215_142743_559~202152023133904.jpg', 'current_timestamp()', '#43822d', 'Not Available', 'Biolography'),
(9, '219231719060', 'James ', 'Ajayi ', '09077898431', 'Keninej24@gmail.com', 'voters_card', 'customer_data/SSN_doc/1676826751248109871229002192023171906.jpg', 'customer_data/SSN_doc/1676826751248109871229002192023171906.jpg', 'current_timestamp()', '#28d823', 'Not Available', 'Biolography');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `ID` int(11) NOT NULL,
  `AccountNo` varchar(12) NOT NULL,
  `Username` varchar(30) NOT NULL,
  `Password` varchar(40) NOT NULL,
  `Status` varchar(20) NOT NULL,
  `State` int(11) NOT NULL,
  `AuthKey` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`ID`, `AccountNo`, `Username`, `Password`, `Status`, `State`, `AuthKey`) VALUES
(2, '120222215049', 'cybergate', '298df202fee378a015e518ab7ff37e26', 'Active', 0, '0'),
(1, '1234567890', 'Admin', '298df202fee378a015e518ab7ff37e26', 'Super', 1, '982369'),
(3, '214231101400', 'AnseKen', '0c793e8d01e0b0aa1a103456952ea274', 'Active', 0, '0'),
(4, '214231642500', 'Tehilla', 'b24fa6ca90362797cb13394e0cd5f5d9', 'Active', 0, '0'),
(5, '214232259280', 'Bestmandanfodio2020', 'bed807b7a416af4df38a8c75b2c75aa8', 'Active', 0, '0'),
(6, '215231258040', 'Temitayo124', 'bdfed3fec22bba15f5f7f26715b09170', 'Active', 0, '0'),
(7, '215231339040', 'Blessed04', '61713c7cfe44757c4c7f5f2edbc97abf', 'Active', 0, '0'),
(8, '219231719060', 'Kenineson', 'e4aea277f99af77d59271c3cfa23d5ff', 'Inactive', 0, '0');

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `id` int(11) NOT NULL,
  `AccountNo` varchar(12) NOT NULL,
  `FAccountNo` varchar(12) NOT NULL,
  `Name` text NOT NULL,
  `Amount` varchar(100) NOT NULL,
  `Debit` varchar(100) NOT NULL,
  `Credit` varchar(100) NOT NULL,
  `Date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Status` text NOT NULL,
  `ProfileColor` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `_issues`
--

CREATE TABLE `_issues` (
  `id` int(11) NOT NULL,
  `user_id` varchar(11) NOT NULL,
  `user_username` varchar(255) NOT NULL,
  `avatar` text NOT NULL,
  `issue_title` varchar(255) NOT NULL,
  `issue_body` text NOT NULL,
  `issue_time` varchar(255) NOT NULL DEFAULT 'current_timestamp()'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `_issues`
--

INSERT INTO `_issues` (`id`, `user_id`, `user_username`, `avatar`, `issue_title`, `issue_body`, `issue_time`) VALUES
(1, '1', 'cybergate', 'user.jpg', 'School Fees', 'This is a welcome message to all our users who wish to raise fund for their business or academics. Thank you for signing in the our site. We promise to bring you amazing features that will improve and grace your life. Stay tune for much more. Or visit our about us page for more information.', '2022-12-10'),
(2, '1', 'cybergate', 'issue.jpg', 'House Rent', 'We believe in building the life we deserve through innovation and creativity. This is a welcome message to all our users who wish to raise fund for their business or academics. Thank you for signing in the our site. We promise to bring you amazing features that will improve and grace your life. Stay tune for much more. Or visit our about us page for more information.', '2022-12-9'),
(3, '1', 'cybergate', 'user.jpg', 'Church Project', 'We believe in building the life we deserve through innovation and creativity. This is a welcome message to all our users who wish to raise fund for their business or academics. Thank you for signing in the our site. We promise to bring you amazing features that will improve and grace your life. Stay tune for much more. Or visit our about us page for more information.', '2022-12-12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cards`
--
ALTER TABLE `cards`
  ADD PRIMARY KEY (`srNo`),
  ADD UNIQUE KEY `AccountNo` (`AccountNo`),
  ADD UNIQUE KEY `CardNo` (`CardNo`);

--
-- Indexes for table `customer_detail`
--
ALTER TABLE `customer_detail`
  ADD PRIMARY KEY (`C_No`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`AccountNo`),
  ADD UNIQUE KEY `Unique` (`ID`),
  ADD UNIQUE KEY `AccountNo` (`AccountNo`),
  ADD UNIQUE KEY `Username` (`Username`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `_issues`
--
ALTER TABLE `_issues`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cards`
--
ALTER TABLE `cards`
  MODIFY `srNo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `customer_detail`
--
ALTER TABLE `customer_detail`
  MODIFY `C_No` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `_issues`
--
ALTER TABLE `_issues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
