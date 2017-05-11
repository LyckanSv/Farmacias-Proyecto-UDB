var query = {"id":{$in:this.ciudades}};

dpd.ciudades.get(query, function (result) {
  this.pais = result
});

