# Respaldo de Base de Datos Moodle (`moodle_backup.sql`)

Esta carpeta permite guardar la base de datos de tu **Aula Virtual Moodle** directamente dentro del proyecto para que nunca se pierda y puedas restaurarla en otro computador o subirla a **HostGator (phpMyAdmin)**.

## 1. ¿Cómo guardar/actualizar la Base de Datos en el proyecto?
1. Asegúrate de tener **Laragon encendido** (con MySQL 9.7.1 activo).
2. Haz doble clic en el archivo **`respaldar_moodle.bat`** que está en esta carpeta (`database/`).
3. Se generará automáticamente el archivo **`moodle_backup.sql`** (aprox. 13 MB) con todos tus cursos, usuarios, plantillas y configuraciones de Moodle.

## 2. ¿Cómo restaurarla si cambias de PC o se borra Laragon?
1. Enciende Laragon.
2. Haz doble clic en **`restaurar_moodle.bat`**.
3. En segundos recreará la base de datos `moodle` y cargará todas tus tablas.

## 3. ¿Cómo subir esta misma Base de Datos cuando contrates HostGator?
1. Entra al **cPanel de HostGator → MySQL Databases** y crea una base de datos (ej. `educares_moodle`) y un usuario.
2. Abre `moodle_backup.sql` con VS Code, presiona `Ctrl + H` (Reemplazar) y cambia todas las apariciones de `http://moodle.test` por `https://aula.educaresponde.cl`.
3. Entra a **phpMyAdmin** en HostGator, selecciona tu nueva base de datos, haz clic en **Importar** y sube el archivo `moodle_backup.sql`.
