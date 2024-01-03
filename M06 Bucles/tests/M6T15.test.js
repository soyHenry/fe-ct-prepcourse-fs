const obtenerDiaSemana = require('../ejercicios/15');

describe('obtenerDiaSemana', () => {
  test("should return 'Lunes' when passed 1", () => {
    expect(obtenerDiaSemana(1)).toBe('Lunes');
  });

  test("should return 'Martes' when passed 2", () => {
    expect(obtenerDiaSemana(2)).toBe('Martes');
  });

  test("should return 'Miercoles' when passed 3", () => {
    expect(obtenerDiaSemana(3)).toBe('Miercoles');
  });

  test("should return 'Jueves' when passed 4", () => {
    expect(obtenerDiaSemana(4)).toBe('Jueves');
  });

  test("should return 'Viernes' when passed 5", () => {
    expect(obtenerDiaSemana(5)).toBe('Viernes');
  });

  test("should return 'Sabado' when passed 6", () => {
    expect(obtenerDiaSemana(6)).toBe('Sabado');
  });

  test("should return 'Domingo' when passed 7", () => {
    expect(obtenerDiaSemana(7)).toBe('Domingo');
  });

  test("should return 'No es un dia de la semana' when passed 0", () => {
    expect(obtenerDiaSemana(0)).toBe('No es un dia de la semana');
  });

  test("should return 'No es un dia de la semana' when passed 8", () => {
    expect(obtenerDiaSemana(8)).toBe('No es un dia de la semana');
  });

  test("should return 'No es un dia de la semana' when passed a string", () => {
    expect(obtenerDiaSemana('hola')).toBe('No es un dia de la semana');
  });
});
