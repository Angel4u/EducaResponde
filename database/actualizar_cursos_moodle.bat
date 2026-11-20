@echo off
echo ============================================================================
echo   EDUCARESPONDE - ACTUALIZACION COMPLETA DE CURSOS Y FOCOS EN MOODLE
echo ============================================================================
echo.

set "SQL_FILE=%~dp0actualizar_moodle_cursos.sql"
set "MYSQL_EXE="
set "PHP_EXE="

for /d %%D in ("C:\laragon\bin\mysql\mysql*") do (
    if exist "%%D\bin\mysql.exe" (
        set "MYSQL_EXE=%%D\bin\mysql.exe"
    )
)

for /d %%P in ("C:\laragon\bin\php\php*") do (
    if exist "%%P\php.exe" (
        set "PHP_EXE=%%P\php.exe"
    )
)

if "%MYSQL_EXE%"=="" goto :NO_MYSQL

echo [1/3] Aplicando los 4 Focos de Capacitacion Docente y UTP en MySQL (moodle)...
"%MYSQL_EXE%" --user=root --password= --host=127.0.0.1 --port=3306 --default-character-set=utf8mb4 moodle < "%SQL_FILE%"
if errorlevel 1 goto :SQL_ERROR

echo [2/3] Purgando caches de Moodle para mostrar los cambios de inmediato...
if not "%PHP_EXE%"=="" (
    if exist "C:\laragon\www\moodle\admin\cli\purge_caches.php" (
        "%PHP_EXE%" "C:\laragon\www\moodle\admin\cli\purge_caches.php" >nul 2>&1
    )
)
if exist "C:\laragon\www\moodledata\cache" rmdir /s /q "C:\laragon\www\moodledata\cache" 2>nul
if exist "C:\laragon\www\moodledata\localcache" rmdir /s /q "C:\laragon\www\moodledata\localcache" 2>nul

echo [3/3] Actualizando tu respaldo database\moodle_backup.sql automaticamente...
call "%~dp0respaldar_moodle.bat"

echo.
echo ============================================================================
echo   [EXITO TOTAL] TU AULA VIRTUAL MOODLE YA TIENE LOS 4 FOCOS DE LA TRANSCRIPCION:
echo   1. Foco 2 (ID 2): Uso de Syscol, Evaluaciones Externas (DIA/SIMCE) y Cobertura (48h)
echo   2. Foco 1 (ID 3): Liderazgo Institucional, CPA y Modelo de Gestion UTP/PME (60h)
echo   3. Foco 3 (ID 4): Gestion Normativa, Protocolos (Decreto 67/RICE) e Inclusion (45h)
echo   4. Foco 4 (ID 5): Innovacion Pedagogica: STEM, ABP, Socioemocional y Lector (50h)
echo   + Footer Institucional corregido (sin logo roto ni soporte@tudominio.cl)
echo ============================================================================
echo.
echo Entra a http://moodle.test/my/ (Area Personal) y presiona F5 para ver tus 4 cursos!
echo.
pause
exit /b 0

:NO_MYSQL
echo [ERROR] No se encontro mysql.exe en C:\laragon\bin\mysql\
pause
exit /b 1

:SQL_ERROR
echo.
echo [ERROR] No se pudo aplicar el SQL. Verifica que MySQL este encendido en Laragon.
pause
exit /b 1
