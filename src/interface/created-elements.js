export const createTypes = (types, div) => {
  types.forEach((key) => {
    const $typeSpan = document.createElement("span");
    $typeSpan.innerHTML = key.type.name;
    $typeSpan.classList = "mr-2";
    div.append($typeSpan);
  });
};

export const createAbilities = (abilities, div) => {
  abilities.forEach((key) => {
    const $abilitySpan = document.createElement("span");
    $abilitySpan.innerHTML = key.ability.name;
    $abilitySpan.classList = "mr-2";
    div.append($abilitySpan);
  });
};

export const createStats = (stats, div) => {
  stats.forEach((key) => {
    const $statDiv = document.createElement("div");
    $statDiv.innerHTML = `${key.base_stat}: ${key.stat.name}`;
    div.append($statDiv);
  });
};
