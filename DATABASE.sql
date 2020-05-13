-- phpMyAdmin SQL Dump
-- version 4.4.15.10
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 13, 2020 at 05:22 PM
-- Server version: 5.5.65-MariaDB
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `siteman`
--

-- --------------------------------------------------------

--
-- Table structure for table `memes`
--

CREATE TABLE IF NOT EXISTS `memes` (
  `meme_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `filename` text NOT NULL,
  `tag` text NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `memes`
--

INSERT INTO `memes` (`meme_id`, `name`, `filename`, `tag`) VALUES
(12, 'reeeeeeeee', '0cee2cfc8b3e22b467634c303f4e4db7', '2'),
(13, 'allohio', '01bd29ac884ceae3ded4cb517551874b', '8'),
(2, 'POGODEMON', '2f5f8a7848803e75edc7ba201ca8e144', '1'),
(8, 'UponHisThrone', 'bd0db3a6168e919d340f59ca0b2bd973', '3'),
(5, 'chimpmode', '02106a497e530ed8c7dbecec16bfdfa8', '1'),
(6, 'TheTimbler', '359b45190ac7e4c401a9944331898f44', '2'),
(7, 'BoarInDaStore', '8843e4dec76781ad36dfa28a51b3ee9d', '2'),
(9, 'Why', '68db3de43226bb0a3200c5abe40eea08', '1'),
(10, 'retardmode', '39898b1211ecea64dede5dc671bdd607', '7'),
(11, 'notenjoyingthis', '595809d5b9a46a770d70c7987463aa1d', '1'),
(14, 'tanjiro', '56d7efe2523480b474820989f79b445f', '1');

-- --------------------------------------------------------

--
-- Table structure for table `meme_user`
--

CREATE TABLE IF NOT EXISTS `meme_user` (
  `user_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `meme_user`
--

INSERT INTO `meme_user` (`user_id`, `name`, `email`, `password`) VALUES
(1, 'spaghettiboy', 'spaghetti@boy.com', '$2a$10$efJULUehcAZEfH7.ay5Bf.SKzrhtInSlnQJHRPIUvSbKHOmfI1bna'),
(2, 'boyspaghetti', 'boy@spaghetti.com', '$2a$10$N7iQ/o0fhMj0hUKu.xCfF.Aht9bvaBOcPuuvPyXPGBkxeBHheVT7O'),
(3, 'spaghettiboy', 'boy@spaghetti.com', '$2a$10$/xCPRMMS1qEvJwZ29f0WXuSTMjK4utSyxmfHQ4ucg.XPMRfqlkf8C'),
(4, 'spaghettiMAN', 'spaghetti@man.com', '$2a$10$nF6JpHOcT1qyAvJ.5BiwW.hZat7HwU0jYLQNtKhXehbXNXB.WLONG'),
(5, 'lol', 'lol@lmao.com', '$2a$10$A.pDmzR.X1TbEq2taqlcQucmGct3h1rxCCRehzsdANCecrmn7toUq');

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE IF NOT EXISTS `tags` (
  `tag_id` int(11) NOT NULL,
  `name` text NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`tag_id`, `name`) VALUES
(1, 'reaction'),
(2, 'funny'),
(3, 'foreveralone'),
(4, 'games'),
(5, 'cat'),
(6, 'NSFW'),
(7, 'animal'),
(8, 'absurd');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `memes`
--
ALTER TABLE `memes`
  ADD PRIMARY KEY (`meme_id`);

--
-- Indexes for table `meme_user`
--
ALTER TABLE `meme_user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`tag_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `memes`
--
ALTER TABLE `memes`
  MODIFY `meme_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `meme_user`
--
ALTER TABLE `meme_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
  MODIFY `tag_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
