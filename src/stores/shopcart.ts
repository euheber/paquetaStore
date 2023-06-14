import { defineStore } from "pinia"
import { ref } from "vue"

type Mask = {
  id: string
  name: string
  price: number
}

const shopcart = defineStore("cart", () => {
  const reference = ref<Object[]>([])
  const shoes = reference.value

  function insertShoe(shoe: Mask) {
    shoes.push(shoe)
  }

  function getShoes(): typeof shoes{
    return shoes
  }

  
  return {shoes, insertShoe, getShoes}

})

export default shopcart


