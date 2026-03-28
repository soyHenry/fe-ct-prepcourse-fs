function agregarMetodoCalculoDescuento(objetoProducto) {
  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Tu codigo:
  objetoProducto.calcularPrecioDescuento = function () {
    return this.precio - this.precio * this.porcentajeDeDescuento;
  };
  return objetoProducto;
}

module.exports = agregarMetodoCalculoDescuento;
