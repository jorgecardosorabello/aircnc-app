// importando axios
import axios from 'axios';
// crio a variável chamada api
// e dentro do objeto é caminho do nosso backend feito la no insomnia
const api = axios.create({
  baseURL: 'http://localhost:3333'
});
// depois de importada a api e declarada a constante, eu preciso exportar ele:
export default api;