function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;
  this.isWorthIt = () => {
    let crewWeight = this.crew * 1.5;
    let remainDraft = this.draft - crewWeight;
    if (remainDraft > 20) {
      return true;
    } else {
      return false;
    }
  };
}
