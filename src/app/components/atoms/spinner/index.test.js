import React from "react";
import { shallow } from "enzyme";
import Spinner from "./index";

describe("Spinner component tests", () => {
  it("renders without crashing", () => {
    shallow(<Spinner />);
  });

  it("renders a loading container", () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper.find(".loading__container").exists()).toBe(true);
  });

  it("renders a loading spinner", () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper.find(".loading-spinner").exists()).toBe(true);
  });

  it("renders a loading title", () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper.find(".loading__title").text()).toBe("LOADING");
  });
});
