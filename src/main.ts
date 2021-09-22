import { Resolver } from '@parcel/plugin';

export default new Resolver({
	async resolve({ filePath }) {
		try {
			return {
				filePath: require.resolve(filePath),
			};
		} catch (e) {
			return null;
		}
	},
});
