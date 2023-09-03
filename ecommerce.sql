-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 21, 2023 at 10:41 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `imageUrl` text NOT NULL,
  `imageFile` text NOT NULL,
  `name` text NOT NULL,
  `quantity` text NOT NULL,
  `product_id` text NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `main_pages`
--

CREATE TABLE `main_pages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `shop` text NOT NULL,
  `imageFile` varchar(255) NOT NULL,
  `imageUrl` varchar(255) NOT NULL,
  `route` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `main_pages`
--

INSERT INTO `main_pages` (`id`, `title`, `shop`, `imageFile`, `imageUrl`, `route`, `created_at`, `updated_at`) VALUES
(4, 'Jkjj', 'hhhhhhhh', 'http://localhost:8000/storage/images/MainPage/1690814619_code.png', '', 'shop/JACKETS', '2023-07-31 11:43:39', '2023-07-31 11:43:39');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(50, '2023_04_12_221042_create_phones_table', 1),
(55, '2014_10_12_000000_create_users_table', 2),
(56, '2014_10_12_100000_create_password_reset_tokens_table', 2),
(57, '2016_06_01_000001_create_oauth_auth_codes_table', 2),
(58, '2016_06_01_000002_create_oauth_access_tokens_table', 2),
(59, '2016_06_01_000003_create_oauth_refresh_tokens_table', 2),
(60, '2016_06_01_000004_create_oauth_clients_table', 2),
(61, '2016_06_01_000005_create_oauth_personal_access_clients_table', 2),
(62, '2019_08_19_000000_create_failed_jobs_table', 2),
(63, '2019_12_14_000001_create_personal_access_tokens_table', 2),
(64, '2023_04_14_085804_create_main_pages_table', 2),
(65, '2023_04_19_044430_create_products_table', 2),
(66, '2023_04_26_072357_create_carts_table', 2),
(67, '2023_07_07_142109_add_socialite_auth', 2);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `scopes` text DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `secret` varchar(100) DEFAULT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `redirect` text NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) NOT NULL,
  `access_token_id` varchar(100) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(6, 'App\\Models\\User', 3, 'MyApp', '696786a36faf8b15ade143b6b744c2d5435edf5f6ffc1329081e4bc6c7e84590', '[\"*\"]', NULL, NULL, '2023-07-30 13:16:27', '2023-07-30 13:16:27'),
(18, 'App\\Models\\User', 11, 'MyApp', '5c2932da3dbc2423d8171c2915d8ec8cf9c38a543f0e7f502589becaa4ec4477', '[\"*\"]', NULL, NULL, '2023-08-11 16:44:56', '2023-08-11 16:44:56');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `name` text NOT NULL,
  `imageUrl` text NOT NULL,
  `imageFile` text NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `rating` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `name`, `imageUrl`, `imageFile`, `price`, `rating`, `created_at`, `updated_at`) VALUES
(1, 'Ms.', 'Nichole Rath', 'https://via.placeholder.com/640x480.png/0066ff?text=deleniti', '', '144.70', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(2, 'Mr.', 'Jayson Orn', 'https://via.placeholder.com/640x480.png/00ee99?text=quisquam', '', '338.70', 1, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(3, 'Dr.', 'Hester Kerluke Jr.', 'https://via.placeholder.com/640x480.png/00ff66?text=voluptatem', '', '153.70', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(4, 'Mrs.', 'Mr. Edgardo Cremin', 'https://via.placeholder.com/640x480.png/005555?text=adipisci', '', '447.50', 5, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(5, 'Dr.', 'Dr. Alanna Farrell I', 'https://via.placeholder.com/640x480.png/008888?text=repellat', '', '274.50', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(6, 'Prof.', 'Prof. Okey Bruen PhD', 'https://via.placeholder.com/640x480.png/00dd33?text=quam', '', '371.80', 1, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(16, 'Miss', 'Ms. Theodora Runolfsson Sr.', 'https://via.placeholder.com/640x480.png/00bb00?text=aliquid', '', '453.50', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(17, 'Mrs.', 'Elroy Lang', 'https://via.placeholder.com/640x480.png/00bbdd?text=quae', '', '270.20', 5, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(18, 'Prof.', 'Prof. Joseph Rempel', 'https://via.placeholder.com/640x480.png/006655?text=id', '', '407.70', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(19, 'Dr.', 'Berry Hodkiewicz', 'https://via.placeholder.com/640x480.png/0022ff?text=ex', '', '297.40', 1, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(20, 'Dr.', 'Ally Schneider', 'https://via.placeholder.com/640x480.png/00dd00?text=impedit', '', '13.20', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(21, 'Prof.', 'Danny Steuber Sr.', 'https://via.placeholder.com/640x480.png/008822?text=dolore', '', '75.10', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(22, 'Mr.', 'Tommie Reichel', 'https://via.placeholder.com/640x480.png/008822?text=omnis', '', '264.00', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(23, 'Prof.', 'Davin Cole', 'https://via.placeholder.com/640x480.png/0044aa?text=eius', '', '287.70', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(24, 'Prof.', 'Joany Brown', 'https://via.placeholder.com/640x480.png/0000aa?text=veritatis', '', '144.80', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(25, 'Mr.', 'Kristina Hoppe', 'https://via.placeholder.com/640x480.png/00cc66?text=velit', '', '175.40', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(26, 'Prof.', 'Ms. Alisha Connelly IV', 'https://via.placeholder.com/640x480.png/00cc00?text=iste', '', '425.40', 1, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(27, 'Prof.', 'Dr. Deondre Wolf DDS', 'https://via.placeholder.com/640x480.png/00bb22?text=expedita', '', '115.90', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(28, 'Dr.', 'Paul Rempel', 'https://via.placeholder.com/640x480.png/00dd77?text=est', '', '467.60', 1, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(30, 'Dr.', 'Meda Graham', 'https://via.placeholder.com/640x480.png/007755?text=eum', '', '412.30', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(31, 'Prof.', 'Dr. Korbin Leannon', 'https://via.placeholder.com/640x480.png/0055bb?text=incidunt', '', '286.30', 1, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(32, 'Dr.', 'Marshall Kilback', 'https://via.placeholder.com/640x480.png/00ee99?text=ut', '', '238.40', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(33, 'Dr.', 'Bradly Parisian III', 'https://via.placeholder.com/640x480.png/00bbff?text=eum', '', '346.60', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(34, 'Mr.', 'Justine Legros', 'https://via.placeholder.com/640x480.png/00dd99?text=error', '', '373.20', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(35, 'Mrs.', 'Vena Kohler', 'https://via.placeholder.com/640x480.png/004477?text=et', '', '110.60', 1, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(36, 'Dr.', 'Justine Ward', 'https://via.placeholder.com/640x480.png/008877?text=explicabo', '', '414.90', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(37, 'Prof.', 'Margarett Wolf', 'https://via.placeholder.com/640x480.png/004488?text=aut', '', '351.10', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(38, 'Prof.', 'Isadore Leffler', 'https://via.placeholder.com/640x480.png/003399?text=omnis', '', '54.90', 5, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(39, 'Ms.', 'Jordyn Watsica II', 'https://via.placeholder.com/640x480.png/007700?text=omnis', '', '91.10', 5, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(40, 'Dr.', 'Axel O\'Conner', 'https://via.placeholder.com/640x480.png/008866?text=cum', '', '150.20', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(41, 'Ms.', 'Prof. Tristin Jacobson II', 'https://via.placeholder.com/640x480.png/0088aa?text=soluta', '', '273.70', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(42, 'Prof.', 'Mr. Mervin Zboncak DVM', 'https://via.placeholder.com/640x480.png/005522?text=aperiam', '', '49.00', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(43, 'Dr.', 'Darby O\'Keefe', 'https://via.placeholder.com/640x480.png/00bb99?text=odit', '', '147.70', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(44, 'Mr.', 'Freddy Morar', 'https://via.placeholder.com/640x480.png/00ff66?text=id', '', '299.90', 1, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(45, 'Miss', 'German Lang', 'https://via.placeholder.com/640x480.png/00ee44?text=est', '', '110.10', 5, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(46, 'Dr.', 'Steve Leuschke', 'https://via.placeholder.com/640x480.png/00eebb?text=velit', '', '401.80', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(47, 'Mr.', 'Dr. Kay Strosin', 'https://via.placeholder.com/640x480.png/005533?text=illum', '', '475.30', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(48, 'Mrs.', 'Prof. Jacinthe Marquardt II', 'https://via.placeholder.com/640x480.png/00bbff?text=cupiditate', '', '63.50', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(49, 'Mr.', 'Nigel Schaden PhD', 'https://via.placeholder.com/640x480.png/0044cc?text=dolorem', '', '367.70', 1, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(50, 'Prof.', 'Davin Bashirian', 'https://via.placeholder.com/640x480.png/005577?text=et', '', '50.50', 1, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(51, 'Prof.', 'Santos Hammes IV', 'https://via.placeholder.com/640x480.png/006666?text=aspernatur', '', '143.70', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(52, 'Dr.', 'Mr. Maximo Hoeger', 'https://via.placeholder.com/640x480.png/004477?text=nesciunt', '', '315.50', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(53, 'Prof.', 'Doyle Bernhard IV', 'https://via.placeholder.com/640x480.png/002211?text=ut', '', '180.50', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(54, 'Dr.', 'Otto Trantow', 'https://via.placeholder.com/640x480.png/00cc00?text=officia', '', '317.90', 5, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(55, 'Mrs.', 'Landen Rutherford', 'https://via.placeholder.com/640x480.png/00aa00?text=quis', '', '323.00', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(56, 'Dr.', 'Ms. Vergie Upton V', 'https://via.placeholder.com/640x480.png/00ffee?text=vel', '', '151.00', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(57, 'Mr.', 'Amir Beatty', 'https://via.placeholder.com/640x480.png/00ddee?text=sunt', '', '321.30', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(58, 'Dr.', 'Olen Abbott', 'https://via.placeholder.com/640x480.png/0088aa?text=voluptatibus', '', '274.70', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(59, 'Mrs.', 'Nestor Runolfsdottir', 'https://via.placeholder.com/640x480.png/0033cc?text=vero', '', '39.90', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(60, 'Mrs.', 'Prof. Rex Keebler', 'https://via.placeholder.com/640x480.png/005566?text=totam', '', '18.40', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(61, 'Mr.', 'Graham Rippin', 'https://via.placeholder.com/640x480.png/00cc33?text=optio', '', '172.40', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(62, 'Prof.', 'Mr. Kenny Haag Jr.', 'https://via.placeholder.com/640x480.png/00ddee?text=qui', '', '10.00', 5, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(63, 'Prof.', 'Elza Kreiger', 'https://via.placeholder.com/640x480.png/0099dd?text=dolore', '', '120.00', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(64, 'Miss', 'Jamison Hoeger', 'https://via.placeholder.com/640x480.png/0088cc?text=impedit', '', '394.20', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(65, 'Dr.', 'Tara Rolfson', 'https://via.placeholder.com/640x480.png/006699?text=autem', '', '239.40', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(66, 'Dr.', 'Roberta Heidenreich', 'https://via.placeholder.com/640x480.png/00ffaa?text=consequatur', '', '307.40', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(67, 'Dr.', 'Mara Schowalter', 'https://via.placeholder.com/640x480.png/0000ee?text=voluptatem', '', '393.30', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(68, 'Prof.', 'Una Feest DVM', 'https://via.placeholder.com/640x480.png/0000ee?text=deserunt', '', '305.90', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(69, 'Prof.', 'Prof. Reece McCullough', 'https://via.placeholder.com/640x480.png/007711?text=quod', '', '320.80', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(70, 'Miss', 'Jaime Langworth', 'https://via.placeholder.com/640x480.png/0033bb?text=aut', '', '385.00', 5, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(71, 'Prof.', 'Prof. Korbin West', 'https://via.placeholder.com/640x480.png/0077aa?text=sit', '', '367.60', 1, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(72, 'Mrs.', 'Zander Zulauf', 'https://via.placeholder.com/640x480.png/00aacc?text=ducimus', '', '363.30', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(73, 'Mrs.', 'Melody Buckridge', 'https://via.placeholder.com/640x480.png/004422?text=atque', '', '36.90', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(74, 'Mrs.', 'Dr. Makayla Thompson', 'https://via.placeholder.com/640x480.png/00ff00?text=rem', '', '139.20', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(75, 'Ms.', 'Dr. Weston Beahan', 'https://via.placeholder.com/640x480.png/007744?text=vero', '', '227.40', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(76, 'Mr.', 'Zora Osinski', 'https://via.placeholder.com/640x480.png/0044aa?text=fugiat', '', '90.00', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(77, 'Mr.', 'Alexzander Hyatt', 'https://via.placeholder.com/640x480.png/0099dd?text=amet', '', '38.70', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(78, 'Miss', 'June Gibson', 'https://via.placeholder.com/640x480.png/0066dd?text=ipsam', '', '196.70', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(79, 'Dr.', 'Alexandria Shanahan DVM', 'https://via.placeholder.com/640x480.png/00cc88?text=commodi', '', '303.00', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(80, 'Dr.', 'Mr. Lorenz Doyle V', 'https://via.placeholder.com/640x480.png/006633?text=iste', '', '261.20', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(81, 'Mrs.', 'Burnice Conn', 'https://via.placeholder.com/640x480.png/002211?text=qui', '', '411.80', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(82, 'Mr.', 'Bella Grimes IV', 'https://via.placeholder.com/640x480.png/0044dd?text=et', '', '354.80', 5, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(83, 'Mr.', 'Josefina Murray', 'https://via.placeholder.com/640x480.png/00cc66?text=eius', '', '315.70', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(84, 'Mr.', 'Cecil Bahringer PhD', 'https://via.placeholder.com/640x480.png/00ffbb?text=accusamus', '', '438.30', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(85, 'Prof.', 'Andreane Roberts', 'https://via.placeholder.com/640x480.png/006677?text=quaerat', '', '322.60', 5, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(86, 'Mrs.', 'Camille Ernser', 'https://via.placeholder.com/640x480.png/00ffaa?text=dolorem', '', '64.10', 1, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(87, 'Mrs.', 'Prof. Kallie Stracke', 'https://via.placeholder.com/640x480.png/009966?text=veniam', '', '297.50', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(88, 'Prof.', 'Adan O\'Connell', 'https://via.placeholder.com/640x480.png/008899?text=est', '', '201.60', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(89, 'Miss', 'Nayeli Larson', 'https://via.placeholder.com/640x480.png/00aa00?text=est', '', '38.70', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(90, 'Miss', 'Prof. Agustin Maggio', 'https://via.placeholder.com/640x480.png/006633?text=qui', '', '173.70', 5, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(91, 'Miss', 'Prof. D\'angelo Grimes MD', 'https://via.placeholder.com/640x480.png/007733?text=occaecati', '', '491.20', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(92, 'Dr.', 'Shana McDermott', 'https://via.placeholder.com/640x480.png/007788?text=veniam', '', '123.40', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(93, 'Mrs.', 'Jerad Gibson', 'https://via.placeholder.com/640x480.png/00ff55?text=id', '', '285.40', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(94, 'Ms.', 'Grayce Dach Jr.', 'https://via.placeholder.com/640x480.png/0011dd?text=impedit', '', '6.20', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(95, 'Miss', 'Alf Yost', 'https://via.placeholder.com/640x480.png/003333?text=reiciendis', '', '480.30', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(96, 'Dr.', 'Mavis Eichmann', 'https://via.placeholder.com/640x480.png/00aa77?text=et', '', '262.70', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(97, 'Ms.', 'Zita Rutherford', 'https://via.placeholder.com/640x480.png/000077?text=illo', '', '168.20', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(98, 'Ms.', 'Carrie Thompson', 'https://via.placeholder.com/640x480.png/00cccc?text=occaecati', '', '278.80', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(99, 'Mr.', 'Laurianne Homenick', 'https://via.placeholder.com/640x480.png/0088bb?text=aut', '', '238.70', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(100, 'Prof.', 'Jordon Kuhn', 'https://via.placeholder.com/640x480.png/00dd55?text=voluptatibus', '', '444.30', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(101, 'Mrs.', 'Cristopher Ziemann', 'https://via.placeholder.com/640x480.png/0022aa?text=et', '', '268.80', 5, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(102, 'Dr.', 'Sasha Reynolds', 'https://via.placeholder.com/640x480.png/003344?text=id', '', '278.40', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(103, 'Prof.', 'Jaylin Roob', 'https://via.placeholder.com/640x480.png/0077dd?text=repellat', '', '253.30', 5, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(104, 'Mr.', 'Jedidiah Wyman', 'https://via.placeholder.com/640x480.png/00bbdd?text=sed', '', '15.20', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(105, 'Ms.', 'Verona Dibbert', 'https://via.placeholder.com/640x480.png/00aa66?text=iure', '', '11.80', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(106, 'Prof.', 'Berniece Gottlieb', 'https://via.placeholder.com/640x480.png/0088bb?text=autem', '', '225.70', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(107, 'Miss', 'Emely Dach', 'https://via.placeholder.com/640x480.png/00aa33?text=sed', '', '137.50', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(108, 'Prof.', 'Mauricio Abernathy', 'https://via.placeholder.com/640x480.png/009911?text=accusantium', '', '36.10', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(109, 'Mr.', 'Myriam Lemke', 'https://via.placeholder.com/640x480.png/001199?text=ratione', '', '25.50', 5, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(110, 'Prof.', 'Rupert Reilly', 'https://via.placeholder.com/640x480.png/0022bb?text=porro', '', '315.10', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(111, 'Ms.', 'Carmel Murazik', 'https://via.placeholder.com/640x480.png/00aa11?text=amet', '', '112.60', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(112, 'Mr.', 'Prof. Yasmin Raynor', 'https://via.placeholder.com/640x480.png/00bb55?text=maiores', '', '69.70', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(113, 'Ms.', 'Letitia Bartoletti', 'https://via.placeholder.com/640x480.png/00cc88?text=consectetur', '', '375.30', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(114, 'Dr.', 'Jaydon Dietrich', 'https://via.placeholder.com/640x480.png/00bb11?text=perspiciatis', '', '346.00', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(115, 'Mrs.', 'Jeramie Wehner', 'https://via.placeholder.com/640x480.png/007722?text=numquam', '', '455.30', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(116, 'Mr.', 'Mr. Hazel Pfeffer Jr.', 'https://via.placeholder.com/640x480.png/0088ee?text=deserunt', '', '69.00', 5, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(117, 'Mrs.', 'Miss Nella Luettgen', 'https://via.placeholder.com/640x480.png/006644?text=magni', '', '349.00', 1, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(118, 'Dr.', 'Laverne Abbott', 'https://via.placeholder.com/640x480.png/00ffdd?text=consequatur', '', '60.00', 5, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(119, 'Prof.', 'Ms. Valentine Blanda', 'https://via.placeholder.com/640x480.png/000088?text=aut', '', '489.90', 5, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(120, 'Mr.', 'Mittie Kertzmann III', 'https://via.placeholder.com/640x480.png/00aa33?text=est', '', '495.20', 1, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(121, 'Miss', 'Lysanne Stroman DVM', 'https://via.placeholder.com/640x480.png/00ffbb?text=et', '', '308.20', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(122, 'Miss', 'Mylene Funk', 'https://via.placeholder.com/640x480.png/008800?text=id', '', '281.60', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(123, 'Dr.', 'Edison Barrows', 'https://via.placeholder.com/640x480.png/002244?text=animi', '', '259.30', 5, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(124, 'Miss', 'Louvenia Satterfield', 'https://via.placeholder.com/640x480.png/005577?text=deserunt', '', '322.20', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(125, 'Mr.', 'Dr. Aleen Lebsack V', 'https://via.placeholder.com/640x480.png/0066aa?text=autem', '', '381.70', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(126, 'Miss', 'Prof. Birdie Kling PhD', 'https://via.placeholder.com/640x480.png/00ee88?text=mollitia', '', '302.70', 1, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(127, 'Dr.', 'Dovie Crooks Sr.', 'https://via.placeholder.com/640x480.png/0011dd?text=iusto', '', '119.30', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(128, 'Miss', 'Kristina Yundt', 'https://via.placeholder.com/640x480.png/004433?text=enim', '', '109.40', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(129, 'Prof.', 'Barry Graham', 'https://via.placeholder.com/640x480.png/00cc66?text=officia', '', '55.30', 1, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(130, 'Dr.', 'Prof. Dulce Rippin', 'https://via.placeholder.com/640x480.png/00eecc?text=eum', '', '486.40', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(131, 'Dr.', 'Cathrine Beier', 'https://via.placeholder.com/640x480.png/00bb55?text=aut', '', '79.80', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(132, 'Mrs.', 'Dr. Trevor Hagenes V', 'https://via.placeholder.com/640x480.png/00dddd?text=fugit', '', '73.30', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(133, 'Dr.', 'Delta Gottlieb', 'https://via.placeholder.com/640x480.png/00ee66?text=distinctio', '', '390.40', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(134, 'Dr.', 'Mrs. Halie Rolfson DVM', 'https://via.placeholder.com/640x480.png/00dddd?text=sunt', '', '131.30', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(135, 'Prof.', 'Dr. Karl Gutmann I', 'https://via.placeholder.com/640x480.png/00cc44?text=aut', '', '393.40', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(136, 'Dr.', 'Prof. Bartholome Hodkiewicz', 'https://via.placeholder.com/640x480.png/00eecc?text=ut', '', '95.70', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(137, 'Mr.', 'Mr. Francesco White II', 'https://via.placeholder.com/640x480.png/006655?text=quia', '', '254.60', 1, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(138, 'Mr.', 'Prof. Nicklaus Aufderhar', 'https://via.placeholder.com/640x480.png/0033aa?text=omnis', '', '134.90', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(139, 'Prof.', 'Ida Shields', 'https://via.placeholder.com/640x480.png/001100?text=mollitia', '', '338.10', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(140, 'Prof.', 'Willard Kilback', 'https://via.placeholder.com/640x480.png/00aa00?text=est', '', '333.20', 1, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(141, 'Dr.', 'Eula Doyle', 'https://via.placeholder.com/640x480.png/0099bb?text=neque', '', '316.20', 5, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(142, 'Mr.', 'Jacky Miller', 'https://via.placeholder.com/640x480.png/0022aa?text=similique', '', '121.80', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(143, 'Mrs.', 'Laisha Sawayn', 'https://via.placeholder.com/640x480.png/005533?text=sint', '', '200.10', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(144, 'Miss', 'Prof. Jarod Rolfson V', 'https://via.placeholder.com/640x480.png/003300?text=omnis', '', '65.20', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(145, 'Ms.', 'Fatima Collier III', 'https://via.placeholder.com/640x480.png/006611?text=omnis', '', '240.90', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(146, 'Miss', 'Nichole Ryan', 'https://via.placeholder.com/640x480.png/0033dd?text=est', '', '159.70', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(147, 'Mr.', 'Axel Dare', 'https://via.placeholder.com/640x480.png/002211?text=sed', '', '440.70', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(148, 'Dr.', 'Ms. Pink Cronin Jr.', 'https://via.placeholder.com/640x480.png/00ddcc?text=maxime', '', '274.70', 1, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(149, 'Mrs.', 'Sherman Luettgen', 'https://via.placeholder.com/640x480.png/0077aa?text=suscipit', '', '88.50', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(150, 'Prof.', 'Margot Mitchell', 'https://via.placeholder.com/640x480.png/002222?text=dolorem', '', '300.30', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(151, 'Mr.', 'Tate Lebsack', 'https://via.placeholder.com/640x480.png/00cc77?text=repellat', '', '420.70', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(152, 'Miss', 'Efren Koch', 'https://via.placeholder.com/640x480.png/00ddcc?text=facere', '', '414.10', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(153, 'Dr.', 'Roberta Schuster', 'https://via.placeholder.com/640x480.png/005533?text=esse', '', '340.30', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(154, 'Mr.', 'Moriah Oberbrunner', 'https://via.placeholder.com/640x480.png/00aa55?text=tenetur', '', '55.20', 5, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(155, 'Dr.', 'Dorthy McClure', 'https://via.placeholder.com/640x480.png/005522?text=sed', '', '499.10', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(156, 'Miss', 'Colt Rolfson', 'https://via.placeholder.com/640x480.png/00cc44?text=animi', '', '383.50', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(157, 'Mr.', 'Eleazar Upton', 'https://via.placeholder.com/640x480.png/008855?text=corrupti', '', '116.30', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(158, 'Prof.', 'Neal Senger', 'https://via.placeholder.com/640x480.png/00ee22?text=non', '', '390.80', 1, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(159, 'Mr.', 'Makenzie Deckow', 'https://via.placeholder.com/640x480.png/000099?text=in', '', '86.80', 5, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(160, 'Mrs.', 'Lucienne Schiller', 'https://via.placeholder.com/640x480.png/004488?text=recusandae', '', '450.60', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(161, 'Prof.', 'Orville Raynor II', 'https://via.placeholder.com/640x480.png/00bb11?text=nostrum', '', '315.90', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(162, 'Dr.', 'Prof. Curtis Kshlerin DDS', 'https://via.placeholder.com/640x480.png/005577?text=et', '', '332.80', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(163, 'Mr.', 'Clark Bechtelar IV', 'https://via.placeholder.com/640x480.png/000099?text=pariatur', '', '290.60', 5, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(164, 'Dr.', 'Orlando Schiller', 'https://via.placeholder.com/640x480.png/0066dd?text=repellat', '', '202.60', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(165, 'Mrs.', 'Virginia Roob', 'https://via.placeholder.com/640x480.png/0077bb?text=fugiat', '', '357.30', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(166, 'Mr.', 'Dr. Hilda Dach', 'https://via.placeholder.com/640x480.png/0000ff?text=sint', '', '48.30', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(167, 'Miss', 'Arianna Abbott', 'https://via.placeholder.com/640x480.png/00cc00?text=eaque', '', '405.50', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(168, 'Ms.', 'Wilma Considine', 'https://via.placeholder.com/640x480.png/0000ff?text=nostrum', '', '463.60', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(169, 'Ms.', 'Carol Bergnaum', 'https://via.placeholder.com/640x480.png/009911?text=deleniti', '', '236.10', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(170, 'Miss', 'Prof. Robert Effertz', 'https://via.placeholder.com/640x480.png/003388?text=sunt', '', '60.50', 5, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(171, 'Prof.', 'Prof. Kassandra Stamm DDS', 'https://via.placeholder.com/640x480.png/00ccaa?text=ducimus', '', '86.70', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(172, 'Prof.', 'Lloyd Schinner', 'https://via.placeholder.com/640x480.png/00bb55?text=debitis', '', '83.60', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(173, 'Mrs.', 'Damaris Simonis', 'https://via.placeholder.com/640x480.png/007799?text=eum', '', '337.90', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(174, 'Miss', 'Linda Borer', 'https://via.placeholder.com/640x480.png/00cc66?text=nam', '', '211.20', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(175, 'Dr.', 'Prof. Claud Vandervort', 'https://via.placeholder.com/640x480.png/00aacc?text=earum', '', '220.00', 1, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(176, 'Ms.', 'Jaqueline White', 'https://via.placeholder.com/640x480.png/00dddd?text=consectetur', '', '4.70', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(177, 'Miss', 'Mr. Cristian Lynch III', 'https://via.placeholder.com/640x480.png/00bb66?text=velit', '', '168.80', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(178, 'Prof.', 'Taurean Shields', 'https://via.placeholder.com/640x480.png/00aa55?text=autem', '', '298.50', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(179, 'Mr.', 'Omari Ryan II', 'https://via.placeholder.com/640x480.png/00cc00?text=aut', '', '10.30', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(180, 'Dr.', 'Mr. Ewald Ebert', 'https://via.placeholder.com/640x480.png/00ff00?text=earum', '', '217.60', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(181, 'Ms.', 'Yasmine Hegmann', 'https://via.placeholder.com/640x480.png/005500?text=consequuntur', '', '455.30', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(182, 'Mr.', 'Geo Hickle I', 'https://via.placeholder.com/640x480.png/00ccdd?text=amet', '', '130.80', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(183, 'Prof.', 'Dr. Johathan Ebert', 'https://via.placeholder.com/640x480.png/00cc99?text=dolore', '', '228.30', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(184, 'Mrs.', 'Adah Willms', 'https://via.placeholder.com/640x480.png/0077ff?text=ex', '', '10.30', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(185, 'Prof.', 'Carolanne Keeling', 'https://via.placeholder.com/640x480.png/002288?text=possimus', '', '336.70', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(186, 'Dr.', 'Harold Jones', 'https://via.placeholder.com/640x480.png/00dd77?text=eum', '', '190.90', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(187, 'Dr.', 'Dawson Turcotte', 'https://via.placeholder.com/640x480.png/00aa22?text=ullam', '', '181.20', 1, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(188, 'Mrs.', 'Noemy Ryan V', 'https://via.placeholder.com/640x480.png/0000cc?text=et', '', '55.50', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(189, 'Mrs.', 'Jeffery Reichert PhD', 'https://via.placeholder.com/640x480.png/00bb77?text=ducimus', '', '434.50', 5, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(190, 'Mrs.', 'Lilian Hettinger', 'https://via.placeholder.com/640x480.png/00eebb?text=officiis', '', '150.40', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(191, 'Miss', 'Troy Swaniawski', 'https://via.placeholder.com/640x480.png/002211?text=consequatur', '', '45.20', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(192, 'Prof.', 'Prof. Karl Botsford', 'https://via.placeholder.com/640x480.png/00bb11?text=consequuntur', '', '448.70', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(193, 'Prof.', 'Dr. Grover Dare', 'https://via.placeholder.com/640x480.png/009966?text=et', '', '435.50', 1, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(194, 'Dr.', 'Annabell Hettinger', 'https://via.placeholder.com/640x480.png/00ee33?text=sunt', '', '177.00', 4, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(195, 'Prof.', 'Tyreek Mayert', 'https://via.placeholder.com/640x480.png/0033cc?text=ad', '', '68.90', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(196, 'Dr.', 'Mrs. Loma Boehm', 'https://via.placeholder.com/640x480.png/00dd99?text=eum', '', '441.10', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(197, 'Mrs.', 'Kathryne Hintz', 'https://via.placeholder.com/640x480.png/00dd44?text=facilis', '', '283.70', 2, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(198, 'Dr.', 'Dr. Cornell Farrell I', 'https://via.placeholder.com/640x480.png/00cc99?text=blanditiis', '', '451.50', 5, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(199, 'Prof.', 'Laurie Schuster', 'https://via.placeholder.com/640x480.png/00ee11?text=eligendi', '', '53.40', 3, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(200, 'Prof.', 'Loyal Kunde', 'https://via.placeholder.com/640x480.png/006677?text=enim', '', '188.80', 5, '2023-07-12 20:53:47', '2023-07-12 20:53:47'),
(201, 'Hello', 'Saif Mohammed', '', 'http://localhost:8000/storage/images/products/1689444467_273572265_279560510913987_3528296262860780215_n.jpg', '12.00', 3, '2023-07-15 15:07:48', '2023-07-15 15:07:48'),
(202, 'Jbhjbj', 'Saif Mohammed', '', 'http://localhost:8000/storage/images/products/1689444767_273572265_279560510913987_3528296262860780215_n.jpg', '12112.00', 1, '2023-07-15 15:12:48', '2023-07-15 15:12:48'),
(203, 'Cats', 'Saif Mohammed', 'https://via.placeholder.com/300.png', '', '4.00', 3, '2023-07-31 14:53:48', '2023-07-31 14:53:48'),
(204, 'Jjj', 'Saif Mohammed', 'https://via.placeholder.com/300.png', '', '2.00', 1, '2023-07-31 15:01:25', '2023-07-31 15:01:25'),
(205, 'Has', 'Saif Mohammed', 'https://via.placeholder.com/300.png', '', '1.00', 2, '2023-07-31 15:05:09', '2023-07-31 15:05:09');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT 0,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `social_id` varchar(255) DEFAULT NULL,
  `social_type` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `admin`, `remember_token`, `created_at`, `updated_at`, `social_id`, `social_type`) VALUES
(11, 'Saif Mohammed', 'adss.sad198@gma00il.com', NULL, '$2y$10$XMRwql9kwGzr2cRyfq999.qnLW4jSB.T.EsUfRWsgQclTxdEYOwL2', 1, NULL, '2023-07-31 22:04:58', '2023-08-08 11:36:30', NULL, NULL),
(13, 'Saif Mohammed', 'adss.sad19555558@gmail.com', NULL, '$2y$10$nXEwDFcEe4zWBOirwzJJLuc1pNMgg7Ss9icjLC1tqd/OZQMV61yFu', 0, NULL, '2023-08-01 15:02:24', '2023-08-01 20:25:17', NULL, NULL),
(14, 'Saif Mohammed', 'adss.sad1944448@gmail.com', NULL, '$2y$10$MQ8T1ueKslyo8T.9EhE8.OhpTl/fLepOUzl4vIhNgpPnIduAjm4Ca', 1, NULL, '2023-08-01 15:05:50', '2023-08-01 15:13:29', NULL, NULL),
(15, 'Saif Mohammed', 'adss.sassd198@gmail.com', NULL, '$2y$10$LzLz.mUUjZZTzZ1PtzPoZOg4SuaqM1ztN2lJeMTlhKRg3eiXr5XN2', 1, NULL, '2023-08-01 15:08:38', '2023-08-01 15:17:49', NULL, NULL),
(16, 'Saif Mohammed', 'adss.sad19ssss8@gmail.com', NULL, '$2y$10$mGLfykde90P4JAbF1Wh1VuFvcxhNOdUfVymgTOqhRce82DpNyrcw2', 0, NULL, '2023-08-01 16:10:02', '2023-08-01 16:10:02', NULL, NULL),
(17, 'Saif Mohammed', 'adss.sad19sss8@gmail.com', NULL, '$2y$10$W2.8KG4pWi5PmIiyvBA1HOgkh9OYZp0QvYT5GzYf8f4.wgFWRwFT6', 0, NULL, '2023-08-01 16:10:42', '2023-08-01 16:10:42', NULL, NULL),
(18, 'Saif Mohammed', 'adss.sad198xxx@gmail.com', NULL, '$2y$10$Ksv8W3f2QujXACgtm4kEOe0itsUa/Vn6Ie4VKzrNQCnpzzWoYDz96', 1, NULL, '2023-08-01 16:15:31', '2023-08-01 16:49:34', NULL, NULL),
(19, 'Saif Mohammed', 'adss.sad198xxxxxx@gmail.com', NULL, '$2y$10$i7r34aWsaDER5Ujbb7Sle.R0BT2X8NhtUDtK4P5diq.8oRZXQYPFu', 1, NULL, '2023-08-01 16:18:18', '2023-08-01 16:18:18', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `carts_user_id_foreign` (`user_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `main_pages`
--
ALTER TABLE `main_pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `main_pages`
--
ALTER TABLE `main_pages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=206;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
