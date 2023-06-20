export interface Mask {
    description: string,
    id: string,
    image: string,
    name: string,
    price: {
      value: number,
      discount: number
    },
    soldout: boolean
    quantity: number
  }