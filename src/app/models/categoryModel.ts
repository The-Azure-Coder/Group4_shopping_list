export class Category {
  _id?: String;
  category_name: string;

  constructor(category_name?: string, _id?: String,) {
    this.category_name = category_name ?? "";
    this._id = _id ?? "";
  }
}
