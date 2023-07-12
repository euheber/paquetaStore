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

  const checkIfShoeExists = (id:string) => { 
    let shoeExists = ref()
    const index = wishlist.findIndex(sapato => sapato.id == id)

    if (index == -1) {
      shoeExists.value = false
    } else { 
        shoeExists.value = true
    }

    return shoeExists
  }

  return { wishlist, pushShoe, checkIfShoeExists }
})

export default wishlist
