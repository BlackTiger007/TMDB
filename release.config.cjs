/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
	branches: [
		{
			name: 'main',
			range: '>=0.1.0 <1.0.0',
			channel: 'latest'
		},
		{
			name: 'next',
			range: '>=1.0.0 <2.0.0',
			prerelease: true,
			channel: 'next'
		}
	],
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		'@semantic-release/npm',
		'@semantic-release/github',
		'@semantic-release/changelog',
		[
			'@semantic-release/git',
			{
				assets: ['package.json', 'CHANGELOG.md'],
				message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
			}
		]
	]
};
