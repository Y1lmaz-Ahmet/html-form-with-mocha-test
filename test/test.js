const assert = require("assert");
const { JSDOM } = require("jsdom");
const fs = require("fs");

const html = fs.readFileSync("./index.html");
const { window } = new JSDOM(html);
const { document } = window;
//test formulier of het bestaat
describe("Formulier", function () {
  it("bestaat", function () {
    const form = document.querySelector("form");
    assert(form);
  });
});
//3 testen : voor de input velden om te kijken ofdat naam,email,bericht wel leeg is.
describe("Formulier leeg", function () {
  it("input veld voor naam is leeg", function () {
    const inputVeldNaam = document.getElementById("naam");
    assert(inputVeldNaam.value === "", "input veld voor Naam leeg");
  });
});
describe("Formulier leeg", () => {
  it("input veld voor email is leeg", () => {
    const inputVeldEmail = document.getElementById("e-mail");
    assert(inputVeldEmail.value === "", "input veld voor email leeg");
  });
});
describe("Formulier leeg", () => {
  it("input veld voor bericht is leeg", () => {
    const inputVeldBericht = document.getElementById("bericht");
    assert(inputVeldBericht.value === "", "input veld voor bericht leeg");
  });
});
//3 testen : voor de input velden om te kijken ofdat naam,email,bericht ingevuld is.
describe("Formulier ingevuld", () => {
  it("input veld voor naam is ingevuld", () => {
    const inputVeldNaam = document.getElementById("naam");
    inputVeldNaam.value = "Ahmet";
    assert.strictEqual(inputVeldNaam.value, "Ahmet", "ingevuld naam");
  });
});
describe("Formulier ingevuld", () => {
  it("Input veld voor email is ingevuld", () => {
    const inputVeldEmail = document.getElementById("e-mail");
    inputVeldEmail.value = "ahmet.79@hotmail.be";
    assert.strictEqual(
      inputVeldEmail.value,
      "ahmet.79@hotmail.be",
      "ingevuld email"
    );
  });
});
describe("Formulier ingevuld", () => {
  it("Input veld voor bericht is ingevuld", () => {
    const inputVeldBericht = document.getElementById("bericht");
    inputVeldBericht.value = "dit is een bericht";
    assert.strictEqual(
      inputVeldBericht.value,
      "dit is een bericht",
      "bericht is ingevuld"
    );
  });
});
describe("Formulier drukknop", () => {
  it("kijkt of dat de textContent van de drukknop juist is", () => {
    const drukknop = document.getElementById("verzenden");
    drukknop.value = "verzenden";
    assert.strictEqual(drukknop.value, "verzenden", "juist");
  });
});
describe("Formulier verzenden test", function () {
  it("Controleer of de submit knop aanwezig is", function (done) {
    JSDOM.fromFile("index.html")
      .then(function (dom) {
        const submitBtn = dom.window.document.querySelector("#verzenden");
        assert.notStrictEqual(submitBtn, null);
        done();
      })
      .catch(function (error) {
        console.log(error);
      });
  });
});
