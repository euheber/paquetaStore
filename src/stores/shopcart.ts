import { defineStore } from "pinia"
import { ref } from "vue"
import type { Mask } from "@/types/shopcart"

const shopcart = defineStore("cart", () => {
  const reference = ref<Mask[]>([])
  const shoes = reference.value
  let total = ref(0)

  const insertShoe = (shoe: Mask)=> {
    const item = shoes.find((shoeExists) => shoeExists.id === shoe.id)

    if (!item) {
      shoes.push(shoe)
    } else {
      item.quantity++
    }
    
    update()
  }

  const getShoes = (): typeof shoes => {
    return shoes
  }

  const update = () => total.value = Number(shoes.reduce((acc, current) =>  acc + (current.price.value * current.quantity), 0).toFixed(2))

  return { shoes, insertShoe, getShoes }
})

export default shopcart
