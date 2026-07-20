-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 15, 2025 at 11:58 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wheels24`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `username`, `password`, `created_at`) VALUES
(1, 'cpp', '020904', '2025-03-14 15:10:57');

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `brand_id` int(11) NOT NULL,
  `brand_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`brand_id`, `brand_name`) VALUES
(1, 'Toyota'),
(2, 'Honda'),
(3, 'Ford'),
(5, 'Mercedes-Benz'),
(7, 'Chevrolet'),
(8, 'Hyundai'),
(9, 'Nissan'),
(10, 'Kia'),
(12, 'Porsche'),
(13, 'Jaguar'),
(14, 'Land Rover'),
(15, 'Mazda'),
(16, 'Lexus'),
(17, 'Subaru'),
(18, 'Fiat'),
(19, 'Chrysler'),
(20, 'Tesla'),
(21, 'TTTT');

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

CREATE TABLE `cars` (
  `car_id` int(11) NOT NULL,
  `brand_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `brief` text DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`car_id`, `brand_id`, `name`, `type`, `description`, `image`, `brief`, `price`) VALUES
(1, NULL, 'Toyota Fortuner', 'SUV', 'A popular 7-seater luxury SUV known for its off-road capabilities and robust performance.', 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg?tr=w-664', 'The Toyota Fortuner is one of the most beloved SUVs in India, known for its reliability and powerful engine options...', '₹33.43 - ₹51.94 Lakh*'),
(2, 1, 'tatya totyota', 'adfda', 'Sfdsfv', 'sdgsdfgva', 'dffddv', '46'),
(3, 1, 'tatya totyota', 'adfda', 'Sfdsfv', 'sdgsdfgva', 'dffddv', '46'),
(4, 1, 'tatya totyota', 'adfda', 'Sfdsfv', 'sdgsdfgva', 'dffddv', '46'),
(5, 1, 'tttt', 'bsajdvsak', 'HASHiuukbsd', 'SKDFnlkSDNV', 'SDNVkjSDNv', '4684984'),
(6, 1, 'tttt', 'bsajdvsak', 'HASHiuukbsd', 'SKDFnlkSDNV', 'SDNVkjSDNv', '4684984'),
(7, 1, 'tttt', 'bsajdvsak', 'HASHiuukbsd', 'SKDFnlkSDNV', 'SDNVkjSDNv', '4684984'),
(8, 1, 'tttt', 'bsajdvsak', 'HASHiuukbsd', 'SKDFnlkSDNV', 'SDNVkjSDNv', '4684984');

-- --------------------------------------------------------

--
-- Table structure for table `colors`
--

CREATE TABLE `colors` (
  `car_id` int(11) DEFAULT NULL,
  `color_name` varchar(100) DEFAULT NULL,
  `color_image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `colors`
--

INSERT INTO `colors` (`car_id`, `color_name`, `color_image`) VALUES
(1, 'Phantom Brown', 'https://stimg.cardekho.com/images/car-images/360x240/Toyota/Fortuner/8241/1609933145105/225_phantom-brown-metallic_4b403e.jpg?imwidth=480&impolicy=resize'),
(1, 'Platinum White Pearl', 'https://stimg.cardekho.com/images/car-images/360x240/Toyota/Fortuner/8241/1609933145105/224_white-pearl-crystal-shine-metallic_d9dce2.jpg?imwidth=480&impolicy=resize'),
(1, 'Sparkling Black Crystal Shine', 'https://stimg.cardekho.com/images/car-images/360x240/Toyota/Fortuner/8241/1609933145105/226_sparkling-black-crystal-shine_2f2c2f.jpg?imwidth=480&impolicy=resize'),
(1, 'Avant Garde Bronze', 'https://stimg.cardekho.com/images/car-images/360x240/Toyota/Fortuner/8241/1609933145105/223_avant-grade-bronze_77716b.jpg?imwidth=480&impolicy=resize'),
(1, 'Attitude Black', 'https://stimg.cardekho.com/images/car-images/360x240/Toyota/Fortuner/8241/1609933145105/221_attitude-black_141314.jpg?imwidth=480&impolicy=resize'),
(1, 'Silver Metallic', 'https://stimg.cardekho.com/images/car-images/360x240/Toyota/Fortuner/9095/1652437415106/227_silver-metallic_4b4c4e.jpg?imwidth=480&impolicy=resize'),
(1, 'Super White', 'https://stimg.cardekho.com/images/car-images/360x240/Toyota/Fortuner/8241/1609933145105/227_super-white-metallic_d9dce2.jpg?imwidth=480&impolicy=resize');

-- --------------------------------------------------------

--
-- Table structure for table `cons`
--

CREATE TABLE `cons` (
  `car_id` int(11) DEFAULT NULL,
  `cons_description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cons`
--

INSERT INTO `cons` (`car_id`, `cons_description`) VALUES
(1, 'High price compared to competitors'),
(1, 'Average fuel efficiency'),
(1, 'Stiff ride quality'),
(1, 'Limited third-row space'),
(1, 'Outdated interior design'),
(2, ''),
(3, ''),
(4, ''),
(5, ''),
(6, ''),
(7, ''),
(8, '');

-- --------------------------------------------------------

--
-- Table structure for table `exteriorimages`
--

CREATE TABLE `exteriorimages` (
  `car_id` int(11) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `exteriorimages`
--

INSERT INTO `exteriorimages` (`car_id`, `image_url`) VALUES
(1, 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg'),
(1, 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Fortuner/10903/1690544151440/rear-left-view-121.jpg'),
(1, 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Fortuner/10903/1690544151440/grille-97.jpg'),
(1, 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Fortuner/10903/1690544151440/front-fog-lamp-41.jpg'),
(1, 'https://stimg.cardekho.com/images/carexteriorimages/360x240/Toyota/Fortuner/10903/1690544151440/headlight-43.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `features`
--

CREATE TABLE `features` (
  `car_id` int(11) DEFAULT NULL,
  `feature_description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `interiorimages`
--

CREATE TABLE `interiorimages` (
  `car_id` int(11) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `interiorimages`
--

INSERT INTO `interiorimages` (`car_id`, `image_url`) VALUES
(1, 'https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Fortuner/10903/1690544016397/steering-wheel-54.jpg'),
(1, 'https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Fortuner/10903/1690544016397/instrument-cluster-62.jpg'),
(1, 'https://stimg.cardekho.com/images/carinteriorimages/360x240/Toyota/Fortuner/10903/1690544016397/gear-shifter-87.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `member_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `membership_type` enum('Silver','Gold','Platinum') NOT NULL,
  `join_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `payment_method` varchar(255) DEFAULT NULL,
  `transaction_id` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`member_id`, `name`, `email`, `phone`, `membership_type`, `join_date`, `payment_method`, `transaction_id`) VALUES
(18, 'chirag1', 'chiragpremllani0209@gmail.com', '63564989261', 'Gold', '2025-03-06 18:30:00', 'UPI', 'txn_67cb00d936144'),
(19, 'nayan', 'nayan11@gmail.com', '85221515151', 'Platinum', '2025-03-07 18:30:00', 'Credit Card', 'txn_67cbbccd57f36'),
(20, 'afedddf', 'mox@gmail.com', '878454545411', 'Platinum', '2025-03-07 18:30:00', 'UPI', 'txn_67cbbd0004fb0'),
(21, 'vishal', 'vishal11@gmail.com', '8884451451', 'Silver', '2025-03-09 18:30:00', 'Credit Card', 'txn_67ce80d48ccd5'),
(22, 'sfsad', 'dadas@gmail.com', 'asdasd', 'Silver', '2025-03-11 18:30:00', 'Debit Card', 'txn_67d10e3065372');

-- --------------------------------------------------------

--
-- Table structure for table `mileage`
--

CREATE TABLE `mileage` (
  `car_id` int(11) DEFAULT NULL,
  `fuel_type` varchar(20) DEFAULT NULL,
  `transmission` varchar(20) DEFAULT NULL,
  `mileage` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mileage`
--

INSERT INTO `mileage` (`car_id`, `fuel_type`, `transmission`, `mileage`) VALUES
(1, 'Diesel', 'Manual', '14 kmpl'),
(1, 'Diesel', 'Automatic', '14 kmpl'),
(1, 'Petrol', 'Manual', '11 kmpl'),
(1, 'Petrol', 'Automatic', '11 kmpl');

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` int(11) DEFAULT NULL,
  `member_id` int(11) DEFAULT NULL,
  `payment_method` varchar(50) DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `transaction_id` varchar(50) DEFAULT NULL,
  `payment_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` enum('Success','Failed','Pending') DEFAULT 'Success'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `member_id`, `payment_method`, `amount`, `transaction_id`, `payment_date`, `status`) VALUES
(NULL, NULL, 'UPI', NULL, 'TXN_67ce80dddb7bc', '2025-03-10 06:04:13', 'Success'),
(NULL, NULL, 'Credit Card', NULL, 'TXN_67d10e34e7ed3', '2025-03-12 04:31:48', 'Success');

-- --------------------------------------------------------

--
-- Table structure for table `pros`
--

CREATE TABLE `pros` (
  `car_id` int(11) DEFAULT NULL,
  `pros_description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pros`
--

INSERT INTO `pros` (`car_id`, `pros_description`) VALUES
(1, 'Excellent off-road capabilities'),
(1, 'Spacious and comfortable interior'),
(1, 'Powerful engine options'),
(1, 'High resale value'),
(1, 'Reliable and durable'),
(2, ''),
(3, ''),
(4, ''),
(5, ''),
(6, ''),
(7, ''),
(8, '');

-- --------------------------------------------------------

--
-- Table structure for table `specifications`
--

CREATE TABLE `specifications` (
  `car_id` int(11) DEFAULT NULL,
  `engine` varchar(50) DEFAULT NULL,
  `power` varchar(50) DEFAULT NULL,
  `torque` varchar(50) DEFAULT NULL,
  `seating_capacity` int(11) DEFAULT NULL,
  `drive_type` varchar(10) DEFAULT NULL,
  `mileage` varchar(10) DEFAULT NULL,
  `fuel_type` varchar(20) DEFAULT NULL,
  `transmission` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `specifications`
--

INSERT INTO `specifications` (`car_id`, `engine`, `power`, `torque`, `seating_capacity`, `drive_type`, `mileage`, `fuel_type`, `transmission`) VALUES
(1, '2694 cc - 2755 cc', '163.6 - 201.15 bhp', '245 Nm - 500 Nm', 7, '2WD / 4WD', '11 kmpl', 'Diesel', 'Automatic'),
(2, '', '', '', 0, '', '', '', ''),
(3, '', '', '', 0, '', '', '', ''),
(4, '', '', '', 0, '', '', '', ''),
(5, '', '', '', 0, '', '', '', ''),
(6, '', '', '', 0, '', '', '', ''),
(7, '', '', '', 0, '', '', '', ''),
(8, '', '', '', 0, '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `mobile` varchar(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `security_question` varchar(255) NOT NULL,
  `security_answer` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `city`, `mobile`, `email`, `username`, `password`, `security_question`, `security_answer`) VALUES
(1, 'chirag', 'idar', '6356498926', 'chiragpremlani0209@gmail.com', 'user1', '$2y$10$3gUgI8TEncJR/vUlA5ijA.UNivOigPibjHVOj3nO.92cqt2PqVsNa', 'pet_name', 'idar');

-- --------------------------------------------------------

--
-- Table structure for table `variants`
--

CREATE TABLE `variants` (
  `car_id` int(11) DEFAULT NULL,
  `variant_name` varchar(100) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `variants`
--

INSERT INTO `variants` (`car_id`, `variant_name`, `price`) VALUES
(1, '2.7L Petrol 4x2 MT', 'Rs. 33.43 Lakh'),
(1, '2.7L Petrol 4x2 AT', 'Rs. 34.84 Lakh'),
(1, '2.8L Diesel 4x2 MT', 'Rs. 35.89 Lakh'),
(1, '2.8L Diesel 4x2 AT', 'Rs. 37.28 Lakh'),
(1, '2.8L Diesel 4x4 MT', 'Rs. 45.09 Lakh'),
(1, '2.8L Diesel 4x4 AT', 'Rs. 51.94 Lakh');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`brand_id`);

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`car_id`),
  ADD KEY `brand_id` (`brand_id`);

--
-- Indexes for table `colors`
--
ALTER TABLE `colors`
  ADD KEY `car_id` (`car_id`);

--
-- Indexes for table `cons`
--
ALTER TABLE `cons`
  ADD KEY `car_id` (`car_id`);

--
-- Indexes for table `exteriorimages`
--
ALTER TABLE `exteriorimages`
  ADD KEY `car_id` (`car_id`);

--
-- Indexes for table `features`
--
ALTER TABLE `features`
  ADD KEY `car_id` (`car_id`);

--
-- Indexes for table `interiorimages`
--
ALTER TABLE `interiorimages`
  ADD KEY `car_id` (`car_id`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`member_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `mileage`
--
ALTER TABLE `mileage`
  ADD KEY `car_id` (`car_id`);

--
-- Indexes for table `pros`
--
ALTER TABLE `pros`
  ADD KEY `car_id` (`car_id`);

--
-- Indexes for table `specifications`
--
ALTER TABLE `specifications`
  ADD KEY `car_id` (`car_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `variants`
--
ALTER TABLE `variants`
  ADD KEY `car_id` (`car_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `brand_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `cars`
--
ALTER TABLE `cars`
  MODIFY `car_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `member_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cars`
--
ALTER TABLE `cars`
  ADD CONSTRAINT `cars_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`brand_id`);

--
-- Constraints for table `colors`
--
ALTER TABLE `colors`
  ADD CONSTRAINT `colors_ibfk_1` FOREIGN KEY (`car_id`) REFERENCES `cars` (`car_id`);

--
-- Constraints for table `cons`
--
ALTER TABLE `cons`
  ADD CONSTRAINT `cons_ibfk_1` FOREIGN KEY (`car_id`) REFERENCES `cars` (`car_id`);

--
-- Constraints for table `exteriorimages`
--
ALTER TABLE `exteriorimages`
  ADD CONSTRAINT `exteriorimages_ibfk_1` FOREIGN KEY (`car_id`) REFERENCES `cars` (`car_id`);

--
-- Constraints for table `features`
--
ALTER TABLE `features`
  ADD CONSTRAINT `features_ibfk_1` FOREIGN KEY (`car_id`) REFERENCES `cars` (`car_id`);

--
-- Constraints for table `interiorimages`
--
ALTER TABLE `interiorimages`
  ADD CONSTRAINT `interiorimages_ibfk_1` FOREIGN KEY (`car_id`) REFERENCES `cars` (`car_id`);

--
-- Constraints for table `mileage`
--
ALTER TABLE `mileage`
  ADD CONSTRAINT `mileage_ibfk_1` FOREIGN KEY (`car_id`) REFERENCES `cars` (`car_id`);

--
-- Constraints for table `pros`
--
ALTER TABLE `pros`
  ADD CONSTRAINT `pros_ibfk_1` FOREIGN KEY (`car_id`) REFERENCES `cars` (`car_id`);

--
-- Constraints for table `specifications`
--
ALTER TABLE `specifications`
  ADD CONSTRAINT `specifications_ibfk_1` FOREIGN KEY (`car_id`) REFERENCES `cars` (`car_id`);

--
-- Constraints for table `variants`
--
ALTER TABLE `variants`
  ADD CONSTRAINT `variants_ibfk_1` FOREIGN KEY (`car_id`) REFERENCES `cars` (`car_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
