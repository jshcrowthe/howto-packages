import React from "react";
import { mount } from "@cypress/react";
import { ReactComponent } from "./component";

it("Render ReactComponent with an incrementing button", () => {
  mount(<ReactComponent />);
  cy.get('[data-test="count"]').contains("0");
  cy.get('[data-test="button"]').click();
  cy.get('[data-test="count"]').contains("1");
});
