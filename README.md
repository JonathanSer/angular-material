# 15 componentes de Angular Material

## 01. Autoacompletado
El componente se llama FilterAutocompleteComponent y tiene como objetivo mostrar un campo de texto con sugerencias automáticas (autocompletado) utilizando Angular Material y el sistema de formularios reactivos de Angular.

### ¿Qué hace el componente?
Cuando un usuario comienza a escribir en el campo de texto, el componente filtra dinámicamente una lista de opciones predefinidas (One, Two, Three) y muestra solo aquellas que coinciden con lo que el usuario está escribiendo. Estas sugerencias aparecen como un pequeño menú desplegable debajo del campo.

### ¿Para qué sirve?
Este componente es útil en formularios donde el usuario debe seleccionar una opción, pero:
- La lista es muy larga.
- El usuario no recuerda exactamente las opciones disponibles.
- Se quiere mejorar la experiencia de búsqueda.

Por ejemplo: seleccionar un país, ciudad, producto, usuario, etc.


## 02. Tarjeta
Este componente de Angular, llamado CardComponent, utiliza Angular Material para mostrar una tarjeta (card) estilizada que presenta información estructurada y visualmente atractiva sobre un tema específico, en este caso, la raza de perro Shiba Inu.

### ¿Qué hace el componente?
El componente muestra una tarjeta con varios elementos comunes para presentar contenido destacado:
- Un encabezado con imagen de avatar, título y subtítulo.
- Una imagen principal que representa visualmente el contenido.
- Un texto descriptivo dentro del cuerpo de la tarjeta.
- Botones de acción que permiten interactuar, por ejemplo, para "Me gusta" o "Compartir".

### ¿Para qué sirve?
Este componente es útil para mostrar información resumida y atractiva de cualquier contenido que se quiera destacar en una interfaz, como:
- Perfiles de usuario o productos.
- Noticias o posts.
- Tarjetas de presentación de servicios o items.


## 03. Badge
Este componente de Angular, llamado BadgeComponent, utiliza Angular Material para mostrar un botón con una insignia (badge) que indica una cantidad, y permite al usuario ocultar o mostrar esa insignia mediante un clic.

### ¿Qué hace el componente?
El componente presenta un botón con un contador visible (una pequeña etiqueta numérica o "badge") que inicialmente muestra el número 7. Al hacer clic en el botón, la insignia se oculta o se muestra alternadamente.

### ¿Para qué sirve?
Este componente es ideal para interfaces donde quieras mostrar notificaciones numéricas (como mensajes nuevos, alertas o cantidad de elementos) de manera visual y que el usuario pueda ocultar o mostrar esa información fácilmente.


## 04. Boton Sheet
Este conjunto consta de dos componentes principales:
1. BottomSheetComponent: Contiene un botón que, al hacer clic, abre un panel deslizante (Bottom Sheet) desde la parte inferior de la pantalla.
2. BottomSheetOverviewComponent: Es el contenido que aparece dentro del Bottom Sheet, mostrando una lista de opciones o enlaces con los que el usuario puede interactuar.

### ¿Qué es un Bottom Sheet?
Un Bottom Sheet es un panel que aparece desde la parte inferior de la pantalla, mostrando contenido adicional sin cambiar completamente la vista actual. Es ideal para opciones rápidas, acciones o menús contextuales.

### ¿Para qué sirve?
Este patrón es muy útil para mostrar opciones rápidas sin saturar la interfaz principal. Por ejemplo:
- Compartir un archivo.
- Mostrar acciones relacionadas a un ítem.
- Menús contextuales que no requieren pantalla completa.
- Opciones adicionales para el usuario sin perder el contexto.


## 05. Boton
Este componente, llamado ButtonComponent, está diseñado para mostrar una sección con dos botones de tipo Mini Floating Action Button (Mini FAB), que son botones circulares pequeños con iconos, usados para acciones rápidas en la interfaz.

### ¿Qué hace el componente?
El componente presenta una sección con:
- Una etiqueta o título que indica que se trata de botones Mini FAB.
- Dos botones circulares pequeños con iconos representativos:
  - Un botón activo con el icono de menú.
  - Un botón deshabilitado con el icono de casa (home).

### ¿Para qué sirve?
Este tipo de botones Mini FAB es ideal para acciones frecuentes y secundarias que el usuario puede necesitar rápidamente, pero que no requieren ocupar mucho espacio visual, como abrir menús, volver a inicio, o activar funciones rápidas.


