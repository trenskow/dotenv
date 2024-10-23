//
// index.js
//
// Created by Kristian Trenskow on 2024-10-23
//
// See license in LICENSE
//

import { expect } from 'chai';

import dotenv from '../index.js';

describe('config', () => {
	before(() => {
		dotenv();
	});
	it ('must contain variable from `.env` file.', () => {
		expect(process.env.THIS_IS_A_TEST).to.equal('yes');
	});
});
