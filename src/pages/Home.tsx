import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import styles from './Home.module.css'
import { CoffeeInfo, MenuCard } from '../components/MenuCard'

const coffees: CoffeeInfo[] = [
  {
    id: 'expresso-tradicional',
    imgSrc: '/src/assets/coffees/expresso-tradicional.png',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 990,
    tags: ['tradicional']
  },
  {
    id: 'expresso-americano',
    imgSrc: '/src/assets/coffees/expresso-americano.png',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 990,
    tags: ['tradicional']
  },
  {
    id: 'expresso-cremoso',
    imgSrc: '/src/assets/coffees/expresso-cremoso.png',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 990,
    tags: ['tradicional']
  },
  {
    id: 'expresso-gelado',
    imgSrc: '/src/assets/coffees/expresso-gelado.png',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 990,
    tags: ['tradicional', 'gelado']
  },
  {
    id: 'cafe-com-leite',
    imgSrc: '/src/assets/coffees/cafe-com-leite.png',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 990,
    tags: ['tradicional', 'com leite']
  },
  {
    id: 'latte',
    imgSrc: '/src/assets/coffees/latte.png',
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 990,
    tags: ['tradicional', 'com leite']
  },
  {
    id: 'capuccino',
    imgSrc: '/src/assets/coffees/capuccino.png',
    name: 'Capuccino',
    description: 'Bebida com canela feita com doses iguais de café, leite e espuma',
    price: 990,
    tags: ['tradicional', 'com leite']
  },
  {
    id: 'macchiato',
    imgSrc: '/src/assets/coffees/macchiato.png',
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 990,
    tags: ['tradicional', 'com leite']
  },
  {
    id: 'mocaccino',
    imgSrc: '/src/assets/coffees/mocaccino.png',
    name: 'Moacccino',
    description: 'Café expresso com calda de chocolate, pouco de leite e espuma',
    price: 990,
    tags: ['tradicional', 'com leite']
  },
  {
    id: 'chocolate-quente',
    imgSrc: '/src/assets/coffees/chocolate-quente.png',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 990,
    tags: ['especial', 'com leite']
  },
  {
    id: 'havaiano',
    imgSrc: '/src/assets/coffees/havaiano.png',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 990,
    tags: ['especial']
  },
  {
    id: 'arabe',
    imgSrc: '/src/assets/coffees/arabe.png',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 990,
    tags: ['especial']
  },
  {
    id: 'cubano',
    imgSrc: '/src/assets/coffees/cubano.png',
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 990,
    tags: ['especial', 'alcoólico', 'gelado']
  },
  {
    id: 'irlandes',
    imgSrc: '/src/assets/coffees/irlandes.png',
    name: 'Irlandês',
    description: 'Bebida a base de café, úisque irlandês, açúcar e chantily',
    price: 990,
    tags: ['especial', 'alcoólico']
  },
]

export function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.backgroundBlur} />
      <section className={styles.intro} >
        <div className={styles.introContent}>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h4>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h4>
          <div className={styles.introContentGrid}>
            <div>
              <ShoppingCart weight='fill' size={16} />
              <span>Compra simples e segura</span>
            </div>
            <div>
              <Package weight='fill' size={16} />
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <Timer weight='fill' size={16} />
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <Coffee weight='fill' size={16} />
              <span>O café chega fresquinho até você</span>
            </div>
          </div>
        </div>
        <img src="/src/assets/coffee-banner.png" alt="Imagem de um copo de cafe com grãos de café ao fundo" />
      </section>
      <section className={styles.coffeMenu} >
        <h2>Nossos cafés</h2>
        <div className={styles.coffeMenuGrid} >
          {coffees.map(coffee => (
            <MenuCard key={coffee.id} coffees={coffees} coffeeId={coffee.id} />
          ))}
        </div>
      </section>
    </main>
  )
}