import HeaderItemModel from "./header-item-model";

export default class TableModel {
  Header: Array<HeaderItemModel> = new Array<HeaderItemModel>();
  Content: Array<object> = new Array<object>();

  AddedRow: object;

  FlagEditableRow: object;
  EditableRow: object;

  remove(row: object) {
    this.Content = this.Content.filter((elem) => elem != row)
  }

  add(row: object) {
    this.Content.push(row);
  }

  edit() {
    this.Content.forEach((row, index) => {
      if(row == this.FlagEditableRow) {
        this.Content[index] = this.EditableRow
      }
    });
  }
}