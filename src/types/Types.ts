export interface Product  {
    id : string
    name: string
    price: number
    rating: number
    brand: string
    img: string
}
export interface Basket {
    id : string
    name: string
    price:number
    img: string
    quantity:number
}
export interface State {
  products: Product[]
  basket: Basket[]
}