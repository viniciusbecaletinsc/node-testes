function somaHoraExtras(salario, valorHorasExtra) {
  return salario + valorHorasExtra;
}

function calculaDescontos(salario, descontos) {
  return salario - descontos;
}

function verifiqueSe(valor) {
  const assercoes = {
    ehExatamenteIgualA(esperado) {
      if (valor !== esperado) {
        // eslint-disable-next-line no-throw-literal
        throw {};
      }
    },
  };

  return assercoes;
}

function teste(titulo, funcaoDeTeste) {
  try {
    funcaoDeTeste();
    console.log(`${titulo} passou`);
  } catch (error) {
    console.error(`${titulo} falhou`);
  }
}

teste('somaHorasEstreas', () => {
  const esperado = 2500;
  const retornado = somaHoraExtras(2000, 500);

  verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});

teste('calculaDesconto', () => {
  const esperado = 1500;
  const retornado = calculaDescontos(2000, 500);

  verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});
