import { LinkedList } from "../datastructures/LinkedList";
import { Node } from "../datastructures/Node";
export const DEFAULT_TIME = 3;

export type TimerType = {
  name: string,
  defaultTime: number,
  backgroundColor: string
  color: string
}

export const STATES = [
  {
    name: 'Focus',
    defaultTime: 3,
    backgroundColor: 'bg-rose-800',
    color: 'text-rose-800'
  },
  {
    name: 'Short Break',
    defaultTime: 300,
    backgroundColor: 'bg-emerald-800',
    color: 'text-emerald-800'
  },
  {
    name: 'Focus',
    defaultTime: 1500,
    backgroundColor: 'bg-rose-800',
    color: 'text-rose-800'
  },
  {
    name: 'Short Break',
    defaultTime: 300,
    backgroundColor: 'bg-emerald-800',
    color: 'text-emerald-800'
  },
  {
    name: 'Focus',
    defaultTime: 1500,
    backgroundColor: 'bg-rose-800',
    color: 'text-rose-800'
  },
  {
    name: 'Long Break',
    defaultTime: 900,
    backgroundColor: 'bg-indigo-800',
    color: 'text-indigo-800'
  }
]

export const timerHead = (): Node<TimerType> => {
  const linkedList = new LinkedList<TimerType>();
  STATES.forEach((state) => {
    linkedList.push(new Node(state));
  })
  // Creates a cyclic LinkedList
  const head = linkedList.head!
  linkedList.push(head);
  return linkedList.head!;
}



