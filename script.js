const form = document.getElementById('form-gasto');
const lista = document.querySelector('#lista-gastos tbody');
const totalSpan = document.getElementById('total');

let total = 0;

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const descricao = document.getElementById('descricao').value;
  const valor = parseFloat(document.getElementById('valor').value);
  const categoria = document.getElementById('categoria').value;

  const tr = document.createElement('tr');

  const tdDescricao = document.createElement('td');
  tdDescricao.textContent = descricao;

  const tdValor = document.createElement('td');
  tdValor.textContent = valor.toFixed(2);
  if (valor > 100) {
    tdValor.classList.add('valor-alto');
  }

  const tdCategoria = document.createElement('td');
  tdCategoria.textContent = categoria;

  const tdAcoes = document.createElement('td');
  const btnExcluir = document.createElement('button');
  btnExcluir.textContent = 'Excluir';
  btnExcluir.onclick = function () {
    total -= valor;
    totalSpan.textContent = total.toFixed(2);
    tr.remove();
  };
  tdAcoes.appendChild(btnExcluir);

  tr.appendChild(tdDescricao);
  tr.appendChild(tdValor);
  tr.appendChild(tdCategoria);
  tr.appendChild(tdAcoes);

  lista.appendChild(tr);

  total += valor;
  totalSpan.textContent = total.toFixed(2);

  form.reset();
});