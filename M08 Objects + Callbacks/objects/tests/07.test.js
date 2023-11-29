const objetoAnidado = require("../ejercicios/07");

// Test that the object and its properties exist
test("objetoAnidado exists", () => {
  expect(objetoAnidado).toBeDefined();
});

test("objetoAnidado has propiedad1", () => {
  expect(objetoAnidado.propiedad1).toBeDefined();
});

test("objetoAnidado has propiedad2", () => {
  expect(objetoAnidado.propiedad2).toBeDefined();
});

test("objetoAnidado has propiedad3", () => {
  expect(objetoAnidado.propiedad3).toBeDefined();
});

// Test that the nested properties exist
test("objetoAnidado.propiedad3 has propiedad4", () => {
  expect(objetoAnidado.propiedad3.propiedad4).toBeDefined();
});

test("objetoAnidado.propiedad3 has propiedad5", () => {
  expect(objetoAnidado.propiedad3.propiedad5).toBeDefined();
});

test("objetoAnidado.propiedad3 has propiedad6", () => {
  expect(objetoAnidado.propiedad3.propiedad6).toBeDefined();
});

// Test that the method returns the correct value
test('objetoAnidado.propiedad3.propiedad6.propiedad9 returns "valor7"', () => {
  expect(objetoAnidado.propiedad3.propiedad6.propiedad9()).toBe("valor7");
});
