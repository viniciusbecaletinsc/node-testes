import Carrinho from './carrinho'
import Item from './item'

describe('Teste do carrinho', () => {
  it('Deve inicializar vazio', () => {
    const carrinho = new Carrinho()

    expect(carrinho.itens.length).toBe(0)
    expect(carrinho.subtotal).toBe(null)
    expect(carrinho.frete).toBe(null)
    expect(carrinho.total).toBe(null)
  })

  it('Deve adicionar um item', () => {
    const carrinho = new Carrinho()
    const item = new Item('Maçã', 1, 3)

    carrinho.adiciona(item)

    expect(carrinho.itens.length).toBe(1)
    expect(carrinho.itens).toContain(item)
  })

  it('Deve adicionar o frete', () => {
    const carrinho = new Carrinho()

    carrinho.adicionaFrete(15)

    expect(carrinho.frete).toBe(15)
  })

  it('Deve calcular o total', () => {
    const carrinho = new Carrinho()
    const item1 = new Item('Maçã', 1, 3)
    const item2 = new Item('Banana', 1.4, 5)

    carrinho.adiciona(item1)
    carrinho.adiciona(item2)

    carrinho.adicionaFrete(15)

    const total = carrinho.calculaTotal()

    expect(total).toBeCloseTo(25)
  })

  it('Deve retornar um erro ao tentar finalizar a compra sem itens no carrinho', () => {
    const carrinho = new Carrinho()

    expect(() => carrinho.finalizaCompra()).toThrow('Carrinho de compras vazio')
  })

  it('Deve finalizar a compra', () => {
    const carrinho = new Carrinho()
    const item1 = new Item('Maçã', 1, 3)
    const item2 = new Item('Banana', 1.4, 5)

    carrinho.adiciona(item1)
    carrinho.adiciona(item2)

    carrinho.adicionaFrete(15)

    const carrinhoFinalizado = carrinho.finalizaCompra()

    expect(carrinhoFinalizado.subtotal).toBeCloseTo(10)
    expect(carrinhoFinalizado.frete).toBeCloseTo(15)
    expect(carrinhoFinalizado.total).toBeCloseTo(25)
  })
})
