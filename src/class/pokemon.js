class Pokemon {
  constructor(
    id,
    sprite,
    weight,
    height,
    base_experience,
    stats = [],
    abilities = [],
    types = []
  ) {
    this.id = id;
    this.sprite = sprite;
    this.weight = weight;
    this.height = height;
    this.base_experience = base_experience;
    this.stats = stats;
    this.abilities = abilities;
    this.types = types;
  }
}

export default Pokemon;
