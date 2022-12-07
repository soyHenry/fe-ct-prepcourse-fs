/* eslint-disable no-undef */
const {
   crearGato,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   nuevoUsuario,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
} = require('../homework');

describe('JAVASCRIPT IV', function () {
   describe('crearGato(nombre, edad)', function () {
      it('Debe crear un nuevo objeto con las propiedades "nombre", y "edad"', function () {
         expect(crearGato('Snowball', 1).nombre).toBe('Snowball');
         expect(crearGato('Snowball', 1).edad).toBe(1);
         expect(crearGato('Snowball II', 5).nombre).toBe('Snowball II');
         expect(crearGato('Snowball II', 5).edad).toBe(5);
      });
      it('Debe crear una propiedad "meow" que retorna el string "Meow!"', function () {
         expect(crearGato('Snowball III', 2).meow()).toBe('Meow!');
      });
   });

   describe('nuevoUsuario(nombre, email, password)', function () {
      it('Debe devolver un nuevo objeto con las propiedades "nombre", "email" y "password"', function () {
         const user = {
            nombre: 'Jhon',
            email: 'jhon@email.com',
            password: 'correcthorsebatterystaple',
         };
         expect(nuevoUsuario(user.nombre, user.email, user.password)).toEqual(
            user
         );
         const user2 = {
            nombre: 'Samuel',
            email: 'samuel@email.com',
            password: 'password',
         };
         expect(
            nuevoUsuario(user2.nombre, user2.email, user2.password)
         ).toEqual(user2);
      });
   });

   describe('agregarPropiedad(objeto, propiedad)', function () {
      it('Debe agregar la propiedad al objeto con valor null', function () {
         const object = {
            x: 1,
            y: 2,
         };
         const updatedObject = {
            x: 1,
            y: 2,
            z: null,
         };
         expect(agregarPropiedad(object, 'z')).toEqual(updatedObject);
      });
   });

   describe('invocarMetodo(objeto, metodo)', function () {
      it('Debe invocar el método del objeto', function () {
         const object = {
            x: 0,
            incrementX: function () {
               this.x++;
            },
         };
         invocarMetodo(object, 'incrementX');
         expect(object.x).toBe(1);
      });
   });

   describe('multiplicarNumeroDesconocidoPorCinco(objetoMisterioso)', function () {
      it('Debe retornar el numeroMisterioso multiplicado por 5', function () {
         const mysteryBox = {
            numeroMisterioso: 999,
         };
         expect(multiplicarNumeroDesconocidoPorCinco(mysteryBox)).toBe(4995);
         mysteryBox.numeroMisterioso = -5;
         expect(multiplicarNumeroDesconocidoPorCinco(mysteryBox)).toBe(-25);
      });
   });

   describe('eliminarPropiedad(objeto, propiedad)', function () {
      it('Debe eliminar la propiedad del objeto', function () {
         const updatedObject = {
            x: 1,
            y: 2,
         };
         const object = {
            x: 1,
            y: 2,
            z: null,
         };
         expect(eliminarPropiedad(object, 'z')).toEqual(updatedObject);
      });
   });

   describe('tieneEmail(objetoUsuario)', function () {
      it('Debe retornar True si el objetoUsuario posee un valor definido en la propiedad "email"', function () {
         expect(
            tieneEmail({ usernombre: 'Samuel', email: 'samuel@email.com' })
         ).toEqual(true);
      });
      it('Debe retornar False si el objetoUsuario NO posee un valor definido en la propiedad "email"', function () {
         expect(tieneEmail({ usernombre: 'Jhon', email: null })).toEqual(false);
         expect(tieneEmail({ usernombre: 'Antonio' })).toEqual(false);
      });
   });

   describe('tienePropiedad(objeto, propiedad)', function () {
      it('Debe retornar True si el objeto posee una propiedad con el nombre del parámetro', function () {
         const obj = {
            x: true,
         };
         expect(tienePropiedad(obj, 'x')).toEqual(true);
      });
      it('Debe retornar False si el objeto NO posee una propiedad con el nombre del parámetro', function () {
         const obj = {
            x: true,
         };
         expect(tienePropiedad(obj, 'y')).toEqual(false);
      });
   });

   describe('verificarPassword(user, password)', function () {
      it('Debe retornar True si la contraseña es correcta', function () {
         const user = {
            password: 'Me encanta JS!',
         };
         const password = 'Me encanta JS!';
         expect(verificarPassword(user, password)).toBe(true);
      });
      it('Debe retornar False si la contraseña es incorrecta', function () {
         const user = {
            password: 'Me encanta JS!',
         };
         const password = 'Hacker time!';
         expect(verificarPassword(user, password)).toBe(false);
      });
   });

   describe('actualizarPassword(objetoUsuario, password)', function () {
      it('Debe devolver al usuario con la contraseña actualizada', function () {
         const user = {
            password: 'Me encanta JS!',
         };
         const password = 'Me encanta JS mucho más!';
         expect(actualizarPassword(user, password).password).toBe(password);
      });
   });

   describe('agregarAmigo(objetoUsuario, nuevoAmigo)', function () {
      it('Debe agregar el nuevo amigo al final del arreglo de una propiedad', function () {
         const user = {
            amigos: ['Ben', 'Austen', 'Ryan', 'Mike', 'Young'],
         };
         const newFriend = 'Shay';
         expect(agregarAmigo(user, 'Shay').amigos.pop()).toBe('Shay');
      });
   });

   describe('pasarUsuarioAPremium(objetoMuchosUsuarios)', function () {
      it("Debe retornar un arreglo donde todos los usuarios tengan el valor True en su propiedad 'esPremium'", function () {
         const users = [
            { esPremium: false },
            { esPremium: false },
            { esPremium: false },
            { esPremium: false },
            { esPremium: false },
         ];
         const updatedUsers = [
            { esPremium: true },
            { esPremium: true },
            { esPremium: true },
            { esPremium: true },
            { esPremium: true },
         ];
         expect(pasarUsuarioAPremium(users)).toEqual(updatedUsers);
      });
   });

   describe('sumarLikesDeUsuario(objetoUsuario)', function () {
      it('Debe retornar la suma de los likes de todos los post', function () {
         const user = {
            usernombre: 'Jhon Doe',
            password: 'JavaScript es genial!',
            posts: [
               {
                  id: '1',
                  title: 'Aventuras en JS!',
                  likes: 10,
               },
               {
                  id: '2',
                  title: 'Soy Henry!',
                  likes: 100,
               },
               {
                  id: '3',
                  title: 'Qué es un JavaScript?',
                  likes: 35,
               },
               {
                  id: '4',
                  title: 'JS Objects for Dummies',
                  likes: 42,
               },
               {
                  id: '5',
                  title: 'Educación online',
                  likes: 99,
               },
            ],
         };
         expect(sumarLikesDeUsuario(user)).toBe(286);
      });
   });

   describe('agregarMetodoCalculoDescuento(objetoProducto)', function () {
      const storeItem = {
         precio: 80,
         porcentajeDeDescuento: 0.1,
      };
      const storeItem2 = {
         precio: 5,
         porcentajeDeDescuento: 0.5,
      };

      it("Debe agregar la propiedad 'calcularPrecioDescuento' al objetoProducto", function () {
         expect(
            agregarMetodoCalculoDescuento(storeItem).calcularPrecioDescuento
         ).toBeDefined();
         expect(
            agregarMetodoCalculoDescuento(storeItem2).calcularPrecioDescuento
         ).toBeDefined();
      });
      it('Debe devolver el precio con descuento del producto', function () {
         expect(
            agregarMetodoCalculoDescuento(storeItem).calcularPrecioDescuento()
         ).toBe(72);
         expect(
            agregarMetodoCalculoDescuento(storeItem2).calcularPrecioDescuento()
         ).toBe(2.5);
      });
   });
});
