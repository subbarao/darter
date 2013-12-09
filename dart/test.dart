class Card {
  num number;
  string suite;
  Card(num this.number, string this.suite);

  num get myNumber => this.number;

  string print(){
    return this.number.toString() + this.suite;
  }
}

void main() {
  int number = 2;
  Card r = new Card(1, "clubs");

  printNumber(number) => print(number);
  printNumber(r.myNumber);
  printNumber(r.number);
  printNumber(number);
}
