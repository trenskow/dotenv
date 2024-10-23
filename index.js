//
// index.js
//
// Created by Kristian Trenskow on 2024-10-23
//
// See license in LICENSE
//

import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';

const __dirname = new URL('.', import.meta.url).pathname;

const dotenv = (directory = dirname(resolve(process.cwd(), process.argv[1])) || __dirname) => {

	const env = process.env.NODE_ENV || 'development';

	const paths = [
		resolve(directory, '.env'),
		resolve(directory, `.env.${env}`)
	];

	paths.forEach((path) => {
		try {
			const data = readFileSync(path, 'utf8');
			data
				.split('\n')
				.map((line) => line.trim())
				.filter((line) => line && line[0] !== '#')
				.forEach((line) => {
					const [key, value] = line.split('=');
					process.env[key] = value.trim().replace(/(^['"]|['"]$)/g, '');
				});
		} catch (_) { }
	});

	if (directory !== '/') dotenv(resolve(directory, '..'));

};

export default dotenv;
