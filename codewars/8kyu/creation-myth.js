class God {
  /**
   * @returns Human[]
   */
  static create() {
    // code
    let Adam = new Man();
    let Eve = new Woman();
    return [Adam, Eve];
  }
}
// code

class Human {}
class Man extends Human {}
class Woman extends Human {}
