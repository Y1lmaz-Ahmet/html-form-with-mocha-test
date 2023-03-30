const assert = require("assert");
const { JSDOM } = require("jsdom");
const fs = require("fs");

const html = fs.readFileSync("./index.html");
const { window } = new JSDOM(html);
const { document } = window;

describe("Formulier", function () {
  it("bestaat", function () {
    const form = document.querySelector("form");
    assert(form);
  });
});
describe("Formulier", function () {
  it("input veld voor naam is leeg", function () {
    const inputVeldNaam = document.getElementById("naam");
    assert(inputVeldNaam.value === "", "input veld voor Naam leeg");
  });
});
describe("Formulier", () => {
  it("input veld voor email is leeg", () => {
    const inputVeldEmail = document.getElementById("e-mail");
    assert(inputVeldEmail.value === "", "input veld voor email leeg");
  });
});
describe("Formulier", () => {
  it("input veld voor bericht is leeg", () => {
    const inputVeldBericht = document.getElementById("bericht");
    assert(inputVeldBericht.value === "", "input veld voor bericht leeg");
  });
});
