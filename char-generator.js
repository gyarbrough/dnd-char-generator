const characterTemplate = {
    race: "",
    charClass: "",
    alignment: "",
}

function randomCharacter() {
    this.race = genRace();
    this.charClass = genCharClass();
    this.alignment = genAlignment();
}

const genRace = () => {
    const races = ["Dwarf", "Elf", "Halfling", "Human", "Dragonborn", "Gnome", "Half-Elf", "Half-Orc", "Tiefling"];
    const race = races[Math.floor(Math.random() * races.length)];
    return getSubRace(race) + race;
}

const getSubRace = (race) => {
    const subRaces = {
        "Dwarf": ["Hill ", "Mountain "],
        "Elf": ["High ", "Wood ", "Drow "],
        "Halfling": ["Lightfoot ", "Stout "],
        "Human": [""],
        "Dragonborn": ["Black ", "Blue ", "Brass ", "Bronze ", "Copper ", "Gold ", "Green ", "Red ", "Silver ", "White "],
        "Gnome": ["Forest ", "Rock "],
        "Half-Elf": [""],
        "Half-Orc": [""],
        "Tiefling": [""],
    }
    const subRace = subRaces[race][Math.floor(Math.random() * subRaces[race].length)];
    return subRace;
}

const genCharClass = () => {
    const classes = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];
    return classes[Math.floor(Math.random() * classes.length)];
}

const genAlignment = () => {
    const alignments = ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"];
    return alignments[Math.floor(Math.random() * alignments.length)];
}

const character = new randomCharacter();
console.log(character.alignment + " " + character.race + " " + character.charClass);