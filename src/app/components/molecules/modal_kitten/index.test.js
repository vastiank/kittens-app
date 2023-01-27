import React from "react";
import { shallow } from "enzyme";
import ModalKitten from "./index";
import Modal from "../../atoms/modal/index";

describe("ModalKitten component", () => {
  let wrapper;
  let kitten = {
    name: "Fluffy",
    age: "10",
    gender: "Female",
    imageFileName: "fluffy.jpg",
    description: "Fluffy is a cute and playful kitten",
  };

  beforeEach(() => {
    const closeModal = jest.fn();
    wrapper = shallow(
      <ModalKitten kitten={kitten} showModal={true} closeModal={closeModal} />
    );
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render a Modal component", () => {
    expect(wrapper.find("Modal")).toHaveLength(1);
  });

  it("should render the kitten name", () => {
    expect(wrapper.find("h1").text()).toEqual(kitten.name);
  });

  it("should render the kitten age", () => {
    expect(wrapper.find("#age").text()).toBe(kitten.age);
  });

  it("should render the kitten gender", () => {
    expect(wrapper.find("#gender").text()).toBe(kitten.gender);
  });

  it("should render the kitten image", () => {
    expect(wrapper.find(".modal__kitten__img").prop("src")).toEqual(
      kitten.imageFileName
    );
  });

  it("should render the kitten description", () => {
    expect(wrapper.find("#description").text()).toBe(kitten.description);
  });

  it("should call the closeModal function when the modal is closed", () => {
    const closeModal = jest.fn();
    const wrapper = shallow(<Modal showModal={true} closeModal={closeModal} />);
    wrapper.find(".modal__container").simulate("click");
    expect(closeModal).toHaveBeenCalled();
  });
});
