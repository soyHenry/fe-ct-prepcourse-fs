/* eslint-disable no-undef */
const {
   esFechaValida,
   esMayorDeEdad,
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
   esAnagrama
} = require('../Ejercicios Extra');

describe('EJERCICIOS EXTRA', function () {

   describe("esFechaValida", () => {
      it("Debe retornar true para una fecha valida", () => {
         expect(esFechaValida(new Date("2022-01-01"))).toBe(true);
      });

      it("Debe retornar false para una fecha invalida", () => {
         expect(esFechaValida("2022-01-01")).toBe(false);
      });

      it("Debe retornar false para un objeto de tipo fecha invalido", () => {
         expect(esFechaValida(new Date("invalid"))).toBe(false);
      });
   });

   describe("esMayorDeEdad", () => {
      it("Debe retornar true si la persona tiene 18 años cumplidos", () => {
         const fechaNacimiento = new Date("2003-01-01");
         expect(esMayorDeEdad(fechaNacimiento)).toBe(true);
      });
      
      it("Debe retornar false si la persona es Menor de edad", () => {
      const fechaNacimiento = new Date("2010-01-01");
      expect(esMayorDeEdad(fechaNacimiento)).toBe(false);
      });
      
      it("Debe retornar true si la persona es Mayor de edad por un día", () => {
      const fechaNacimiento = new Date("2003-12-31");
      expect(esMayorDeEdad(fechaNacimiento)).toBe(true);
      });
      
      it("Debe retornar false si la Fecha de nacimiento es del futuro", () => {
      const fechaNacimiento = new Date("2025-01-01");
      expect(esMayorDeEdad(fechaNacimiento)).toBe(false);
      });
   });

   describe("esAnagrama", () => {
      it('anagrama de palabras iguales', () => {
         expect(esAnagrama('hola', 'hola')).toBe(true);
      });
      
      it('anagrama de palabras diferentes', () => {
         expect(esAnagrama('hola', 'aloh')).toBe(true);
      });
      
      it('palabras con diferente longitud', () => {
         expect(esAnagrama('hola', 'holaa')).toBe(false);
      });
      
      it('palabras con diferente cantidad de letras iguales', () => {
         expect(esAnagrama('hola', 'holb')).toBe(false);
      });
      
      it('palabras con espacios', () => {
         expect(esAnagrama('hola mundo', 'mundo hola')).toBe(true);
      });
      
      it('palabras con mayúsculas y minúsculas', () => {
         expect(esAnagrama('Hola', 'aloh')).toBe(true);
      });
      
      it('palabras con caracteres especiales', () => {
         expect(esAnagrama('hola!', '!aloh')).toBe(true);
      });
      
      it('palabras vacías', () => {
         expect(esAnagrama('', '')).toBe(true);
      });
   });


   describe('deObjetoAarray(objeto)', function () {
      it('Debe retornar un arreglo donde cada sub-arreglo contiene el par clave:valor del objeto', function () {
         expect(deObjetoAarray({ x: 1, y: 2 })).toEqual([
            ['x', 1],
            ['y', 2],
         ]);
         expect(deObjetoAarray({ x: 10, y: 25 })).toEqual([
            ['x', 10],
            ['y', 25],
         ]);
      });
   });
   describe('numberOfCharacters(string)', function () {
      it('Debe retornar un objeto donde cada par clave:valor sea una letra:cantidadDeRepeticiones del string recibido', function () {
         expect(numberOfCharacters('sktpwrroqstkrpwwsqtqopwktsd')).toEqual({
            s: 4,
            k: 3,
            t: 4,
            p: 3,
            w: 4,
            r: 3,
            o: 2,
            q: 3,
            d: 1,
         });
         expect(numberOfCharacters('adsjfdsfsfjsdjfhacabcsbajda')).toEqual({
            a: 5,
            b: 2,
            c: 2,
            d: 4,
            f: 4,
            h: 1,
            j: 4,
            s: 5,
         });
      });
   });
   describe('capToFront(string)', function () {
      it('Debe enviar todas las letras en mayúsculas al comienzo del string', function () {
         expect(capToFront('soyHENRY')).toEqual('HENRYsoy');
         expect(capToFront('DESArrollaDOR')).toEqual('DESADORrrolla');
      });
   });
   describe('asAmirror(frase)', function () {
      it('Debe transformar la frase en una frase espejo.', function () {
         expect(asAmirror('I love you so much!')).toBe('I evol uoy os !hcum');
         expect(asAmirror('The Henry Challenge is close!')).toBe(
            'ehT yrneH egnellahC si !esolc'
         );
      });
   });
   describe('capicua(numero)', function () {
      it('Debe retornar el string esperado dependiendo si el número es o no capicúa.', function () {
         expect(capicua(12321)).toEqual('Es capicua');
         expect(capicua(1111)).toEqual('Es capicua');
         expect(capicua(105217)).toEqual('No es capicua');
         expect(capicua(7878700)).toEqual('No es capicua');
      });
   });
   describe('deleteAbc(string)', function () {
      it('Debe retornar el mismo string, pero eliminando las letras "a", "b" y "c"', function () {
         expect(deleteAbc('abcefgh')).toEqual('efgh');
         expect(deleteAbc('abc')).toEqual('');
         expect(deleteAbc('plural')).toEqual('plurl');
         expect(deleteAbc('limon')).toEqual('limon');
      });
   });
   describe('sortArray(arrayOfStrings)', function () {
      it('Debe retornar un nuevo arreglo con los elementos en orden de crecimiento a partir de sus longitudes', function () {
         expect(sortArray(['You', 'are', 'beautiful', 'looking'])).toEqual([
            'You',
            'are',
            'looking',
            'beautiful',
         ]);
         expect(sortArray(['pera', 'manzana', 'alcaucil', 'papa'])).toEqual([
            'pera',
            'papa',
            'manzana',
            'alcaucil',
         ]);
      });
   });
   describe('buscoInterseccion(array1, array2)', function () {
      it('Debe retornar un arreglo con los elementos en común de cada arreglo. Si no hay elementos en común, retornar un arreglo vacío', function () {
         expect(buscoInterseccion([1, 2, 3], [1, 5, 8, 3])).toEqual([1, 3]);
         expect(buscoInterseccion([7, 23, 4], [23, 70])).toEqual([23]);
         expect(buscoInterseccion([1, 20, 3], [22, 5, 7])).toEqual([]);
      });
   });
});
