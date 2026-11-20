# Guía y Código para Personalizar tu Moodle (`moodle.test`) al Diseño Corporativo de EducaResponde

En tus capturas de Moodle detecté **4 detalles clave** que vienen por defecto o de una plantilla anterior y que puedes dejar con acabado 100% corporativo en pocos minutos desde **`Administración del sitio` → `Apariencia`**:

---

## 1. Corregir el Pie de Página (`soporte@tudominio.cl` y `mail.tudominio.cl`)
En tu 4ª captura, abajo en la franja oscura dice:
- `...go Institucional` (cortado a la izquierda)
- `E-mail: soporte@tudominio.cl`
- `En caso de presentar problemas con sus datos institucionales, validar datos en https://mail.tudominio.cl...`

### ¿Dónde se cambia en Moodle?
1. Entra en tu Moodle a **`Administración del sitio`** (arriba en la barra superior).
2. Ve a la pestaña **`Apariencia`**:
   - Si estás usando el tema **Moove** (o similar), haz clic en **`Moove`** (bajo la sección *Temas*) → pestaña **`Pie de página` (Footer)**.
   - También revisa **`Apariencia` → `HTML adicional`** → cuadro **`Antes de cerrar BODY`**.
3. Reemplaza el texto `soporte@tudominio.cl` por **`contacto@educaresponde.cl`** y el aviso inferior por:
   ```text
   Plataforma Oficial de Capacitación OTEC EducaResponde · Programas Certificados SENCE y Ley SEP · Soporte Técnico: contacto@educaresponde.cl
   ```

---

## 2. Inyectar Colores Corporativos (Azul Marino `#0f172a` + Amarillo `#eab308`) y Mejorar el Login
En tu 2ª captura (la pantalla de Login), a la izquierda sale el mensaje genérico de Moodle (*"500.000.000 usuarios, 150.000 sitios"*).

Para darle la identidad visual exacta de tu Landing Page:
1. En Moodle ve a **`Administración del sitio` → `Apariencia` → `Temas` → (Tu tema actual, ej. Boost o Moove)**.
2. En **Configuración avanzada** (o `Raw SCSS`), pega este bloque CSS para estilizar botones, barra superior y pestañas:

```scss
/* === IDENTIDAD CORPORATIVA EDUCARESPONDE EN MOODLE === */
:root {
  --er-navy: #0f172a;
  --er-gold: #eab308;
  --er-gold-hover: #ca8a04;
}

/* Barra superior y botones primarios */
.navbar.fixed-top {
  border-bottom: 2px solid var(--er-gold) !important;
}

.btn-primary {
  background-color: var(--er-navy) !important;
  border-color: var(--er-navy) !important;
  font-weight: 700 !important;
  border-radius: 0.65rem !important;
}

.btn-primary:hover {
  background-color: #1e293b !important;
  border-color: var(--er-gold) !important;
}

/* Pestañas del curso (General, Tema 1, etc.) */
.nav-tabs .nav-link.active {
  background-color: var(--er-navy) !important;
  color: #ffffff !important;
  border-bottom: 3px solid var(--er-gold) !important;
  font-weight: 700 !important;
}
```

---

## 3. Arreglar el orden de las Pestañas en el curso "Uso de Syscol" (`Tema 1`, `Tema 4`, `Tema 5`)
En tu 5ª captura se ve que en la fila principal de pestañas aparecen **`General | Tema 1 | Tema 4 | Tema 5`**, y cuando entras a **`Tema 1`**, abajo aparecen **`Inicio | Tema 2 | Tema 3`**.
* **¿Por qué pasa eso?** Porque estás usando el formato de curso *"Temas en pestañas (Onetopic)"* y los temas 2 y 3 tienen activada la opción **"Nivel: Hijo de la pestaña anterior"**.
* **¿Cómo dejarlos todos ordenados en una sola fila (`Módulo 1 | Módulo 2 | Módulo 3 | Módulo 4`)?**
  1. Activa el interruptor **"Modo de edición"** (arriba a la derecha en Moodle).
  2. Entra a **`Tema 2`**, haz clic en los 3 puntitos de la sección → **`Editar sección`**.
  3. En la opción **"Nivel"** (Level), cámbialo de *"Hijo de la pestaña anterior"* a **"Pestaña normal (Primer nivel)"** y aprovecha de cambiarle el nombre a `Módulo 2: Reportes y Cobertura Curricular`.
  4. Haz lo mismo con **`Tema 3`**.

---

## 4. Plantilla HTML Moderna para Reemplazar las Barras Antiguas (`>>>> DESCRIPCIÓN`)
En tu 5ª captura tienes bloques antiguos con `>>>> DESCRIPCIÓN` (rojo), `>>>> RESULTADOS DE APRENDIZAJE` (gris) y `>>>> CLASES` (amarillo).

Si activas el **"Modo de edición"** en el curso, editas esa etiqueta/subsección, presionas el botón **`</>` (Código HTML)** en el editor de Moodle y pegas este código, tendrás una ficha de módulo moderna idéntica a tu web:

```html
<div style="font-family: system-ui, -apple-system, sans-serif; color: #0f172a; max-width: 100%; margin: 16px 0;">
  
  <!-- Bloque 1: Descripción del Módulo -->
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-left: 5px solid #0f172a; border-radius: 12px; padding: 20px 24px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
    <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: #ca8a04; margin-bottom: 6px;">
      Presentación del Módulo
    </div>
    <h4 style="margin: 0 0 10px 0; font-size: 20px; font-weight: 800; color: #0f172a;">
      Descripción de la Unidad
    </h4>
    <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #475569;">
      En este módulo práctico aprenderás a utilizar la plataforma Syscol para cargar evaluaciones institucionales, analizar matrices psicométricas y detectar brechas de aprendizaje por curso y asignatura.
    </p>
  </div>

  <!-- Bloque 2: Resultados de Aprendizaje -->
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-left: 5px solid #eab308; border-radius: 12px; padding: 20px 24px; margin-bottom: 20px;">
    <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: #0f172a; margin-bottom: 6px;">
      Competencias OTEC / CPEIP
    </div>
    <h4 style="margin: 0 0 12px 0; font-size: 18px; font-weight: 800; color: #0f172a;">
      Resultados de Aprendizaje Esperados
    </h4>
    <ul style="margin: 0; padding-left: 20px; font-size: 15px; line-height: 1.7; color: #334155;">
      <li>Interpretar tableros de cobertura curricular y rendimiento por eje temático en Syscol.</li>
      <li>Elaborar informes ejecutivos basados en datos para reuniones de UTP y Consejo de Profesores.</li>
      <li>Diseñar planes de intervención pedagógica oportuna alineados con el PME del establecimiento.</li>
    </ul>
  </div>

  <!-- Bloque 3: Estructura de Clases y Horas -->
  <div style="background: #0f172a; color: #ffffff; border-radius: 12px; padding: 18px 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
    <div>
      <span style="display: inline-block; background: #eab308; color: #0f172a; font-size: 11px; font-weight: 800; text-transform: uppercase; padding: 3px 10px; border-radius: 99px; margin-bottom: 6px;">
        Modalidad &amp; Dedicación
      </span>
      <p style="margin: 0; font-size: 15px; color: #e2e8f0;">
        <strong>Estructura de la sesión:</strong> 2 sesiones aplicadas de 80 minutos + taller práctico en plataforma.
      </p>
    </div>
  </div>

</div>
```
