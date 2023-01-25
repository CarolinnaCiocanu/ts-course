interface ModelAttributes<T> {}

interface Sync {}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

export class Model {}
