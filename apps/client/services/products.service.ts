export interface Product {
  id: number
  title: string
  description: string
  price: number
  image?: { url: string; alt: string }
  combo?: boolean
}

const products: Product[] = [
  {
    id: 1,
    title: 'Mesh Cheese',
    description:
      'Smash 80g, queijo cheddar, molho Mesh. Não acompanha molho à parte.',
    price: 20,
    image: {
      url: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/d367de79-2a0a-45ce-9703-a6194ee96eca/202308242025_ACD4_i.jpg',
      alt: '',
    },
  },
  {
    id: 2,
    title: 'Combo Mesh Salad Bacon',
    description: 'Mesh Salad Bacon + Batata Palito + Bebida',
    price: 43.9,
    image: {
      url: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/d367de79-2a0a-45ce-9703-a6194ee96eca/202205241207_PIB1_i.jpg',
      alt: '',
    },
  },
  {
    id: 3,
    title: 'Combo Cheddar Mesh Melt',
    description: 'Cheddar Mesh Melt + Batata palito + Bebida',
    price: 41.9,
    image: {
      url: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/45b13915-5481-42db-9ef0-f0fa794d9e06/202205081216_48I2_i.jpg',
      alt: '',
    },
  },
  {
    id: 4,
    title: 'Nuggets',
    description: '8 unidades acompanhadas de catchup.',
    price: 11.1,
    image: {
      url: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/202ab855-fc06-4feb-8dda-e40e7b46d02a/202305121602_HQ55_i.jpg',
      alt: '',
    },
  },
  {
    id: 5,
    title: 'Batata Frita Individual',
    description:
      'Temperada com sal e páprica. Devido a logística do delivery, nossa batata não é entregue 100% em temperatura e crocância (aprox. 150g).',
    price: 15.9,
    image: {
      url: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/202ab855-fc06-4feb-8dda-e40e7b46d02a/202305121601_QP15_i.jpg',
      alt: '',
    },
  },
  {
    id: 6,
    title: 'Chewbacca',
    description:
      'Pão Brioche da casa tostado na chapa, 180g de blend de carne bovina, cheddar cremoso, cebola ao shoyo.+ Acompanhamento + Bebida da sua preferencia.',
    price: 49.99,
    image: {
      url: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/97e2a546-4802-421f-8a5f-9889e0236de2/202307041148_P468_i.jpg',
      alt: '',
    },
  },
  {
    id: 7,
    title: 'Freed krueger',
    combo: true,
    description:
      'Pão da Casa (Tipo Brioche) Tostado na Chapa, 170g de blend de carne bovina, queijo prato, bacon Fatiado, cebola ao shoyo e por fim uma maionese temperada da casa+ Acompanhamento+ Bebida de sua preferencia.',
    price: 52.99,
    image: {
      url: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/97e2a546-4802-421f-8a5f-9889e0236de2/202207281452_67OW_i.jpg',
      alt: '',
    },
  },
  {
    id: 8,
    title: 'Ragnar',
    combo: true,
    description:
      'Pão da casa tipo brioche, 110g de blend Bovino, cheddar cremoso, bacon em cubos. + Acompanhamento + Bebida.',
    price: 46.99,
    image: {
      url: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/97e2a546-4802-421f-8a5f-9889e0236de2/202207281439_FJ55_i.jpg',
      alt: '',
    },
  },
  {
    id: 9,
    title: 'Jack Sparrow',
    combo: true,
    description:
      'Pão Brioche da casa tostado na chapa, 180g de Costela Bovina, queijo prato, 3 Anéis de Cebola empanada, maionese e molho barbecue. + Acompanhamento + Bebida da sua preferencia.',
    price: 52.9,
    image: {
      url: 'https://static.ifood-static.com.br/image/upload/t_medium/pratos/97e2a546-4802-421f-8a5f-9889e0236de2/202307041146_W03K_i.jpg',
      alt: '',
    },
  },
]

export async function getProducts() {
  return Promise.resolve(products)
}

export async function findProductById(id: number) {
  return Promise.resolve(products.find(product => product.id === id))
}
