export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2)
}

export const updateCart = (state) => {
  // calculation of items price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  )

  // calculation of shipping price ( if order is over 100$ then its free, else its 10$)
  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10)

  // calculation of tax price (15$ tax)
  state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)))

  // calculation of total price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2)

  localStorage.setItem('cart', JSON.stringify(state))
  return state
}