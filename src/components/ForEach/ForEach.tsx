interface IProps<T> {
  of: T[]
  children: (item: T, index: number, list: T[]) => JSX.Element
}

export function ForEach<T>({ of, children }: IProps<T>): JSX.Element {
  return <>{of.map(children)}</>
}
