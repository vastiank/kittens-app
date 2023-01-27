import React from "react";
import { shallow } from "enzyme";
import { Layout } from "./index";

describe("<Layout />", () => {
  it('should render a container with the class "layout-container"', () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find(".layout-container")).toHaveLength(1);
  });

  it("should render children elements", () => {
    const wrapper = shallow(
      <Layout>
        <div className="test-child" />
      </Layout>
    );
    expect(wrapper.find(".test-child")).toHaveLength(1);
  });
});