## 06. Boton toggle
Este componente de Angular permite al usuario seleccionar múltiples opciones entre un grupo de botones visuales. En este caso, simula la selección de ingredientes como "Harina", "Huevos" y "Azúcar", utilizando botones tipo toggle (de encendido/apagado).

### ¿Qué hace el componente?
- Muestra una sección con el título “Multiple selection”.
- Incluye un grupo de botones toggle donde el usuario puede activar o desactivar varios botones a la vez.
- Permite controlar si se muestra o no el indicador visual de selección múltiple mediante una función.

### ¿Para qué sirve?
Este tipo de interfaz es ideal cuando necesitas permitir que el usuario:
- Seleccione múltiples opciones visualmente claras.
- Active o desactive filtros, ingredientes, configuraciones o cualquier grupo de opciones independientes.
- Tenga una experiencia intuitiva en pantallas táctiles o móviles, gracias al estilo de botones grandes y separados.


## 07. Checkbox
Este componente permite al usuario interactuar con checkboxes simples y jerárquicos, útiles para tareas compuestas o listas con subtareas. Usa la nueva API de señales (signal) y valores computados (computed) de Angular para manejar el estado de manera reactiva y eficiente.

¿Qué hace el componente?
Muestra dos secciones:
1. Checkboxes simples:
  - Uno activo que se puede marcar/desmarcar.
  - Uno deshabilitado (no se puede interactuar con él).
2. Checkbox jerárquico (tarea principal + subtareas):
  - Un checkbox "padre" que refleja si todas las subtareas están completas.
  - Una lista de subtareas con checkboxes individuales.
  - Si solo algunas subtareas están marcadas, el checkbox padre entra en estado indeterminado.


## 08. Chips
Este componente ofrece un formulario interactivo que permite a los usuarios:
- Visualizar una lista de elementos (frutas en este caso) como chips.
- Agregar nuevas frutas escribiendo y presionando Enter o , (coma).
- Eliminar cualquier chip con un botón de eliminación.
- Sugerir frutas disponibles mediante autocompletado conforme el usuario escribe.

Es una forma moderna y visualmente limpia de manejar múltiples entradas en un solo campo.

### ¿Para qué sirve?
Este patrón es ideal para formularios donde:
- Se desea ingresar múltiples elementos, como etiquetas, categorías, correos, ingredientes, etc.
- Se necesita combinar opciones sugeridas con valores personalizados.
- Se busca una interfaz amigable, intuitiva y táctil.


## 09. Datepicker
Este componente presenta un campo de formulario con un input de fecha estilizado, que permite al usuario seleccionar un día desde un calendario desplegable. Está construido con Angular Material y ofrece una experiencia visual intuitiva y accesible.

### ¿Qué hace el componente?
- Muestra un campo de entrada (input) con una etiqueta (Choose a date).
- Permite seleccionar una fecha usando un calendario emergente (mat-datepicker).
- Muestra un texto de ayuda (MM/DD/YYYY) debajo del campo como formato de ejemplo.
- Incluye un botón con ícono para abrir el calendario manualmente.

### ¿Para qué sirve?
Este tipo de componente es ideal cuando necesitas que el usuario seleccione fechas de forma:
- Intuitiva y visual (mediante calendario).
- Compatible con dispositivos móviles.
- Accesible, con soporte para lectores de pantalla.
Se puede utilizar en formularios como:
- Registro o edición de usuarios.
- Reservas o eventos.
- Filtros por rango de fechas.

## 10. Dialogo
Este componente crea una interfaz interactiva donde el usuario:
- Escribe su nombre.
- Abre un diálogo emergente haciendo clic en un botón.
- Dentro del diálogo, escribe su animal favorito.
- Al cerrar el diálogo, se muestra la selección en pantalla.

El flujo está diseñado para mostrar cómo recoger información mediante un modal y luego reflejar esa información en el componente principal.

### ¿Qué hace el componente?
1. Formulario principal (DialogComponent):
  - Permite al usuario ingresar su nombre.
  - Al presionar el botón “Pick one”, se abre un diálogo (DialogOverviewExampleDialogComponent).
  - Si el usuario confirma el diálogo, se muestra su animal favorito debajo.

2. Diálogo modal (DialogOverviewExampleDialogComponent):
  - Muestra un saludo con el nombre ingresado.
  - Pide que el usuario ingrese su animal favorito.
  - Tiene dos botones:
    - No Thanks: cierra el diálogo sin enviar información.
    - Ok: cierra el diálogo y retorna el animal seleccionado.

