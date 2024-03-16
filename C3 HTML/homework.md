![HenryLogo](../assets/logoBannerHenry.png)

# **HOMEWORK 03 | HTML**

## **📌 INSTRUCCIONES**

En esta primera actividad, exploraremos los primeros pasos en el mundo del desarrollo web. Comenzaremos creando nuestro primer archivo HTML, utilizando las etiquetas básicas que hemos explorado en clase para estructurar y dar forma a la página web.

Una vez que hayas creado dicho archivo HTML, inicializaremos un repositorio local y realizaremos commits para finalmente subir nuestro trabajo a GitHub.

---

</br >

## **CREACIÓN DEL ARCHIVO HTML**

### **📍EJERCICIO 01**

En tu editor Visual Studio Code, abre la carpeta donde deseas guardar tu trabajo.

---

</br >

### **📍EJERCICIO 02**

Crea un archivo en la carpeta y dale el nombre **index.html**

---

</br >

### **📍EJERCICIO 03**

Una vez tengas creado tu archivo, sea manualmente o utilizando atajos, escribe la estructura básica del documento HTML. Puedes usar la siguiente si lo deseas:

```html
<!DOCTYPE html>
<html lang="es">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Mi Primer Sitio Web</title>
   </head>
   <body>
      <!-- Contenido de la página va aquí-->
   </body>
</html>
```

---

</br >

## **AGREGAR CONTENIDO A NUESTRA PÁGINA WEB**

Ahora que has creado tu archivo y su estructura básica, ya es hora de comenzar a agregar contenido. Aquí te pones manos a la obra por tu cuenta, pero vamos a dejarte unos TIPs para continuar:

-  Recuerda establecer la estructura de bloques (header, main, section, footer, etc.)
-  Recuerda tomar nota y tener siempre a mano cuáles son los atributos de cada etiqueta, por ejemplo, el atributo **“src”** de la etiqueta **img**.
-  Dado que aún no vamos a agregarle estilos a nuestra página, si quieres ayudarte para demarcar secciones puedes aprovechar la etiqueta `<hr />`
-  Intenta utilizar los elementos correspondientes en cada caso:

   -  `<p>` para los párrafos
   -  `<div>` para agrupar elementos
   -  `<ul>/<ol>` para hacer listas

   Utilizar los elementos correctos luego nos ayudará al momento de dar estilos.

---

</br >

## **SUBIR NUESTRO TRABAJO A GITHUB**

Finalmente, prepararemos nuestra carpeta para poder subir este trabajo a Github. Para ello recreamos los pasos que vimos en módulos anteriores.

1. Abre la terminal en la carpeta donde tienes tu archivo html y ejecuta el comando

```bash
git init
```

2. Ejecuta los siguientes comandos para añadir todos los archivos al repositorio y realizar el primer commit:

```bash
git add .
git commit -m "First commit: HTML file"
```

⚠️ _Recuerda que el mensaje del commit puede ser cualquiera. Se recomienda en lo posible que sea descriptivo y por convención escrito en inglés_

3. Ve a Github y crea un nuevo repositorio.
4. Sigue las instrucciones proporcionadas en Github para conectar tu repositorio local con el repositorio remoto allí creado.
5. Una vez tengas creado tu repositorio remoto y vinculado con tu repositorio local, ejecuta el siguiente comando:

```bash
git push
```

6. Visita tu repositorio en Github para asegurarte de que los cambios se hayan subido adecuadamente.
