type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number
  };
  
  function compare<T extends AllType, B extends AllType>(
    top: Pick<T, 'name' | 'color'>, 
    bottom: Pick<B, 'position' | 'weight'>): AllType {
    return {
      name: top.name,
      color: top.color,
      position: bottom.position,
      weight: bottom.weight,
    }
  };