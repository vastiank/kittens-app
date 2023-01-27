import { shallow } from "enzyme";

import App from "./App";

jest.mock("axios", () => {
  const axiosInstance = {
    get: jest.fn(),
    interceptors: {
      response: { use: jest.fn() },
    },
  };
  return {
    create: jest.fn(() => axiosInstance),
  };
});

describe("App component", () => {
  it("should render AppComponent", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeDefined();
  });
});
