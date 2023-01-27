import React from "react";
import { shallow } from "enzyme";
import Modal from "./index";

describe("Modal component", () => {
  it("renders without crashing", () => {
    shallow(<Modal showModal={true} closeModal={() => {}} />);
  });

  it("renders the modal container when showModal is true", () => {
    const wrapper = shallow(<Modal showModal={true} closeModal={() => {}} />);
    expect(wrapper.find(".modal__container").exists()).toBe(true);
  });

  it("does not render the modal container when showModal is false", () => {
    const wrapper = shallow(<Modal showModal={false} closeModal={() => {}} />);
    expect(wrapper.find(".modal__container").exists()).toBe(false);
  });

  it("renders the modal content", () => {
    const wrapper = shallow(
      <Modal showModal={true} closeModal={() => {}}>
        <p>Modal Content</p>
      </Modal>
    );
    expect(wrapper.find(".modal__content").exists()).toBe(true);
    expect(wrapper.find(".modal__content").text()).toBe("Modal Content");
  });

  it("calls the closeModal function when the modal container is clicked", () => {
    const closeModal = jest.fn();
    const wrapper = shallow(<Modal showModal={true} closeModal={closeModal} />);
    wrapper.find(".modal__container").simulate("click");
    expect(closeModal).toHaveBeenCalled();
  });
});
