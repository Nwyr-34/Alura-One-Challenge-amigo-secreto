# Alura-One-Challenge-Amigo-Secreto

Este proyecto es parte del **Challenge de Alura Oracle One** para fortalecer las habilidades en lógica de programación. El objetivo es desarrollar una aplicación interactiva que permita gestionar una lista de amigos y realizar un sorteo de "Amigo Secreto".

## Funcionalidades

1. **Agregar amigos**:
   - Los usuarios pueden ingresar nombres de amigos en un campo de texto y agregarlos a una lista.
   - Si el campo está vacío, se muestra un mensaje de alerta solicitando un nombre.

2. **Mostrar lista de amigos**:
   - Los nombres ingresados se muestran en una lista dinámica en la interfaz.

3. **Sorteo de amigo secreto**:
   - Al presionar el botón "Sortear amigo", se selecciona aleatoriamente un amigo de la lista.
   - El amigo sorteado se muestra en un mensaje de color azul.
   - El amigo sorteado se elimina automáticamente de la lista para evitar que sea sorteado nuevamente.

4. **Eliminación automática**:
   - Una vez que un amigo es sorteado, se elimina tanto del array interno como de la lista visual en el DOM.

## Estructura del Proyecto

El proyecto consta de los siguientes archivos principales:

- **`index.html`**: Contiene la estructura HTML de la aplicación.
- **`style.css`**: Define los estilos visuales de la aplicación, incluyendo el color azul para el mensaje del amigo sorteado.
- **`app.js`**: Contiene la lógica de la aplicación, incluyendo las funciones para agregar amigos, realizar el sorteo y actualizar la lista.
- **`README.md`**: Documentación del proyecto.

## Cómo Ejecutar el Proyecto

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu-usuario/Alura-One-Challenge-amigo-secreto.git

2. Abre el archivo `index.html` en tu navegador web.

3. Interactúa con la aplicación:
   - Ingresa nombres en el campo de texto y presiona "Añadir" para agregarlos a la lista.
   - Presiona "Sortear amigo" para seleccionar un amigo al azar y eliminarlo de la lista.

## Tecnologías Utilizadas

- **HTML5**: Para la estructura del contenido.
- **CSS3**: Para los estilos visuales.
- **JavaScript**: Para la lógica de la aplicación.

## Captura de Pantalla

![Captura de pantalla de la aplicación Amigo Secreto](https://media.discordapp.net/attachments/1246835244141908090/1351589688506454117/image.png?ex=67daed7d&is=67d99bfd&hm=ad7a8aa8c0966e064339f42cd52ee71a2cc5763ffce3f6c13f1e8099a9032504&=&format=webp&quality=lossless&width=957&height=781)

## Mejoras Realizadas

- Modularización del código en funciones específicas para mejorar la legibilidad y el mantenimiento.
- Implementación de la eliminación automática de amigos sorteados tanto del array como del DOM.
- Estilo visual mejorado para el mensaje del amigo sorteado (color azul).

## Próximas Mejoras

- Agregar validación para evitar nombres duplicados en la lista.
- Implementar la funcionalidad para reiniciar la lista de amigos.
- Mejorar la accesibilidad para usuarios con discapacidades.


