# 📚 Informe de Lecciones Aprendidas - Verificación del Software

Landing page profesional desarrollada como parte de la actividad **GA11-220501098-AA1-EV04** del SENA, que presenta un informe completo de lecciones aprendidas durante el proceso de verificación y calidad del software.

## 🎯 Descripción del Proyecto

Esta aplicación web documenta las experiencias, conocimientos y aprendizajes obtenidos durante el ciclo de desarrollo de software, aplicando estándares internacionales de calidad como ISO 9001, CMMI e ISTQB, junto con metodologías ágiles.

## ✨ Características Principales

### 🏗️ Arquitectura Modular
- Componentes 100% reutilizables
- Separación clara de responsabilidades
- Código limpio y mantenible
- Estructura escalable

### 📋 Contenido Estructurado

#### 1. **Header**
- Logo institucional SENA
- Título y subtítulo del informe
- Diseño responsivo con gradiente corporativo

#### 2. **Introducción**
- Definición de lecciones aprendidas
- Objetivos del documento
- Estándares aplicados (ISO 9001, CMMI, ISTQB)

#### 3. **Bitácora del Proyecto**
- Tabla interactiva con 7 hitos del proyecto
- Registro cronológico desde 2023 hasta 2025
- Información detallada: fechas, actividades, herramientas, resultados

#### 4. **Buenas Prácticas**
- 6 tarjetas informativas sobre metodologías aplicadas
- Estándares de calidad y testing
- Herramientas y técnicas de desarrollo

#### 5. **Lecciones Aprendidas**
- 7 aprendizajes clave del proyecto
- Íconos visuales para mejor comprensión
- Descripciones detalladas de cada lección

#### 6. **Socialización**
- Métodos de comunicación con el equipo
- Acciones para futuros proyectos
- Recomendaciones para otros desarrolladores

#### 7. **Footer**
- Información del estudiante
- Datos académicos (ficha, actividad)
- Derechos reservados SENA

## 🛠️ Tecnologías Utilizadas

- **React 18+** - Biblioteca de JavaScript para interfaces de usuario
- **JavaScript ES6+** - Lenguaje de programación moderno
- **CSS3** - Estilos puros sin frameworks
- **Vite** - Build tool y servidor de desarrollo

## 📁 Estructura del Proyecto

```
Informe_lecciones_aprendidas/
├── public/
├── src/
│   ├── components/
│   │   ├── BitacoraSection.jsx
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   ├── GoodPractices.jsx
│   │   ├── Header.jsx
│   │   ├── Introduction.jsx
│   │   ├── LessonsLearned.jsx
│   │   ├── Section.jsx
│   │   └── Socialization.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone [https://github.com/Rafael0896/Informe-de-Lecciones-Aprendidas]
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar el servidor de desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:5173
```

### Compilar para producción
```bash
npm run build
```

### Previsualizar build de producción
```bash
npm run preview
```
### Link del repositorio
```
https://github.com/Rafael0896/Informe-de-Lecciones-Aprendidas
```
### link de la página desplegada
```
https://informe-de-lecciones-aprendidas.vercel.app/
```

## 🎨 Componentes Reutilizables

### Section.jsx
Componente wrapper genérico para todas las secciones de la página.

**Props:**
- `id` (string): Identificador único de la sección
- `title` (string): Título de la sección
- `children` (ReactNode): Contenido de la sección
- `className` (string): Clases CSS adicionales

**Ejemplo de uso:**
```jsx
<Section id="mi-seccion" title="Mi Título">
  <p>Contenido de la sección</p>
</Section>
```

### Card.jsx
Componente de tarjeta reutilizable para mostrar información estructurada.

**Props:**
- `title` (string): Título de la tarjeta
- `description` (string): Descripción del contenido
- `icon` (string): Ícono emoji o texto
- `children` (ReactNode): Contenido adicional
- `className` (string): Clases CSS adicionales

**Ejemplo de uso:**
```jsx
<Card 
  title="Título" 
  icon="🎯" 
  description="Descripción de la tarjeta"
/>
```

## 🎯 Buenas Prácticas Implementadas

### Código
- ✅ Componentes funcionales con React Hooks
- ✅ Props con valores por defecto
- ✅ Nombres descriptivos y semánticos
- ✅ Comentarios de sección para navegación
- ✅ Exportación por defecto consistente

### Accesibilidad (A11y)
- ✅ Roles ARIA (`role="banner"`, `role="main"`, `role="contentinfo"`)
- ✅ Atributos `aria-labelledby` y `aria-label`
- ✅ Encabezados semánticos (h1, h2, h3)
- ✅ Navegación por teclado
- ✅ Tablas responsive con etiquetas `data-label`

### Diseño Responsive
- ✅ Mobile-first approach
- ✅ Breakpoints: 768px (tablet) y 480px (móvil)
- ✅ Grid adaptativo para tarjetas
- ✅ Tabla que se convierte en cards en móviles
- ✅ Tipografía escalable

### CSS
- ✅ Variables CSS para mantenibilidad
- ✅ Nomenclatura BEM simplificada
- ✅ Transiciones y efectos hover
- ✅ Sistema de colores institucionales
- ✅ Sin dependencias de frameworks



## 📊 Estándares y Metodologías Aplicados

- **ISO 9001**: Sistema de gestión de calidad
- **CMMI**: Modelo de madurez de capacidades
- **ISTQB**: Estándares de pruebas de software
- **Scrum**: Metodología ágil para desarrollo iterativo
- **Control de versiones**: Git y GitHub
- **Documentación continua**: Durante todo el ciclo de desarrollo

## 👨‍💻 Autor

**Rafael Emiro Álvarez Angulo**
- Ficha: 2885501
- Institución: SENA - Servicio Nacional de Aprendizaje

## 📝 Licencia

Este proyecto es de uso académico y está desarrollado como parte de la formación en el SENA.

© 2025 SENA - Todos los derechos reservados

**Nota**: Este proyecto fue desarrollado con fines educativos como parte del programa de formación del SENA en desarrollo de software.