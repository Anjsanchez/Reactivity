export interface Duck {
  name: string;
  numLegs: number;
  makeSound: (sound: string) => void;
}

const duck1: Duck = {
  name: "Angelo",
  numLegs: 4,
  makeSound: (sound: any) => console.log("Quack: " + sound),
};

const duck2: Duck = {
  name: "Austine",
  numLegs: 59,
  makeSound: (sound: any) => console.log("Quack: " + sound),
};

export const ducks = [duck1, duck2];
