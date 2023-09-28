-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 24, 2023 at 08:31 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ytube`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(255) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Fashion'),
(2, 'Comedy'),
(3, 'Movie trailers'),
(4, 'Music'),
(5, 'News');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(255) NOT NULL,
  `name` varchar(30) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `nick` varchar(30) NOT NULL,
  `pass` varchar(40) NOT NULL,
  `salt` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `surname`, `nick`, `pass`, `salt`) VALUES
(1, 'Tomas', 'Gel', 'tom123', 'be890e4a8abc8fa095950a9299791df0faf08f5e', 'lmeksy2S');

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE `videos` (
  `id` int(11) NOT NULL,
  `vid` varchar(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `category` int(2) NOT NULL,
  `views` int(9) NOT NULL DEFAULT 0,
  `uid` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `videos`
--

INSERT INTO `videos` (`id`, `vid`, `name`, `description`, `category`, `views`, `uid`) VALUES
(1, '1ap0baidLVo', 'The Beauty Of Isa', 'Cinematic fashion film', 1, 16, 1),
(2, '2LuxGCzf8VY', 'Sady', 'This is a fashion film that we recently did for SADY AUSTRALIA', 1, 1, 1),
(3, '1Pp9ojSBBS8', 'SHEIN Fashion Film', 'SHEIN Fashion Film: Autumn and Winter Collection 2022', 1, 5, 1),
(4, 'z2NmxfLbTOc', 'LOUIS VUITTON', 'Women’s Spring-Summer 2021 Campaign Details ', 1, 0, 1),
(5, '9u_LhyTTBTU', 'PRADA', 'A playful homage to the cinematic escape and the transformational fantasies', 1, 0, 1),
(6, 'Mka-Q161kzs', 'Michael Kors', 'Bella Hadid for Michael Kors Fall 2022 campaign', 1, 0, 1),
(7, 'khewSjLftOg', 'CHANEL Makeup', 'Discover the shades of 31 LE ROUGE inspired by the rue Cambon Couture Ateliers', 1, 0, 1),
(8, 'SDj4UlP56UU', 'Dior', 'DIOR Fashion Film 2022 | Directed by VIVIENNE & TAMAS', 1, 0, 1),
(9, 'GBsYuJtMXqE', 'DIOR Sauvage Parfum', 'Dior Sauvage feat Johnny Depp', 1, 0, 1),
(10, 'uUNROSjryrI', 'DIOR Sauvage Elixir', 'Sauvage Elixir es un perfume de extraordinaria concentración', 1, 0, 1),
(11, 'wafe6kDBb6c', 'GUCCI', 'Gucci Bloom: The Campaign Film', 1, 0, 1),
(13, 'NlHbwkMZUhE', 'ELLE Hungary', 'Decalcomania-CÈF Collection 2023 Published in ELLE Hungary', 1, 0, 1),
(14, 'pomoP2SH8Cg', 'GUCCI feat. Harry Styles', 'Gucci Men\'s Tailoring campaign: Harry Styles', 1, 0, 1),
(15, 'NoMqvniiEkk', 'KENZO', 'Descubra a nova fragrância Kenzo World', 1, 0, 1),
(17, 'ccylUiU1qJw', 'GUCCI', 'Gucci Cruise 2018 Campaign: Roman Rhapsody', 1, 0, 1),
(18, 'DPrRRgagQg8', 'Jimmy Choo', 'Shimmer in the Dark: Jimmy Choo CR18 Featuring Cara Delevingne', 1, 0, 1),
(19, 'T6jy754fQ6o', 'J\'adore - Dior', 'J\'adore - Dior', 1, 0, 1),
(20, '_9Q7GcqKgH0', 'CHANEL feat. Kristen Stewart ', 'CHANEL, the Film with Kristen Stewart ', 1, 1, 1),
(21, 'dzOqyG73KuE', 'Prada Paradoxe', 'Emma Watson breaks the mould of the muse to be both in front of and behind the lens', 1, 0, 1),
(22, '5lYcf5k0ieE', 'Hermès l Astonishing orange', 'Hermes. Astonishing orange. One color can conceal another.', 1, 0, 1),
(23, '_CqKv0Y1FB0', 'Balenciaga Spring 24 Collection', 'Balenciaga Spring 24 Collection', 1, 0, 1),
(24, 'TOJF1XV_hEQ', 'The Raccoons are Taking Over! ', 'The Raccoons are Taking Over! | Aaron Weber | Stand Up Comedy', 2, 3, 1),
(25, '2m2520TuUdk', 'Matt Rife | Only Fans (Full Comedy Special)', 'Matt Rife is a twenty six year old Veteran of standup comedy.', 2, 0, 1),
(26, 'zG10W6HYKTk', 'Kelsey Cook | The Hustler (Full Comedy Special)', 'Kelsey got divorced one week before the pandemic', 2, 1, 1),
(27, '4tCVQ4rJdd8', 'Dad Jokes | Don\'t laugh Challenge | Andrew vs Matt | Raise Your Spirits', 'Dad Jokes | Don\'t laugh Challenge | Andrew vs Matt | Raise Your Spirits', 2, 0, 1),
(28, '6pzXbYhp6QM', 'Dad Jokes | Try Not to Laugh: Ramon vs Dan #11', 'Check out our website for a big list of jokes.', 2, 0, 1),
(29, 'W84GVTSFZXU', 'Cheap Joke', 'Cheap Joke', 2, 0, 1),
(30, 'MnqyXdAgqw4', 'JOKING || ANIMATION MEME', 'JOKING || ANIMATION MEME', 2, 0, 1),
(31, 'qJz18c6gw8c', 'GET OUT OF MY CAR', 'GET OUT OF MY CAR', 2, 0, 1),
(32, '1L7-77UN9Aw', 'Life', 'Thats life', 2, 0, 1),
(33, 'FV3bqvOHRQo', 'Aquaman and the Lost Kingdom | Trailer', 'One king will lead us all. #Aquaman and the Lost Kingdom - Only in theaters December 20.', 3, 3, 1),
(34, 'wS_qbDztgVY', 'Marvel Studios\' The Marvels | Official Trailer', 'This fall, The Marvels take flight.', 3, 0, 1),
(35, 'ec27RCzb6qI', 'Monarch: Legacy of Monsters — Official Teaser | Apple TV+', 'Monarch: Legacy of Monsters', 3, 0, 1),
(36, 'Way9Dexny3w', 'Dune: Part Two | Official Trailer', 'The saga continues as award-winning filmmaker Denis Villeneuve embarks on “Dune: Part Two,', 3, 0, 1),
(37, 'NxW_X4kzeus', 'The Hunger Games: The Ballad of Songbirds & Snakes (2023) Official Trailer 2', 'The Hunger Games: The Ballad of Songbirds & Snakes – In Theaters November 17, 2023. Starring Tom Blyth, Rachel Zegler, Peter Dinklage', 3, 0, 1),
(38, 'EqyGMcMNFqQ', 'AW X (2023)', 'AW X (2023) Special Feature \'Legacy\' – Tobin Bell, Shawnee Smith', 3, 0, 1),
(39, 'UalKW1-mdcE', 'BOUDICA: QUEEN OF WAR | Official Trailer (2023)', 'After her family is slain and her land stolen, warrior queen Boudica (Olga Kurylenko) leads a fierce rebellion against the Roman Empire', 3, 0, 1),
(40, 'C13NiLm8QPk', 'REBEL MOON Trailer (2023) Zack Snyder', 'REBEL MOON Trailer (2023) Sofia Boutella, Charlie Hunnam, Anthony Hopkins, Zack Snyder Sci-Fi Movie HD', 3, 0, 1),
(41, 'CXeNYkYNTOM', 'Roswell Delirium - Official Trailer (2023)', 'Lightforce Pictures brings you a 1980s Sci Fi Psychological Thriller \"Roswell Delirium\" starring Kylee Levien, Ashton Solecki, Arie Bodenhausen with an All Star 80s cast featuring Anthony Michael Hall, Lisa Whelchel, Dee Wallace, Reggie VelJohnson, Sam Jones.  Also co-starring Ryan Kennedy, Kayden Tokarski, Georgia MacPhail, and Romyn Smith.', 3, 0, 1),
(42, 'hnEwJKVWjFM', 'Lamb | Official Trailer HD', 'From writer-director Valdimar Jóhannsson and starring Noomi Rapace. LAMB – In Theaters October 8. #LambMovie', 3, 0, 1),
(43, '6sxnOLRGkhw', 'Viking Wolf | Official trailer | Netflix', '17-year-old Thale must move with her parents to a small town when her mother gets a job at the local police department. After a student is brutally murdered at a party that Thale attends, she suddenly becomes a key witness. Who, or rather what, was the killer?', 3, 0, 1),
(44, '1y3rflTTjeI', 'Teen Wolf: The Movie | Official Trailer | Paramount+', 'When a terrifying new evil emerges, Scott McCall (Tyler Posey) and the rest of his pack return to Beacon Hills. Scott rounds up the Banshees, Werecoyotes, Hellhounds, Kitsunes, and other shapeshifters of the night. With the help of his new allies, trusted friends, and the return of a long lost love, Scott and his pack just might stand a chance.  …', 3, 0, 1),
(45, 'qEVUtrk8_B4', 'John Wick: Chapter 4 (2023 Movie) Official Trailer ', 'John Wick (Keanu Reeves) uncovers a path to defeating the High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.', 3, 0, 1),
(46, 'OAZWXUkrjPc', 'NAPOLEON - Official Trailer (HD)', 'Napoleon is a spectacle-filled action epic that details the checkered rise and fall of the iconic French Emperor Napoleon Bonaparte, played by Oscar®-winner Joaquin Phoenix. ', 3, 0, 1),
(47, 'rze8QYwWGMs', 'KRAVEN THE HUNTER', 'Kraven the Hunter is the visceral story about how and why one of Marvel’s most iconic villains came to be. Set before his notorious vendetta with Spider-Man, Aaron Taylor-Johnson stars as the titular character in the R-rated film.', 3, 0, 1),
(48, 'HUiz5dRdMdk', 'DUNE PART TWO Official Trailer 2 | 4K', 'Dune Part Two Trailer 2 in 4K (the highest quality available currently). ', 3, 0, 1),
(49, 'LniY5Q2hvU4', 'SHE CAME TO ME Trailer (2023) Anne Hathaway, Peter Dinklage', 'SHE CAME TO ME Trailer (2023) Anne Hathaway, Peter Dinklage, Marisa Tomei, Drama Movie', 3, 0, 1),
(50, '7cx9nCHsemc', 'Killers of the Flower Moon', 'Killers Of The Flower Moon is “Scorsese’s most innovative and best movie in decades.\" Starring Leonardo DiCaprio, Robert De Niro, and Lily Gladstone. Exclusively in theatres October 20.', 3, 0, 1),
(51, '4-vON298-Xk', 'THE BIKERIDERS Trailer (2023)', 'THE BIKERIDERS Trailer (2023) Tom Hardy, Austin Butler, Jodie Comer', 3, 0, 1),
(52, '1cTK4oTOzZA', 'REPTILE Trailer (2023) Justin Timberlake, Benicio Del Toro', 'REPTILE Trailer (2023) Justin Timberlake, Benicio Del Toro, Michael Pitt, Alicia Silverstone', 3, 0, 1),
(53, 'vs1epO_zLG8', 'THE KILLER | Official Teaser Trailer | Netflix', 'After a fateful near-miss, an assassin battles his employers and himself on an international manhunt he insists isn\'t personal.', 3, 0, 1),
(54, 'qkhf740R5UI', 'The Only Two Brothers on the Titanic', 'Mark Curry explains how to play it cool around cops, wonders why Black people were left out of The Titanic and describes how Halloween works when you grow up poor.', 2, 0, 1),
(55, 'BWnwBX_fxMk', 'Questions That Will Blow Your Mind - Deon Cole', 'Deon Cole lists off some of his deep day-to-day observations and insists that black people have trouble remembering the names of white celebrities. (Contains strong language.)', 2, 0, 1),
(56, '3Sbw0lZ9LmY', 'How Do 90% of Americans Have Jobs? - Daniel Tosh', 'Daniel Tosh wonders why Americans still think they live in the greatest country in the world and tries to understand how so many people are employed. (Contains strong language.)', 2, 0, 1),
(57, '6-KpiclMuPA', 'Comedy Central Re-Animated - Steve Rannazzisi - Ordering A Pizza', 'Hear the story of how Steve Rannazzisi got his hook-up, in this humanimated short.', 2, 0, 1),
(58, 'S9ZSzuj1UpA', 'Bill Burr - Animation - Helicopter Bit', 'from Bill Burr\'s \'I\'m Sorry You Feel Tha Way\'.   Available on Netflix.  animation by @markreano', 2, 0, 1),
(59, 'Hf-5fV7s63w', 'Bill Burr - Spousal Homicide', 'Bill Burr - Spousal Homicide', 2, 0, 1),
(60, 'WE6GFM5N84A', 'Bill Burr hilarious rant about searching for things on the internet (Animation)', 'Bill Burr ranting about searching out things on the internet and how hard it is to get the information out without reading a lot of jargon  from MMP 12-12-22', 2, 0, 1),
(61, '1ZXYGxrNWbo', 'Bill Burr Hates Black Friday | CONAN on TBS', 'Bill thinks there\'s nothing that Walmart sells that\'s worth getting trampled for.', 2, 0, 1),
(62, 'Htti4Ne10d0', 'Late Night Nightmare w/ Kimmel, Meyers, Colbert, Fallon, Letterman & Noah', 'We\'ve reached the final episode of The Late Late Show and James is restless...probably because fellow late night hosts Seth Meyers, Jimmy Kimmel, Stephen Colbert, Jimmy Fallon and David Letterman have some thoughts about his departure.', 2, 0, 1),
(63, 'LU5svrK4yAM', 'Why Tucker Got Fired | Angry Fox Viewers Turn to Newsmax', 'Stephen unlocks clues to the mystery of Tucker Carlson’s firing and the ratings fallout that ensued, and looks at reactions to the Florida governor’s trip overseas. ', 2, 0, 1),
(64, 'u_Irmw_Yry8', 'Wheel of Impressions with Trevor Noah, Sarah Paulson and Seth MacFarlane | The Tonight Show', 'Jimmy challenges Trevor Noah, Sarah Paulson and Seth MacFarlane to improvise impressions of celebrities such as Kathleen Turner, Barack Obama, Liam Neeson and more!', 2, 0, 1),
(65, 'hrJ2ZPJvKG0', 'Can You Feel It? with Selena Gomez', 'Selena Gomez and Jimmy take turns sticking their hands inside boxes filled with mystery objects that they have to identify without looking at them.', 2, 0, 1),
(66, 'bZAMiK6ROZA', 'Madonna - American Life', 'You\'re watching the 4K Remastered music video for Madonna\'s \'American Life (Director\'s Cut)\', directed by Jonas Åkerlund. Original song taken from the \'American Life\' album released on Warner Bros. in 2003. ', 4, 0, 1),
(67, 'p6Cnazi_Fi0', 'Kylie Minogue - Padam Padam', 'The official video for Padam Padam by Kylie Minogue. ', 4, 0, 1),
(68, 'qYwgG2oyUbA', 'Madonna - What It Feels Like For A Girl', 'You’re watching the HD Remastered music video for Madonna’s \'What It Feels Like For A Girl\'. Original song taken from the \'Music\' album released on Warner Bros. in 2000. ', 4, 0, 1),
(69, 'NSkboTTTmpg', 'Annie Lennox - No More \"I Love You\'s\"', 'Annie Lennox - No More \"I Love You\'s\" (Official Video)', 4, 0, 1),
(70, 'qrO4YZeyl0I', 'Lady Gaga - Bad Romance', 'Lady Gaga - Bad Romance', 4, 0, 1),
(71, '0KSOMA3QBU0', 'Katy Perry - Dark Horse ft. Juicy J', 'Katy Perry - Dark Horse ft. Juicy J', 4, 0, 1),
(72, 'QcIy9NiNbmo', 'Taylor Swift - Bad Blood ft. Kendrick Lamar', 'Taylor Swift - Bad Blood ft. Kendrick Lamar', 4, 0, 1),
(74, 'taSubkjZUA4', 'Tiësto & Karol G - Don\'t Be Shy', 'Tiësto & Karol G - Don\'t Be Shy', 4, 0, 1),
(75, 'aD7F6M9fsms', 'Jessie Ware - Free Yourself', 'The official \'Free Yourself\' music video. Taken from Jessie Ware’s album \'That! Feels Good!\'. ', 4, 0, 1),
(76, 'A9hcJgtnm6Q', 'Mark Ronson - Nothing Breaks Like a Heart', 'Mark Ronson - Nothing Breaks Like a Heart', 4, 0, 1),
(77, 'G7KNmW9a75Y', 'Miley Cyrus - Flowers', 'Miley Cyrus - Flowers', 4, 0, 1),
(78, 'OiC1rgCPmUQ', 'Dua Lipa - Dance The Night', 'Dua Lipa - Dance The Night', 4, 0, 1),
(79, 'p9rOkd9cyZU', 'Zara Larsson - Can\'t Tame Her (Alternate Cut)', 'Zara Larsson - Can\'t Tame Her (Alternate Cut)', 4, 0, 1),
(80, 'hxq3B_Fk4uk', 'Ava Max - Dancing’s Done', 'Ava Max - Dancing’s Done', 4, 0, 1),
(81, 'bhxhNIQBKJI', 'Troye Sivan - Dance To This ft. Ariana Grande', 'Troye Sivan - Dance To This ft. Ariana Grande', 4, 0, 1),
(82, 'g_uoH6hJilc', 'Years & Years - King', 'Years & Years - King', 4, 0, 1),
(84, 'C-u5WLJ9Yk4', 'Britney Spears - ...Baby One More Time', 'Britney Spears - ...Baby One More Time', 4, 0, 1),
(86, 'Te3_VlimRw0', 'Imagine Dragons - Sharks', 'Imagine Dragons - Sharks', 4, 0, 1),
(87, 'CUj2AWEJnwQ', 'Nicki Minaj & Ice Spice – Barbie World (with Aqua)', 'Nicki Minaj & Ice Spice – Barbie World (with Aqua)', 4, 0, 1),
(88, 'gMq-I0dejjE', 'Ice Spice & Nicki Minaj - Princess Diana', 'Ice Spice & Nicki Minaj - Princess Diana', 4, 0, 1),
(89, 'LEv2fMoVvXE', 'Black Eyed Peas - GUARANTEE (Official Music Video)', 'Black Eyed Peas - GUARANTEE (Official Music Video)', 4, 0, 1),
(90, 'BD5JbyOz2VY', 'Second ship carrying Ukrainian grain reaches Turkey – BBC News', 'A second ship carrying Ukrainian wheat has reached Turkey, despite Russia\'s withdrawal from the UN-backed grain deal.', 5, 0, 1),
(91, 'WuhnbtCrXqE', 'Ukraine war: Zelensky speaks in Canada after strike on Crimea navy base - BBC News', 'Ukraine\'s President Zelensky has addressed the Canadian parliament, praising the country\'s commitment to \"defending freedom.\"', 5, 0, 1),
(92, 'ENj-vIQnLXw', '\'Shame on Him!\': Pelosi slams Trump’s \'sickness\' and calls for MAGA interventio', '\'Shame on Him!\': Pelosi slams Trump’s \'sickness\' and calls for MAGA intervention  MSNBC 6 mln. prenumeratorių  Prenumeruoti', 5, 0, 1),
(93, 'aaBPt4_6c6k', 'Pas Editą. Aktyvaus gyvenimo paslaptimis dalinasi Marija Aušrinė Pavilionienė', 'Pas Editą. Aktyvaus gyvenimo paslaptimis dalinasi Marija Aušrinė Pavilionienė', 5, 0, 1),
(94, 'ZDNMkGBn5Pc', 'Retired colonel explains the strategy behind Ukraine’s Black Sea strike', 'Retired Air Force colonel Cedric Leighton breaks down the missile attack by Ukraine against the Black Sea Fleet headquarters in occupied Crimea. ', 5, 0, 1),
(95, 'Gj3mTYA_j_w', 'Poland stops its Ukraine weapon supply - BBC News', 'Poland stops its Ukraine weapon supply - BBC News', 5, 0, 1),
(96, 'wYrMTKllehU', 'Major reversal: Ukraine ally says it will stop sending arms', 'Polish Prime Minister Mateusz Morawiecki said in a blunt social media statement that Poland will stop sending arms to Ukraine.', 5, 0, 1),
(97, 'rMhFb_i1b0s', 'Activists melt down after liberal city makes drugs illegal again', 'Fox News Chief Correspondent Jonathan Hunt discusses the new laws passed in Seattle, Washington on \"Jesse Watters Primetime.', 5, 0, 1),
(98, 'ZbPeK5XRuWY', 'BREAKING NEWS: Senate Republicans Demand Immediate Changes To Biden Border Policies', 'Fuel your success with Forbes. Gain unlimited access to premium journalism, including breaking news, groundbreaking in-depth reported stories, daily digests and more. Plus, members get a front-row seat at members-only events with leading thinkers and doers, access to premium video that can help you get ahead, an ad-light experience, early access to select products including NFT drops and more', 5, 0, 1),
(99, 'zYuYOoMsCPE', 'JUST IN: Ted Cruz\'s Shocking Confrontation With Mayorkas Leads Sec To Call His Conduct \'Revolting\'', 'Sen. Ted Cruz (R-TX) has a fiery exchange with DHS Sec. Alejandro Mayorkas over migrant deaths in today\'s Senate Judiciary Committee hearing.', 5, 0, 1),
(100, 'XoulC-h4yB4', 'Where\'s My STRAIGHT Flag?!\" Piers Morgan Debates Pride Flags With James Barr', 'Piers Morgan Uncensored is joined by comedian and LGBT activist James Barr and Fox News presenter Tomi Lahren to discuss a viral video showing workers replacing Union Jacks flags with Pride rainbow flags.', 5, 0, 1),
(101, 'P-wNnkeCZho', 'Darius Antanaitis apie Kalnų Karabachą: prasidėjo Rusijai žalingi tektoniniai lūžiai', 'Darius Antanaitis apie Kalnų Karabachą: prasidėjo Rusijai žalingi tektoniniai lūžiai', 5, 0, 1),
(103, 'woenpblJCdE', 'Panorama | 2023-09-23', 'Panorama | 2023-09-23', 5, 0, 1),
(104, 'jfbhhtkgjwg', 'Savaitė | 2023-09-10', 'LRT Savaitė | 2023-09-10', 5, 0, 1),
(105, 'fz-h4tg3Za8', 'Speciali programa skirta NATO viršūnių susitikimui. V. Zelenskis atvyko į Vilnių | 2023-07-11', 'Speciali programa skirta NATO viršūnių susitikimui. V. Zelenskis atvyko į Vilnių | 2023-07-11', 5, 0, 1),
(106, '5LGVCy6NNhI', 'A. Širinskienė skambiai pasisakė apie A. Anušausko poziciją', 'Sprendimas pradėti ikiteisminį tyrimą priimtas išnagrinėjus Seimo narės Agnės Širinskienės pareiškimą dėl galimo tarnybos paslapties atskleidimo.', 5, 0, 1),
(107, 'xBC_MVVwW3M', 'Įvertino, ko iš tiesų siekia ginklų tiekimo atsisakiusi Lenkija: pokyčiai – po mėnesio', 'Lenkijos premjeras Mateuszas Morawieckis ketvirtadienį paskelbė, kad šalis daugiau nebeteikia ginklų Rusijos užpultai Ukrainai. ', 5, 0, 1),
(108, 'R8hBhzWGZjM', 'Aurimo Valujavičiaus sutiktuvės Vilniaus oro uoste', 'Atlanto vandenyną irklais įveikęs keliautojas Aurimas Valujavičius pagaliau grįžta namo. Vilniaus oro uoste pasitiks gausus būrys trispalvėmis pasipuošusių tautiečių ir įvairios staigmenos. Kviečiame žiūrėti!', 5, 0, 1),
(109, 'zG1oG1vhphU', 'Liverpulis įvertino Monikos Linkytės dainą: ar „Eurovizija“ kitąmet įvyks Lietuvoje?', 'Liverpulis įvertino Monikos Linkytės dainą: ar „Eurovizija“ kitąmet įvyks Lietuvoje?', 5, 0, 1),
(110, 'OJGIqrpF0vE', 'Loreen', 'Šių metų muzikinio konkurso favorite laikoma Švedijos atstovė Loreen „Eurovizijos“ atidarymo ceremonijoje pasirodė kukliu įvaizdžiu, tačiau originaliomis tatuiruotėmis. Pasirodo, jos perteikia gražią žinutę.', 5, 0, 1),
(111, 'gUxgQmUxWLY', 'This Is What Could Blow Up McCarthy\'s Ability To Get GOP To Pass Spending Bill', 'On \"Forbes Newsroom,\" political scientist Charles Lipson reflected on Speaker McCarthy\'s problem of trying to bring together both sides of the Republican Caucus.', 5, 0, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `videos`
--
ALTER TABLE `videos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=112;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
