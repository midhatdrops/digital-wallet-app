const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório!";
mongoose.Error.messages.String.enum =
  "'{VALUE}' não é válido para o atributo '{PATH}' ";

module.exports = mongoose.connect('mongodb://localhost:27017/mymoney', {
  useNewUrlParser: true,
});
