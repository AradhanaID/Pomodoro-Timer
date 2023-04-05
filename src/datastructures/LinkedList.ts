import { Node } from "./Node";
export class LinkedList<T> {
  head: Node<T> | null
  tail: Node<T> | null

  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null;
  }

  push(newNode: Node<T>): void {
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    
    this.tail!.next = newNode;
    this.tail = newNode;

  }
}