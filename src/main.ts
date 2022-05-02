import { Resolver } from '@parcel/plugin';

export default new Resolver({
	async resolve(props: any) {
		const {filePath, specifier} = props;
		try {
			const p = filePath ?? specifier;
			if(p == null){
				return null;
			}
			return {
				filePath: require.resolve(p),
			};
		} catch (e) {
			return null;
		}
	},
});
