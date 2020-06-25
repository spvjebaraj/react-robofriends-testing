import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";

it("expect to render Card compoent", () => {
  expect(shallow(<Card />).length).toEqual(1);
});

it("expect to render Card compoent - Snapshot", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
