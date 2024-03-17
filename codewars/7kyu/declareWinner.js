function declareWinner(fighter1, fighter2, firstAttacker) {
  if (fighter1.health <= 0 && fighter2.health > 0) {
    return fighter2.name;
  } else if (fighter1.health > 0 && fighter2.health <= 0) {
    return fighter2.name;
  } else if (fighter1.health <= 0 && fighter2.health <= 0) {
    return "Draw";
  }

  if (fighter1.name == firstAttacker) {
    fighter2.health -= fighter1.damagePerAttack;
    if (fighter2.health <= 0) {
      return fighter1.name;
    }

    fighter1.health -= fighter2.damagePerAttack;
    if (fighter1.health <= 0) {
      return fighter2.name;
    }
  } else {
    fighter1.health -= fighter2.damagePerAttack;
    if (fighter1.health <= 0) {
      return fighter2.name;
    }
    fighter2.health -= fighter1.damagePerAttack;
    if (fighter2.health <= 0) {
      return fighter1.name;
    }
  }

  return declareWinner(fighter1, fighter2, firstAttacker);
}
