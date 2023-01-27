import React from "react";
import { shallow } from "enzyme";
import Card from "./index";

describe("Card Molecule Tests", () => {
  it("should render the card molecule", () => {
    const item = {
      name: "Kitten 1",
      imageFileName: "kitten1.jpg",
    };
    const wrapper = shallow(<Card item={item} />);

    expect(wrapper.find(".card-view h4").text()).toEqual("Kitten 1");
    expect(wrapper.find(".img_kitten").prop("src")).toEqual("kitten1.jpg");
  });
});
