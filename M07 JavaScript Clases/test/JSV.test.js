/* eslint-disable no-undef */
const {
   crearUsuario,
   agregarMetodoPrototype,
   agregarStringInvertida,
} = require('../Ejercicio 01');

const {
   crearInstanciaPersona,
   agregarMetodo,
   Persona,
} = require('../Ejercicio 02');

describe('JAVASCRIPT V', function () {
   describe('EJERCICIO 01', function () {
      describe('crearUsuario()', function () {
         it('Debe retornar una clase con las propiedades "usuario", "nombre", "email" y "password" definidas', function () {
            const Usuario = crearUsuario();
            const user = new Usuario(
               'jssamuel',
               'Samuel',
               'samuel@email.com',
               'LoveJS'
            );
            expect(user.usuario).toBe('jssamuel');
            expect(user.nombre).toBe('Samuel');
            expect(user.email).toBe('samuel@email.com');
            expect(user.password).toBe('LoveJS');
         });
         it('Debe retornar una clase con un método saludar que retorne el string correspondiente', function () {
            const Usuario = crearUsuario();
            const user = new Usuario(
               'jssamuel',
               'Samuel',
               'samuel@email.com',
               'LoveJS'
            );
            expect(user.saludar()).toBe('Hola, mi nombre es Samuel');
         });
      });

      describe('agregarMetodoPrototype(Constructor)', function () {
         it('Debe agregar un método "saludar" al contructor de Usuario', function () {
            function Test() {
               this.test = true;
            }
            agregarMetodoPrototype(Test);
            const test = new Test();
            expect(test.saludar()).toBe('Hello World!');
         });
      });

      describe('agregarStringInvertida(StringPrototype)', function () {
         it('Debe agregar un método al objeto global "String", invirtiendo la cadena de texto', function () {
            agregarStringInvertida();
            const str = 'Hello';
            expect(str.reverse()).toBe('olleH');
         });
      });
   });

   describe('EJERCICIO 02', function () {
      describe('Clase Persona', function () {
         it('Debe crear una instancia "Persona" con las propiedades "nombre", "apellido", "edad" y "domicilio"', function () {
            const nuevaPersona = new Persona(
               'Juan',
               'Pérez',
               22,
               'Saavedra 123'
            );
            expect(nuevaPersona).toBeInstanceOf(Persona);
            expect(nuevaPersona.nombre).toBe('Juan');
            expect(nuevaPersona.apellido).toBe('Pérez');
            expect(nuevaPersona.edad).toBe(22);
            expect(nuevaPersona.domicilio).toBe('Saavedra 123');
         });
         it('"Persona" debe tener un método "detalle" que devuelva la información de la persona en forma de objeto', function () {
            const nuevaPersona = new Persona(
               'Juan',
               'Pérez',
               22,
               'Saavedra 123'
            );
            expect(nuevaPersona.detalle()).toStrictEqual({
               nombre: 'Juan',
               apellido: 'Pérez',
               edad: 22,
               domicilio: 'Saavedra 123',
            });
         });
      });

      describe('crearInstanciaPersona()', function () {
         it('Debe retornar una nueva instancia de "Persona"', function () {
            expect(
               crearInstanciaPersona('Juan', 'Pérez', 22, 'Saavedra 123')
            ).toBeInstanceOf(Persona);
         });
      });

      describe('agregarMetodo(Persona)', function () {
         it('"Persona" debe tener un método "datos" que retorne la información correspondiente', function () {
            agregarMetodo();
            const persona = new Persona('Juan', 'Pérez', 22, 'Saavedra 123');
            persona.nombre === 'Juan' && persona.edad === 22
               ? expect(persona.datos()).toBe('Juan, 22 años')
               : expect(persona.datos()).toBe('undefined, undefined años');
         });
      });
   });
});
