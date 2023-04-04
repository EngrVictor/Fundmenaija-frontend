-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 03, 2023 at 05:25 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `_fundmenaija`
--

-- --------------------------------------------------------

--
-- Table structure for table `_issues`
--

CREATE TABLE `_issues` (
  `id` int(11) NOT NULL,
  `user_id` varchar(11) NOT NULL,
  `user_username` varchar(255) NOT NULL,
  `avatar` text NOT NULL,
  `avatar_2` text NOT NULL,
  `issue_title` varchar(255) NOT NULL,
  `target` int(11) NOT NULL,
  `issue_body` text NOT NULL,
  `issue_time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `_issues`
--

INSERT INTO `_issues` (`id`, `user_id`, `user_username`, `avatar`, `avatar_2`, `issue_title`, `target`, `issue_body`, `issue_time`) VALUES
(1, '2', 'cybergate', 'school.jpeg', 'school.jpeg', 'School Fees', 0, 'This is a welcome message to all our users who wish to raise fund for their business or academics. Thank you for signing in the our site. We promise to bring you amazing features that will improve and grace your life. Stay tune for much more. Or visit our about us page for more information.', '2022-12-10 00:00:00'),
(2, '2', 'cybergate', 'house.jpeg', 'house.jpeg', 'House Rent', 0, 'We believe in building the life we deserve through innovation and creativity. This is a welcome message to all our users who wish to raise fund for their business or academics. Thank you for signing in the our site. We promise to bring you amazing features that will improve and grace your life. Stay tune for much more. Or visit our about us page for more information.', '2022-12-09 00:00:00'),
(3, '2', 'cybergate', 'church.jpg', 'church.jpg', 'Church Project', 0, 'We believe in building the life we deserve through innovation and creativity. This is a welcome message to all our users who wish to raise fund for their business or academics. Thank you for signing in the our site. We promise to bring you amazing features that will improve and grace your life. Stay tune for much more. Or visit our about us page for more information.', '2022-12-12 00:00:00'),
(4, '2', 'cybergate', 'church.jpg', 'church.jpg', 'Motherless Fund Raise', 0, 'Extend your chritainityby giving to the le previlidged. God bless us all.We believe in building the life we deserve through innovation and creativity. This is a welcome message to all our users who wish to raise fund for their business or academics. Thank you for signing in the our site. We promise to bring you amazing features that will improve and grace your life. Stay tune for much more. Or visit our about us page for more information.', '2022-12-12 00:00:00'),
(5, '', '', '', '', '', 0, '', '0000-00-00 00:00:00'),
(6, '', '', '', '', '', 0, '', '0000-00-00 00:00:00'),
(7, '', '', 'C:\\fakepath\\2-25122_clip-art-burned-paper-old-burnt-paper-background.png', 'C:\\fakepath\\2-28027_neon-splash-png-color-splash-png-transparent-png.png', '', 0, '', '0000-00-00 00:00:00'),
(8, '', '', '', '', '', 0, '', '0000-00-00 00:00:00'),
(9, '', '', 'C:\\fakepath\\2-25122_clip-art-burned-paper-old-burnt-paper-background.png', 'C:\\fakepath\\2-28027_neon-splash-png-color-splash-png-transparent-png.png', '', 0, '', '0000-00-00 00:00:00'),
(10, '', '', '', '', '', 0, '', '0000-00-00 00:00:00'),
(11, '', '', 'C:\\fakepath\\2-25122_clip-art-burned-paper-old-burnt-paper-background.png', 'C:\\fakepath\\2-28027_neon-splash-png-color-splash-png-transparent-png.png', '', 0, '', '0000-00-00 00:00:00'),
(12, '', '', 'C:\\fakepath\\2-25122_clip-art-burned-paper-old-burnt-paper-background.png', 'C:\\fakepath\\2-28027_neon-splash-png-color-splash-png-transparent-png.png', '', 0, '', '0000-00-00 00:00:00'),
(13, '', '', '', '', '', 0, '', '0000-00-00 00:00:00'),
(14, '', '', 'C:\\fakepath\\2-25122_clip-art-burned-paper-old-burnt-paper-background.png', 'C:\\fakepath\\2-28027_neon-splash-png-color-splash-png-transparent-png.png', '', 0, '', '0000-00-00 00:00:00'),
(15, '', '', '', '', '', 0, '', '0000-00-00 00:00:00'),
(16, '', '', 'C:\\fakepath\\2-25122_clip-art-burned-paper-old-burnt-paper-background.png', 'C:\\fakepath\\2-28027_neon-splash-png-color-splash-png-transparent-png.png', '', 0, '', '0000-00-00 00:00:00'),
(17, '', '', '', '', '', 0, '', '0000-00-00 00:00:00'),
(18, '', '', 'C:\\fakepath\\2-25122_clip-art-burned-paper-old-burnt-paper-background.png', 'C:\\fakepath\\2-28027_neon-splash-png-color-splash-png-transparent-png.png', '', 0, '', '0000-00-00 00:00:00'),
(19, '', '', '', '', '', 0, '', '0000-00-00 00:00:00'),
(20, '', '', 'C:\\fakepath\\2c00ptb.jpg', 'C:\\fakepath\\2-25122_clip-art-burned-paper-old-burnt-paper-background.png', '', 0, '', '0000-00-00 00:00:00'),
(21, '', '', '', '', '', 0, ' Target: ', '0000-00-00 00:00:00'),
(22, '', '', 'C:\\fakepath\\2c00ptb.jpg', 'C:\\fakepath\\2-25122_clip-art-burned-paper-old-burnt-paper-background.png', 'MArriage rites', 0, 'for marriages  Target: 2000000', '0000-00-00 00:00:00'),
(23, '', '', '', '', '', 0, ' Target: ', '0000-00-00 00:00:00'),
(24, '', 'cybergate', 'C:\\fakepath\\2c00ptb.jpg', 'C:\\fakepath\\2-25122_clip-art-burned-paper-old-burnt-paper-background.png', 'MArriage rites', 0, 'for marriages  Target: 2000000', '0000-00-00 00:00:00'),
(25, '', '', '', '', '', 0, ' Target: ', '0000-00-00 00:00:00'),
(26, '', 'cybergate', 'C:\\fakepath\\2c00ptb.jpg', 'C:\\fakepath\\2-25122_clip-art-burned-paper-old-burnt-paper-background.png', 'MArriage rites', 0, 'for marriages  Target: 2000000', '0000-00-00 00:00:00'),
(27, '', '', '', '', '', 0, ' Target: ', '0000-00-00 00:00:00'),
(28, '', 'cybergate', 'C:\\fakepath\\2c00ptb.jpg', 'C:\\fakepath\\2-28027_neon-splash-png-color-splash-png-transparent-png.png', 'Marriage rites', 0, 'tester Target: 3000', '0000-00-00 00:00:00'),
(29, '', '', '', '', '', 0, ' Target: ', '0000-00-00 00:00:00'),
(30, '', 'cybergate', 'C:\\fakepath\\2c00ptb.jpg', 'C:\\fakepath\\2-28027_neon-splash-png-color-splash-png-transparent-png.png', 'Marriage rites', 0, 'tester Target: 3000', '0000-00-00 00:00:00'),
(31, '', '', '', '', '', 0, ' Target: ', '0000-00-00 00:00:00'),
(32, '2', 'cybergate', 'C:\\fakepath\\2c00ptb.jpg', 'C:\\fakepath\\2-28027_neon-splash-png-color-splash-png-transparent-png.png', 'Marriage rites', 0, 'tester Target: 3000', '0000-00-00 00:00:00'),
(33, '', '', '', '', '', 0, '', '0000-00-00 00:00:00'),
(34, '2', 'cybergate', '2-25122_clip-art-burned-paper-old-burnt-paper-background.png', '0c84d1462bf0394293b4d3ab3cc7ba8c.jpg', 'Food stuffs', 333, 'working done', '0000-00-00 00:00:00'),
(35, '2', 'cybergate', '2-25122_clip-art-burned-paper-old-burnt-paper-background.png', '0c84d1462bf0394293b4d3ab3cc7ba8c.jpg', 'Food stuffs', 333, 'working done', '0000-00-00 00:00:00'),
(36, '2', 'cybergate', '2-25122_clip-art-burned-paper-old-burnt-paper-background.png', '0c84d1462bf0394293b4d3ab3cc7ba8c.jpg', 'Food stuffs', 333, 'working done', '0000-00-00 00:00:00'),
(37, '2', 'cybergate', '2-25122_clip-art-burned-paper-old-burnt-paper-background.png', '0c84d1462bf0394293b4d3ab3cc7ba8c.jpg', 'Food stuffs', 333, 'working done', '0000-00-00 00:00:00'),
(38, '2', 'cybergate', '2-25122_clip-art-burned-paper-old-burnt-paper-background.png', '0c84d1462bf0394293b4d3ab3cc7ba8c.jpg', 'Food stuffs', 333, 'working done', '0000-00-00 00:00:00'),
(39, '2', 'cybergate', '2-25122_clip-art-burned-paper-old-burnt-paper-background.png', '0c84d1462bf0394293b4d3ab3cc7ba8c.jpg', 'Food stuffs', 333, 'working done', '0000-00-00 00:00:00'),
(40, '2', 'cybergate', '2-25122_clip-art-burned-paper-old-burnt-paper-background.png', '0c84d1462bf0394293b4d3ab3cc7ba8c.jpg', 'Food stuffs', 333, 'working done', '0000-00-00 00:00:00'),
(41, '2', 'cybergate', '2-25122_clip-art-burned-paper-old-burnt-paper-background.png', '0c84d1462bf0394293b4d3ab3cc7ba8c.jpg', 'Food stuffs', 333, 'working done', '0000-00-00 00:00:00'),
(42, '2', 'cybergate', '2-25122_clip-art-burned-paper-old-burnt-paper-background.png', '0c84d1462bf0394293b4d3ab3cc7ba8c.jpg', 'Food stuffs', 333, 'working done', '0000-00-00 00:00:00'),
(43, '2', 'cybergate', '2-25122_clip-art-burned-paper-old-burnt-paper-background.png', '0c84d1462bf0394293b4d3ab3cc7ba8c.jpg', 'Food stuffs', 333, 'working done', '0000-00-00 00:00:00'),
(44, '2', 'cybergate', '2-25122_clip-art-burned-paper-old-burnt-paper-background.png', '0c84d1462bf0394293b4d3ab3cc7ba8c.jpg', 'Food stuffs', 333, 'working done', '0000-00-00 00:00:00'),
(45, '2', 'cybergate', '2-25122_clip-art-burned-paper-old-burnt-paper-background.png', '0c84d1462bf0394293b4d3ab3cc7ba8c.jpg', 'Food stuffs', 333, 'working done', '0000-00-00 00:00:00'),
(46, '2', 'cybergate', '17-august-1945-happy-indonesia-260nw-1455873755.jpg', '40-404450_colorful-splash-png-cmyk-splash-png.png', 'Food stuffs', 6000, 'tryiny it out', '0000-00-00 00:00:00'),
(47, '2', 'cybergate', '17-august-1945-happy-indonesia-260nw-1455873755.jpg', '40-404450_colorful-splash-png-cmyk-splash-png.png', 'Food stuffs', 6000, 'tryiny it out', '0000-00-00 00:00:00'),
(48, '2', 'cybergate', '17-august-1945-happy-indonesia-260nw-1455873755.jpg', '40-404450_colorful-splash-png-cmyk-splash-png.png', 'Food stuffs', 6000, 'tryiny it out', '0000-00-00 00:00:00'),
(49, '2', 'cybergate', '17-august-1945-happy-indonesia-260nw-1455873755.jpg', '40-404450_colorful-splash-png-cmyk-splash-png.png', 'Food stuffs', 6000, 'tryiny it out', '0000-00-00 00:00:00'),
(50, '2', 'cybergate', '17-august-1945-happy-indonesia-260nw-1455873755.jpg', '40-404450_colorful-splash-png-cmyk-splash-png.png', 'Food stuffs', 6000, 'tryiny it out', '0000-00-00 00:00:00'),
(51, '2', 'cybergate', '17-august-1945-happy-indonesia-260nw-1455873755.jpg', '40-404450_colorful-splash-png-cmyk-splash-png.png', 'Food stuffs', 6000, 'tryiny it out', '0000-00-00 00:00:00'),
(52, '2', 'cybergate', '17-august-1945-happy-indonesia-260nw-1455873755.jpg', '40-404450_colorful-splash-png-cmyk-splash-png.png', 'Food stuffs', 6000, 'tryiny it out', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `_issues`
--
ALTER TABLE `_issues`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `_issues`
--
ALTER TABLE `_issues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
