@echo off
echo ============================================================================
echo   RESTAURAR BASE DE DATOS MOODLE DESDE EL PROYECTO HACIA LARAGON
echo ============================================================================
echo.

set "BACKUP_FILE=%~dp0moodle_backup.sql"
set "MYSQL_EXE="

if not exist "%BACKUP_FILE%" goto :NO_FILE

for /d %%D in ("C:\laragon\bin\mysql\mysql*") do (
    if exist "%%D\bin\mysql.exe" (
        set "MYSQL_EXE=%%D\bin\mysql.exe"
    )
)

if "%MYSQL_EXE%"=="" goto :NO_MYSQL

echo Creando base de datos "moodle" (si no existe) y restaurando tablas...
"%MYSQL_EXE%" --user=root --password= --host=127.0.0.1 --port=3306 -e "CREATE DATABASE IF NOT EXISTS moodle CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
"%MYSQL_EXE%" --user=root --password= --host=127.0.0.1 --port=3306 --default-character-set=utf8mb4 moodle < "%BACKUP_FILE%"
if errorlevel 1 goto :RESTORE_ERROR

echo.
echo [EXITO] Base de datos "moodle" restaurada completamente en Laragon!
echo.
pause
exit /b 0

:NO_FILE
echo [ERROR] No existe el archivo "%BACKUP_FILE%".
echo Primero debes ejecutar "respaldar_moodle.bat".
pause
exit /b 1

:NO_MYSQL
echo [ERROR] No se encontro mysql.exe en C:\laragon\bin\mysql\
pause
exit /b 1

:RESTORE_ERROR
echo.
echo [ERROR] Ocurrio un problema al restaurar. Verifica que MySQL este activo en Laragon.
pause
exit /b 1
