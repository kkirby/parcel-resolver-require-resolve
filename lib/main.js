"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugin_1 = require("@parcel/plugin");
exports.default = new plugin_1.Resolver({
    async resolve(props) {
        const { filePath, specifier } = props;
        try {
            const p = filePath !== null && filePath !== void 0 ? filePath : specifier;
            if (p == null) {
                return null;
            }
            return {
                filePath: require.resolve(p),
            };
        }
        catch (e) {
            return null;
        }
    },
});
//# sourceMappingURL=main.js.map