-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Gép: localhost:3306
-- Létrehozás ideje: 2026. Aug 21. 11:11
-- Kiszolgáló verziója: 5.7.24
-- PHP verzió: 8.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `studioinsense`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `project`
--

CREATE TABLE `project` (
  `id` int(11) NOT NULL,
  `title_hu` varchar(100) NOT NULL,
  `description_hu` longtext NOT NULL,
  `title_eng` varchar(100) NOT NULL,
  `description_eng` longtext NOT NULL,
  `card_title_hu` varchar(100) NOT NULL,
  `card_title_eng` varchar(100) NOT NULL,
  `card_img` longtext NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  `deleted_at` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- A tábla adatainak kiíratása `project`
--

INSERT INTO `project` (`id`, `title_hu`, `description_hu`, `title_eng`, `description_eng`, `card_title_hu`, `card_title_eng`, `card_img`, `created_at`, `is_deleted`, `deleted_at`) VALUES
(1, 'Cellect Hungary, Budapest', 'Számítástechnikai és elektronikai termékeket forgalmazó nagykereskedelmi vállalat számára készített iroda bővítés.\r\nA csapat működése és munkametódusa alapján kialakított koncepció határozta meg azt a laza közösségi teret, amely összeköti az átriumot és az üveg vezetőségi irodát, melyet szintén a kötetlen, otthonos, felszabadult munkavégzés jellemez.', 'Projekt1Eng', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto possimus error eum cum minus harum consequuntur quasi, nemo labore tenetur itaque at laboriosam aut vitae, voluptatum ullam recusandae magnam.', 'Cellect Hungary, Budapest', 'Cellect Hungary, Budapest', '', '2026-06-20 08:03:04', 0, NULL),
(2, 'MyClinic | Pécs | 2019', 'A projekt célja egy pécsi belvárosi társasház átalakítása volt korszerű, karakteres magánklinikává, amely vizuálisan és működésében is kiemelkedik a megszokott egészségügyi terek világából. A designstratégiát az üzleti terv irányai alapozták meg, fókuszált célcsoport és felismerhető márkajelenlét kialakításával.\r\nA lágy formák és a kellemes színpaletta oldják a vizsgálatokkal kapcsolatos félelmeket, míg a terek a páciensek számára nyugodt, befogadó környezetet teremtenek.\r\nA dolgozók számára ugyancsak fontos volt egy támogatott, kényelmes munkakörnyezet kialakítása. A gondosan szervezett terek, a beépített elemek és a korszerű technikai háttér a modern orvostechnológiai igényekhez igazodnak, így a mindennapi működés hatékony és kiszámítható.\r\nA projekt a Blushflow formációban készült.', 'MyClinic | Pécs | 2019', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto possimus error eum cum minus harum consequuntur quasi, nemo labore tenetur itaque at laboriosam aut vitae, voluptatum ullam recusandae magnam.', 'MyClinic | Pécs | 2019', 'MyClinic | Pécs | 2019', '', '2026-06-20 08:04:24', 0, NULL),
(3, 'Dunaharaszti 1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto possimus error eum cum minus harum consequuntur quasi, nemo labore tenetur itaque at laboriosam aut vitae, voluptatum ullam recusandae magnam.', 'Projekt3Eng', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto possimus error eum cum minus harum consequuntur quasi, nemo labore tenetur itaque at laboriosam aut vitae, voluptatum ullam recusandae magnam.', 'Projekt3Hun', 'Projekt3Eng', '', '2026-06-20 08:04:24', 0, NULL),
(4, 'Dunaharaszti 2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto possimus error eum cum minus harum consequuntur quasi, nemo labore tenetur itaque at laboriosam aut vitae, voluptatum ullam recusandae magnam.', 'Projekt4Eng', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto possimus error eum cum minus harum consequuntur quasi, nemo labore tenetur itaque at laboriosam aut vitae, voluptatum ullam recusandae magnam.', 'Projekt4Hun', 'Projekt4Eng', '', '2026-06-20 08:04:24', 0, NULL),
(5, 'Eötvös Projekt', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto possimus error eum cum minus harum consequuntur quasi, nemo labore tenetur itaque at laboriosam aut vitae, voluptatum ullam recusandae magnam.', 'Projekt5Eng', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto possimus error eum cum minus harum consequuntur quasi, nemo labore tenetur itaque at laboriosam aut vitae, voluptatum ullam recusandae magnam.', 'Projekt5Hun', 'Projekt5Eng', '', '2026-06-20 08:04:24', 0, NULL),
(6, 'Hegyvidéki villa', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto possimus error eum cum minus harum consequuntur quasi, nemo labore tenetur itaque at laboriosam aut vitae, voluptatum ullam recusandae magnam.', 'Projekt6Eng', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto possimus error eum cum minus harum consequuntur quasi, nemo labore tenetur itaque at laboriosam aut vitae, voluptatum ullam recusandae magnam.', 'Projekt6Hun', 'Projekt6Eng', '', '2026-06-20 08:04:24', 0, NULL),
(7, 'Kultik', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto possimus error eum cum minus harum consequuntur quasi, nemo labore tenetur itaque at laboriosam aut vitae, voluptatum ullam recusandae magnam.', 'Projekt7Eng', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto possimus error eum cum minus harum consequuntur quasi, nemo labore tenetur itaque at laboriosam aut vitae, voluptatum ullam recusandae magnam.', 'Projekt7Hun', 'Projekt7Eng', '', '2026-06-20 08:04:24', 0, NULL),
(8, 'Kázmár lejtő', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto possimus error eum cum minus harum consequuntur quasi, nemo labore tenetur itaque at laboriosam aut vitae, voluptatum ullam recusandae magnam.', 'Projekt8Eng', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto possimus error eum cum minus harum consequuntur quasi, nemo labore tenetur itaque at laboriosam aut vitae, voluptatum ullam recusandae magnam.', 'Projekt8Hun', 'Projekt8Eng', '', '2026-06-20 08:04:24', 0, NULL),
(9, 'MyClinic2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto possimus error eum cum minus harum consequuntur quasi, nemo labore tenetur itaque at laboriosam aut vitae, voluptatum ullam recusandae magnam.', 'Projekt9Eng', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto possimus error eum cum minus harum consequuntur quasi, nemo labore tenetur itaque at laboriosam aut vitae, voluptatum ullam recusandae magnam.', 'Projekt9Hun', 'Projekt9Eng', '', '2026-06-20 08:04:24', 0, NULL);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `project_image`
--

CREATE TABLE `project_image` (
  `id` int(11) NOT NULL,
  `image_path` longtext NOT NULL,
  `placement` int(11) NOT NULL,
  `alt_text` varchar(1000) NOT NULL,
  `project_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- A tábla adatainak kiíratása `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'ROLE_user'),
(2, 'ROLE_admin');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` longtext NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `last_login` datetime DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  `deleted_at` datetime DEFAULT NULL,
  `role_id` int(11) NOT NULL DEFAULT '2'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `created_at`, `last_login`, `is_deleted`, `deleted_at`, `role_id`) VALUES
(1, 'sulisdolgok8@gmail.com', '$argon2id$v=19$m=4096,t=3,p=1$i8oEfAd/Wjh01GrbMQ6Jqg$zJQ4uh7mwZCQU84CJDnHzqlDE/rzZAr4dFYGUOUiz48', '2026-07-04 14:55:00', NULL, 0, NULL, 2);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `project_image`
--
ALTER TABLE `project_image`
  ADD PRIMARY KEY (`id`),
  ADD KEY `project` (`project_id`);

--
-- A tábla indexei `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role` (`role_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `project`
--
ALTER TABLE `project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT a táblához `project_image`
--
ALTER TABLE `project_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `project_image`
--
ALTER TABLE `project_image`
  ADD CONSTRAINT `project` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`);

--
-- Megkötések a táblához `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `role` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
