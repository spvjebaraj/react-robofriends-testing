import React from "react";
import { shallow } from "enzyme";
import CounterButton from "./CounterButton";

const mockColor = "blue";

it("should render the CounterButton component", () => {
  expect(shallow(<CounterButton color={mockColor} />));
});

it("correctly increments the counter", () => {
  const wrapper = shallow(<CounterButton color={mockColor} />);

  wrapper.find("[id='counter']").simulate("click");
  wrapper.find("[id='counter']").simulate("click");
  expect(wrapper.state()).toEqual({ count: 7 });
  expect(wrapper.props().color).toEqual("blue");
});
