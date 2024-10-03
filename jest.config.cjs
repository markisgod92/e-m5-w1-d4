module.exports = { 
	testEnvironment: 'jsdom', 
	moduleNameMapper: { 
		'\.(css|less|scss)$': 'identity-obj-proxy',
		'\\.(gif|jpg|jpeg|png|svg)$': '<rootDir>/__mocks__/fileMock.js'
	} 
};