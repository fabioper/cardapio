export interface Product {
  id: number
  title: string
  description: string
  price: number
  image?: { url: string; alt: string }
}

const products: Product[] = [
  {
    id: 1,
    title: 'Hamburguer Especial da Casa com Calabresa',
    description:
      'Pão, carne, calabresa, ketchup, maionese, billy jack, molho verde, alface',
    price: 20,
    image: {
      url: 'https://images.pexels.com/photos/2119758/pexels-photo-2119758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: '',
    },
  },
  {
    id: 2,
    title: 'Hamburguer Especial da Casa com Calabresa',
    description:
      'Pão, carne, calabresa, ketchup, maionese, billy jack, molho verde, alface',
    price: 25,
    image: {
      url: 'https://images.pexels.com/photos/2119758/pexels-photo-2119758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: '',
    },
  },
  {
    id: 3,
    title: 'Hamburguer Especial da Casa com Calabresa',
    description:
      'Pão, carne, calabresa, ketchup, maionese, billy jack, molho verde, alface',
    price: 15.9,
    image: {
      url: 'https://images.pexels.com/photos/2119758/pexels-photo-2119758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: '',
    },
  },
  {
    id: 4,
    title: 'Hamburguer Especial da Casa com Calabresa',
    description:
      'Pão, carne, calabresa, ketchup, maionese, billy jack, molho verde, alface',
    price: 11.1,
    image: {
      url: 'https://images.pexels.com/photos/2119758/pexels-photo-2119758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: '',
    },
  },
  {
    id: 5,
    title: 'Hamburguer Especial da Casa com Calabresa',
    description:
      'Pão, carne, calabresa, ketchup, maionese, billy jack, molho verde, alface',
    price: 5.8,
    image: {
      url: 'https://images.pexels.com/photos/2119758/pexels-photo-2119758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: '',
    },
  },
]

export async function getProducts() {
  return Promise.resolve(products)
}
