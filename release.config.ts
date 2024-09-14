const config = {
	branches: ['main'],
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		[
			'@semantic-release/git',
			{
				assets: [
					'dist/*.js',
					'dist/*.mjs',
					'dist/*.js.map',
					'dist/*.ts',
					'dist/*.mts',
					'dist/*.ts.map'
				],
				message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
			}
		],
		'@semantic-release/github'
	]
};

export default config;
