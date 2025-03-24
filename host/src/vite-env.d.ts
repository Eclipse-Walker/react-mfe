/// <reference types="vite/client" />

declare module "welcomePage/Welcome" {
  const Welcome: React.ComponentType;
  export default Welcome;
}

declare module "welcomePage/Button" {
  const Button: React.ComponentType;
  export default Button;
}

declare module "welcomePage/Todo" {
  const Todo: React.ComponentType;
  export default Todo;
}

declare module "welcomePage/store" {
  const useCount: () => [
    number,
    (updater: (prevState: number) => number) => void
  ];
  export default useCount;
}

declare module "welcomePage/listStore" {
  const useList: () => [Task[]];
  export default useList;
}
