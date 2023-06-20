import { defineStore } from "pinia"
import { ref } from "vue"
import type { Mask } from "@/types/shoe"

const wishlist = defineStore("wishlist", () => {
  const reference = ref<Mask[]>([])
  const wishlist = reference.value

  const pushShoe = (shoe: Mask) => {
    let shoeExists = ref()
    const index = wishlist.findIndex(sapato => sapato.id == shoe.id)
    
    if (index == -1) {
      shoeExists.value = true
      wishlist.push(shoe)
    } else { 
        wishlist.splice(index, 1)
        shoeExists.value = false
    }

    return shoeExists
  }

  return { wishlist, pushShoe }
})

export default wishlist
