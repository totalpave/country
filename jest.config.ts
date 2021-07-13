module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    collectCoverage: true,
    testMatch: [ '**/spec/**/*.spec.ts' ],
    coverageThreshold: {
        global: {
            branches: 75,
            functions: 75,
            lines: 75,
            statements: 75
        }
    }
};
