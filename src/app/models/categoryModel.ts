export class Category {
  _id?: string;
  category_name: string;

  constructor(category_name?: string, _id?: string) {
    this.category_name = category_name ?? '';
    this._id = _id ?? '';
  }
}
