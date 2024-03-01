const products = [
  {
    id: 1,
    title: 'Product 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur cumque.',
    price: 20,
  },
  {
    id: 2,
    title: 'Product 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur cumque.',
    price: 25,
  },
  {
    id: 3,
    title: 'Product 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur cumque.',
    price: 15.9,
  },
  {
    id: 4,
    title: 'Product 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur cumque.',
    price: 11.1,
  },
  {
    id: 5,
    title: 'Product 5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur cumque.',
    price: 5.8,
  },
]

export async function getProducts() {
  return Promise.resolve(products)
}
