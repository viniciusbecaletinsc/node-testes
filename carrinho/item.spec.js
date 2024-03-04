import Item from './item'

describe('Teste dos itens', () => {
  it('Deve ter 3 campos, nome, valor e quantidade', () => {
    const item = new Item('Maçã', 1, 3)

    expect(item.nome).toBe('Maçã')
    expect(item.valor).toBe(1)
    expect(item.quantidade).toBe(3)
  })

  it('Deve calcular o valor total do item', () => {
    const item = new Item('Maçã', 0.1, 10)

    expect(item.pegaValorTotalItem()).toBeCloseTo(1)
  })
})
