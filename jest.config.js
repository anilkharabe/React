module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testMatch: [
    "**/__test__/**/*.(test|spec).(js|jsx)",
  ],
  moduleFileExtensions: ["js", "jsx"],
};
