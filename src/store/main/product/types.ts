export interface IGoodsList {
  id: number
  name: string
  oldPrice: string
  newPrice: string
  desc: string
  status: number
  imgUrl: string
  inventoryCount: number
  saleCount: number
  favorCount: number
  address: string
  categoryId: number
  createAt: string
  updateAt: string
}

export interface IProductState {
  goodsList: IGoodsList[]
  goodsCount: number
  categoryList: IGoodsList[]
  categoryCount: number
}
