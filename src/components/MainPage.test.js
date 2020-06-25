import React from "react";
import { shallow } from "enzyme";
import MainPage from "../components/MainPage";

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false,
  };

  wrapper = shallow(<MainPage {...mockProps} />);
});

it("renders MainPage without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("filters robots correctly", () => {
  expect(wrapper.instance().filterRobots()).toEqual([]);
});

it("filter robots with dummy data", () => {
  const mockPropsLocal = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 1,
        name: "philip",
        email: "philip@gmail.com",
      },

      {
        id: 2,
        name: "anitha",
        email: "anitha@gmail.com",
      },
    ],
    searchField: "anitha",
    isPending: false,
  };

  const wrapperLocal = shallow(<MainPage {...mockPropsLocal} />);
  expect(wrapperLocal.instance().filterRobots()).toEqual([
    {
      id: 2,
      name: "anitha",
      email: "anitha@gmail.com",
    },
  ]);
});
