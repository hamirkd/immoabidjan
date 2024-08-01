@echo off
git pull origin master
set "target_dir=..\immo"

echo Suppression de tout le contenu du dossier %target_dir%

rem Supprimer tous les fichiers
del /q /f "%target_dir%\*.*"

rem Supprimer tous les sous-dossiers et leurs fichiers
for /d %%i in ("%target_dir%\*") do rd /s /q "%%i"

echo Suppression terminée.

pause

set src=frontend\dist\fuse
set dest=..\immo

echo Copie du contenu de %src% vers %dest%
xcopy %src% %dest% /E /H /C /I

echo Copie du contenu du dossier fuse du frontend compilé.

pause

set src=config\.htaccess
set dest=..\immo\.htaccess

echo Copie de %src% vers %dest%
copy %src% %dest%

if %errorlevel% equ 0 (
    echo Copie réussie du .htaccess.
) else (
    echo Erreur lors de la copie.
)

pause
C:\php\php.exe config\remplacement.php

echo Ligne remplacée avec succès.

pause