export class Item {
  _id?: string;
  categoryID: string;
  item_name: string;
  price: number;
  quantity: number;

  constructor(
    _id?: string,
    item_name?: string,
    categoryID?: string,
    price?: number,
    quantity?: number
  ) {
    this._id = _id!;
    this.item_name = item_name!;
    this.categoryID = categoryID!;
    this.price = price!;
    this.quantity = quantity!;
  }
}
