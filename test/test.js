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
