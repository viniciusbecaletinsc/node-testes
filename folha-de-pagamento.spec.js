import { calculaDescontos, somaHoraExtras } from './index'

describe('Testes dos cálculos de folha', () => {
  it('Deve retornar a soma das horas extras', () => {
    const soma = somaHoraExtras(1000, 100)

    expect(soma).toBe(1100)
  })

  it('Deve descontar o valor do salário', () => {
    const salarioComDesconto = calculaDescontos(1000, 100)

    expect(salarioComDesconto).toBe(900)
  })
})
