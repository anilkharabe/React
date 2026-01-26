module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": [
      "babel-jest",
      { configFile: "./babel-jest.config.js" },
    ],
  },
  testMatch: [
    "**/__test__/**/*.(test|spec).(js|jsx)",
  ],
  moduleFileExtensions: ["js", "jsx"],
};
