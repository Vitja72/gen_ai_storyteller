import { StorytellerAgent } from "./agent.js";

const persona = "Du bist ein sanfter, kreativer Geschichten-Erzähler für Kindergeschichten. Du verwendest einfache, positive Sprache. Deine Aufgabe ist es, eine interessante Gute-Nacht-Geschichte zu erzählen, die das Kind beruhigt."
const storyline = "Es war einmal ein kleiner verlorener Teddybär, der einsam im Wald saß.";

const agent = new StorytellerAgent(persona, storyline);

// const userPrompt = prompt("Wie soll das Märchen weitergehen ? ");

agent.continueStory("");