<?php
// Chemins des fichiers
$inputFile = __DIR__ . '/../../immo/index.html';
$tempFile = __DIR__ . '/../../immo/index_temp.html';

// Vérifiez si le fichier d'entrée existe
if (!file_exists($inputFile)) {
    echo "Le fichier d'entrée n'existe pas : $inputFile\n";
    exit(1);
}

// Lire le contenu du fichier
$content = file_get_contents($inputFile);

// Remplacer la ligne spécifique
$content = str_replace('<base href="/">', '<base href="./">', $content);

// Écrire le contenu modifié dans un fichier temporaire
file_put_contents($tempFile, $content);

// Vérifiez si le fichier temporaire a été créé avant de le déplacer
if (file_exists($tempFile)) {
    // Remplacer l'ancien fichier par le nouveau
    rename($tempFile, $inputFile);
    echo "Ligne remplacée avec succès.\n";
} else {
    echo "Le fichier temporaire n'a pas été créé.\n";
    exit(1);
}
?>
