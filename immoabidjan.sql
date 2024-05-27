-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 27 mai 2024 à 17:53
-- Version du serveur : 10.4.21-MariaDB
-- Version de PHP : 7.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `immoabidjan`
--

-- --------------------------------------------------------

--
-- Structure de la table `acquereurs`
--

CREATE TABLE `acquereurs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `projet_id` int(11) NOT NULL,
  `nom` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prenom` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `genre` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `typeDoc` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `docIdentification` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telephone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `typeAcquereur` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `acquereurs`
--

INSERT INTO `acquereurs` (`id`, `projet_id`, `nom`, `prenom`, `genre`, `typeDoc`, `docIdentification`, `email`, `telephone`, `typeAcquereur`, `updated_by`, `created_by`, `created_at`, `updated_at`) VALUES
(1, 1, 'DAO', 'Hamadou', 'HOMME', 'CARTE_NATIONALE', '0001', 'dao@gmail.com', '7877877', 'PARTICULIER', NULL, NULL, '2024-05-24 19:57:15', '2024-05-24 19:57:15'),
(2, 1, 'NIKIEMA', 'Faical', 'HOMME', 'PASSPORT_ORDINAIRE', 'A9898765', 'nikiema@gbcysgroup.com', '7000000', 'PROPRIETAIRE_TERRIEN', NULL, 1, '2024-05-26 10:27:23', '2024-05-26 10:27:23');

-- --------------------------------------------------------

--
-- Structure de la table `acquisitions`
--

CREATE TABLE `acquisitions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `projet_id` int(11) NOT NULL,
  `site_id` int(11) NOT NULL,
  `terrain_id` int(11) NOT NULL,
  `acquereur_id` int(11) NOT NULL,
  `montant` int(11) NOT NULL,
  `dateAcquisition` date NOT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `acquisitions`
--

INSERT INTO `acquisitions` (`id`, `projet_id`, `site_id`, `terrain_id`, `acquereur_id`, `montant`, `dateAcquisition`, `updated_by`, `created_by`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, 1, 1000000, '2024-05-25', NULL, 1, '2024-05-25 13:53:05', '2024-05-25 13:53:05'),
(2, 1, 1, 4, 2, 7000000, '2024-05-26', NULL, 1, '2024-05-26 10:27:57', '2024-05-26 10:27:57');

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2022_11_16_143109_create_niveau_localisations_table', 1),
(4, '2022_11_16_143141_create_desagregation_geographiques_table', 1),
(5, '2022_11_16_143316_create_donnees_table', 1),
(6, '2022_11_16_143509_create_groupes_table', 1),
(7, '2022_11_16_145331_create_indicateurs_table', 1),
(8, '2022_11_26_152520_create_annees_table', 1),
(9, '2022_12_23_111010_create_projets_table', 1),
(10, '2022_11_16_143109_create_sites_table', 2),
(11, '2022_11_16_143141_create_terrains_table', 3),
(16, '2022_11_16_145331_create_acquereurs_table', 4),
(19, '2022_11_16_143316_create_acquisitions_table', 5);

-- --------------------------------------------------------

--
-- Structure de la table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `projets`
--

CREATE TABLE `projets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `code` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `intitule` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `objectif` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `projets`
--

INSERT INTO `projets` (`id`, `code`, `intitule`, `objectif`, `avatar`, `updated_by`, `created_by`, `created_at`, `updated_at`) VALUES
(1, '0001', 'NOOR IMMO', NULL, '1716665559.png', NULL, NULL, '2024-05-22 14:43:04', '2024-05-25 19:32:40');

-- --------------------------------------------------------

--
-- Structure de la table `sites`
--

CREATE TABLE `sites` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `projet_id` int(11) DEFAULT NULL,
  `geoJSON` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `libelle` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `sites`
--

INSERT INTO `sites` (`id`, `projet_id`, `geoJSON`, `libelle`, `description`, `updated_by`, `created_by`, `created_at`, `updated_at`) VALUES
(1, 1, '1716574338.json', 'BASSAME', 'Test', NULL, NULL, '2024-05-24 18:03:44', '2024-05-24 18:12:18');

-- --------------------------------------------------------

--
-- Structure de la table `terrains`
--

