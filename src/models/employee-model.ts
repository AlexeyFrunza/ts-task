export default class EmployeeModel {
  Number: number;
  FullName: string;
  Post: string;

  constructor(number: number, fullname: string, post: string) {
    this.Number = number;
    this.FullName = fullname;
    this.Post = post;
  }
}