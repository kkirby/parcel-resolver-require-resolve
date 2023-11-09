const { Resolver } = require('@parcel/plugin');
const path = require('path');

const importMetaResolve = import('import-meta-resolve');

const resolveModulePath = async (specifier, resolveFrom) => {
	const resolveFromDir = path.dirname(resolveFrom);
	try {
    /* added decodeURI in 2 places */
		return decodeURI(require.resolve(p, {
			paths: [resolveFromDir],
		}));
	} catch (e) {
		const { resolve } = await importMetaResolve;
		return decodeURI(resolve(specifier, `file://${resolveFromDir}`).replace(/^file:\/\//, ''));
	}
};

module.exports = new Resolver({
	async resolve(props) {
		const {
			filePath,
			specifier,
			dependency: { resolveFrom },
		} = props;
		try {
			const p = filePath ?? specifier;
			if (p == null) {
				return null;
			}
			return {
				filePath: await resolveModulePath(p, resolveFrom),
			};
		} catch (e) {
			return null;
		}
	},
});
