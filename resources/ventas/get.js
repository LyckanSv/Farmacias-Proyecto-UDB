
var query = {"Codigo":{$in:this.productos}};
var query2 = {"numeroSucursal":{$in:this.sucursales}}

dpd.productos.get(query, function (result) {
  this.medicamentos = result
});

dpd.sucursales.get(query2, function (result) {
  this.farmacias = result
});
