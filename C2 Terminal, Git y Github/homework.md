![HenryLogo](../Assets//logoBannerHenry.png)

# **HOMEWORK 02 | COMANDOS - GIT - GITHUB**

## **📋 PRE-REQUISITOS**

1. Crear una cuenta en [**GITHUB**](https://www.github.com/).
2. Si usas una computadora con Windows, puedes instalar la terminal de comandos [**GIT-BASH**](https://git-for-windows.github.io/).
3. Si usas Mac, `git` viene pre-instalado y puedes acceder desde la terminal pulsando `⌘+Espacio` y escribiendo "_terminal_". Puedes asegurarte de que git está instalado escribiendo "_which git_" en la terminal y pulsando "**Enter**". Si aparece la ruta de un archivo significa que todo está correcto. En algunas ocasiones, podrías ser redireccionado a la descarga de la línea de comandos de Xcode, sigue las instrucciones.
   -  Si usas Linux, tal vez necesites instalar git accediendo a tu terminal e ingresado `apt-get install git`
   -  Si tienes problemas instalando Git, este [**recurso**](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) puede servir de ayuda.

---

</br >

## **📌 INSTRUCCIONES**

### **📍 COMANDOS PARA LA TERMINAL**

Utilicemos los principales comandos de nuestra terminal para realizar algunas acciones básicas.

"**List**" o "**Directory**": nos permite ver el contenido del directorio en el que nos encontramos.

```bash
LINUX   $ ls
WINDOWS $ dir
```

"**Change Directory**": nos permite movernos a un directorio a otro.

```bash
        $ cd [nombreDeLaCarpeta]  -----> PARA INGRESAR A UN DIRECTORIO
        $ cd ..                   -----> PARA VOLVER AL DIRECTORIO ANTERIOR
```

"**Make Directory**": crea una nueva carpeta en el directorio donde nos encontramos actualmente.

```bash
        $ mkdir [nombreDeLaCarpeta]
```

"**Touch**" o "**TYPE NUL**": creará un nuevo archivo.

```bash
LINUX   $ touch [nombreDelArchivo]
WINDOWS $ type nul > [nombreDelArchivo]
```

> **[NOTA]:** Recuerda que la terminal de gitbash reconoce los comandos de linux.

"**Remove**": elimina permanentemente un archivo.

```bash
        $ rm [nombreDelArchivo]
```

> **⚠️ [NOTA]:** ¡CUIDADO! Esto traspasa cualquier "papelera de reciclaje" que exista en el sistema y elimina los archivos PERMANENTEMENTE. Esto no eliminará carpetas. Necesitamos un comando especial para eso.

---

</br >

### **📍 EJERCICIO 01**

Debes generar un repositorio en GitHub. Para esto ingresa a [**GITHUB**](https://github.com/) y logueate con tu usuario y contraseña.

El objetivo de este ejercicio es que crees un nuevo repositorio llamado "_**RepositorioHenry**_".

---

</br >

### **📍 EJERCICIO 02**

En este ejercicio debes ingresar dentro del repositorio y crear una nueva carpeta con el nombre "_CarpetaHenry_". Utiliza los comandos de más arriba.

---

</br >

### **📍 EJERCICIO 03**

Ingresa a la carpeta que acabas de crear utilizando los comandos ya aprendidos.

---

</br >

### **📍 EJERCICIO 04**

Ahora debes crear un archivo llamado "**_primerArchivo.txt_**". Revisa el comando correspondiente a partir del sistema operativo que utilices (Linux o Windows).

</br >

## **💻 SUBE TUS AVANCES**

Te invitamos, cada vez que termines una homework, a que subas tus avances a tu repositorio. ¿Recordemos cómo hacer esto?

Deberás ejecutar estos comandos:

```bash
git add .
// Este comando te permitirá guardar tus cambios en Git.

git commmit -m "tuMensaje"
// Este comando te permitirá darle un título a tus cambios.

git push
// Este comando subirá tus cambios al repositorio de GitHub.
```

Recuerda que todos estos comandos son necesarios. Si tienes alguna duda, ¡te invitamos a que repases estos comandos en el Prep Course!