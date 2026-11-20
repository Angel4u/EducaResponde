@echo off
echo ============================================================================
echo   RESPALDO AUTOMATICO DE BASE DE DATOS MOODLE (LARAGON) - PROYECTO
echo ============================================================================
echo.

set "BACKUP_FILE=%~dp0moodle_backup.sql"
set "MYSQLDUMP_EXE="

for /d %%D in ("C:\laragon\bin\mysql\mysql*") do (
    if exist "%%D\bin\mysqldump.exe" (
        set "MYSQLDUMP_EXE=%%D\bin\mysqldump.exe"
    )
)

if "%MYSQLDUMP_EXE%"=="" goto :NO_DUMP

echo Usando: "%MYSQLDUMP_EXE%"
echo Exportando base de datos "moodle" hacia:
echo "%BACKUP_FILE%"
echo.

"%MYSQLDUMP_EXE%" --user=root --password= --host=127.0.0.1 --port=3306 --default-character-set=utf8mb4 --single-transaction --routines --triggers moodle > "%BACKUP_FILE%"
if errorlevel 1 goto :DUMP_ERROR

echo [EXITO] Base de datos "moodle" respaldada correctamente en:
echo %BACKUP_FILE%
echo.
pause
exit /b 0

:NO_DUMP
echo [ERROR] No se encontro mysqldump.exe en C:\laragon\bin\mysql\
pause
exit /b 1

:DUMP_ERROR
echo [ERROR] Fallo el respaldo. Verifica que MySQL este encendido en Laragon.
pause
exit /b 1