CREATE TABLE `terrains` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `projet_id` int(11) DEFAULT NULL,
  `site_id` int(11) NOT NULL,
  `code` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `numero` varchar(6) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lot` varchar(4) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `typeLogement` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `superficie` varchar(11) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `terrains`
--

INSERT INTO `terrains` (`id`, `projet_id`, `site_id`, `code`, `numero`, `lot`, `typeLogement`, `superficie`, `updated_by`, `created_by`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '010010000A0842', '1', '1', 'SERVICES', '300', NULL, NULL, '2024-05-24 18:36:20', '2024-05-25 16:31:44'),
(2, 1, 1, '010010000B0269', '269', '1', 'HABITATION', '500', NULL, NULL, '2024-05-26 09:40:23', '2024-05-26 10:08:39'),
(3, 1, 1, '010010000A0067', '3', '1', 'HABITATION', '600', NULL, NULL, '2024-05-26 09:40:46', '2024-05-26 09:40:46'),
(4, 1, 1, '010010000A0799', '799', '1', 'HABITATION', '700', NULL, NULL, '2024-05-26 10:26:28', '2024-05-26 10:26:28');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telephone` varchar(12) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` enum('ADMIN','USER','COLLECTE','VISITEUR') COLLATE utf8mb4_unicode_ci DEFAULT 'VISITEUR',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `avatar`, `email_verified_at`, `password`, `first_name`, `last_name`, `telephone`, `role`, `remember_token`, `deleted_at`, `updated_by`, `created_by`, `created_at`, `updated_at`) VALUES
(1, 'daohamadou@gmail.com', NULL, '2024-05-22 14:41:34', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Hamadou', 'DAO', '74359156', 'ADMIN', 'bbTJZSp0SF', NULL, NULL, NULL, '2024-05-22 14:41:34', '2024-05-24 10:40:27'),
(2, 'ysimonis@example.com', NULL, '2024-05-22 14:41:34', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Merl', 'Collins', NULL, 'VISITEUR', '6jJor1Sc6v', NULL, NULL, NULL, '2024-05-22 14:41:34', '2024-05-22 14:41:34'),
(3, 'martin.lang@example.net', NULL, '2024-05-22 14:41:34', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Mortimer', 'Grant', NULL, 'VISITEUR', 'ON1gJY9brZ', NULL, NULL, NULL, '2024-05-22 14:41:34', '2024-05-22 14:41:34'),
(4, 'sabryna.pfeffer@example.net', NULL, '2024-05-22 14:41:34', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Elda', 'Weissnat', NULL, 'VISITEUR', 'aMN3Dr36cW', NULL, NULL, NULL, '2024-05-22 14:41:34', '2024-05-22 14:41:34'),
(5, 'ashleigh.leuschke@example.net', NULL, '2024-05-22 14:41:34', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Jayden', 'Wisozk', NULL, 'VISITEUR', 'DTq4ERfdD5', NULL, NULL, NULL, '2024-05-22 14:41:34', '2024-05-22 14:41:34'),
(6, 'finn.lueilwitz@example.com', NULL, '2024-05-22 14:41:34', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Rahul', 'Hills', NULL, 'VISITEUR', 'j0yNrFXkCH', NULL, NULL, NULL, '2024-05-22 14:41:34', '2024-05-22 14:41:34'),
(7, 'mdaugherty@example.net', NULL, '2024-05-22 14:41:34', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Jazmyne', 'Hackett', NULL, 'VISITEUR', 'qvL4odooI2', NULL, NULL, NULL, '2024-05-22 14:41:34', '2024-05-22 14:41:34'),
(8, 'hgibson@example.org', NULL, '2024-05-22 14:41:34', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Obie', 'Fritsch', NULL, 'VISITEUR', 'z9DnEUfqiZ', NULL, NULL, NULL, '2024-05-22 14:41:34', '2024-05-22 14:41:34'),
(9, 'hrutherford@example.net', NULL, '2024-05-22 14:41:34', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Koby', 'Ziemann', NULL, 'VISITEUR', 'liBAdUZM6Q', NULL, NULL, NULL, '2024-05-22 14:41:34', '2024-05-22 14:41:34'),
(10, 'madalyn.upton@example.org', NULL, '2024-05-22 14:41:34', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Yadira', 'Grant', NULL, 'VISITEUR', 'AFXkz498Ft', NULL, NULL, NULL, '2024-05-22 14:41:34', '2024-05-22 14:41:34');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `acquereurs`
--
ALTER TABLE `acquereurs`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `acquisitions`
--
ALTER TABLE `acquisitions`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Index pour la table `projets`
--
ALTER TABLE `projets`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `sites`
--
ALTER TABLE `sites`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sites_libelle_unique` (`libelle`);

--
-- Index pour la table `terrains`
--
ALTER TABLE `terrains`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `acquereurs`
--
ALTER TABLE `acquereurs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `acquisitions`
--
ALTER TABLE `acquisitions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT pour la table `projets`
--
ALTER TABLE `projets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `sites`
--
ALTER TABLE `sites`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `terrains`
--
ALTER TABLE `terrains`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
