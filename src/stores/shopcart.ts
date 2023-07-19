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

  const removeShoe  = (id: string):void => {     
   const index = shoes.findIndex(shoe => { 
      shoe.id === id
    })

    shoes.splice(index, 1)
  }

  const removeQuantity = (id: string):void => { 
    const shoe = shoes.find(shoe => shoe.id == id)
    
    if(shoe){
      if(shoe.quantity <= 1) { 
        removeShoe(id)
      } else { 
        shoe.quantity--
      }
    }

  }
  const update = () => total.value = Number(shoes.reduce((acc, current) =>  acc + (current.price.value * current.quantity), 0).toFixed(2))

  return { shoes, insertShoe, removeShoe, removeQuantity }
})

export default shopcart
