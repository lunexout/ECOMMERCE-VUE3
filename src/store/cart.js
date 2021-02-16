// import axios from 'axios'
// import firebase from 'firebase'
export default {
  state: {
    CartItems: [],
    CartQuantity: 0,
    TotalAmount: 0,
    DetailViewOfItem: {}
  },
  mutations: {
    ADD_TO_CART(state, object){
      state.CartItems.push(object)
      state.CartQuantity++
      object.isAdd = !object.isAdd
      state.DetailViewOfItem.isAdd = !state.object.isAdd
    },
    REMOVE_FROM_CART(state, object){
      // state.CartItems.remove(object)
      const removeByIndex = state.CartItems.map((item) => { return item.id; }).indexOf(object.id);
      state.CartItems.splice(removeByIndex, 1)
      if(state.CartQuantity === 0){
        state.CartQuantity = 0
      }else {
        state.CartQuantity--
      }
      object.quantity = 1
      object.isAdd = !object.isAdd
      state.DetailViewOfItem.isAdd = !state.object.isAdd
    },
    CLEAR_CART(state){
      state.CartItems.map(item => { item.isAdd = !item.isAdd, item.quantity = 1 } )
      state.CartItems = []
      state.CartQuantity = 0
    },
    ADD_QUANTITY(state,object){
      console.log(object)
      object.quantity++
      // state.DetailViewOfItem.quantity++
      console.log(state.DetailViewOfItem);
    },
    REMOVE_QUANTITY(state, object){
      if(object.quantity == 1){
        object.quantity = 1
      }else {
        object.quantity--
      }
    },
    TOTAL_AMOUNT(state){
      let total = 0;
      state.CartItems.map(item => total += item.quantity * item.price)
      state.TotalAmount = total
    },
    ADD_DETAIL_VIEW(state, object){
      localStorage.removeItem('DetailViewOfItem')
      localStorage.setItem('DetailViewOfItem', JSON.stringify(object))
      // state.DetailViewOfItem = []
      state.DetailViewOfItem = object
    }
  },
  actions: {
    addToCart(ctx, object){
      ctx.commit('ADD_TO_CART', object)
      ctx.commit('TOTAL_AMOUNT')
    },
    removeFromCart(ctx, object){
      ctx.commit('REMOVE_FROM_CART', object)
      ctx.commit('TOTAL_AMOUNT')
    },
    clearCart(ctx){
      ctx.commit('CLEAR_CART')
      ctx.commit('TOTAL_AMOUNT')
    },
    addQuantity(ctx, object){
      ctx.commit('ADD_QUANTITY', object)
      ctx.commit('TOTAL_AMOUNT')
    },
    removeQuantity(ctx, object){
      ctx.commit('REMOVE_QUANTITY', object)
      ctx.commit('TOTAL_AMOUNT')
    },
    totalAmount(ctx){
      ctx.commit('TOTAL_AMOUNT')
    },
    detailItemShow(ctx,object){
      ctx.commit('ADD_DETAIL_VIEW', object)
    }
    // getNasaInfo(ctx){
    //   // console.log(5)
    //   axios
    //   .get('https://api.nasa.gov/planetary/apod?api_key=5Dbp7pk3PFzBg25bU9Ohgpi6BvUkCGOCRHAii4zb')
    //   .then(response => ctx.commit('GET_NASA_TODAYS_NEWS', response.data))
    // },
  },
  getters: {
    getCartQuantity: (state) => { return state.CartQuantity },
    getCartItems: (state) => { return state.CartItems },
    getTotalAmount: (state) => { return state.TotalAmount },
    getDetailedViewItem: (state) => { return state.DetailViewOfItem }
  }
}