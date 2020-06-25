import React from "react";
import { shallow } from "enzyme";
import CardList from "./CardList";

const mockRobots = [
  {
    id: 1,
    name: "Philip",
    username: "philiphilip",
    email: "philip@gmail.com",
  },
  {
    id: 2,
    name: "Anitha",
    username: "anitha",
    email: "anitha@gmail.com",
  },
];

it("expect to render CardList compoent", () => {
  expect(shallow(<CardList robots={mockRobots} />).length).toEqual(1);
});

it("expect to render CardList compoent - Snapshot", () => {
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
