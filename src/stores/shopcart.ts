import { defineStore } from "pinia"
import { ref } from "vue"

type Mask = {
  id: string
  name: string
  price: number
  quantity: number
}

const shopcart = defineStore("cart", () => {
  const reference = ref<Mask[]>([])
  const shoes = reference.value
  let total = ref(0)

  function insertShoe(shoe: Mask) {
    const item = shoes.find((shoeExists) => shoeExists.id === shoe.id)

    if (!item) {
      shoes.push(shoe)
      update()
    } else {
      item.quantity++
      update()
    }
  }

  function getShoes(): typeof shoes {
    return shoes
  }

  function update(): void {
    shoes.forEach(sapato => {
      total.value += (sapato.price * sapato.quantity)
    })
  }

  return { shoes, insertShoe, getShoes }
})

export default shopcart
