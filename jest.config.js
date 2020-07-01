// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: 'test\\/.*\\.tsx?$',

    collectCoverageFrom: ['**/src/**'],
}
