"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugin_1 = require("@parcel/plugin");
exports.default = new plugin_1.Resolver({
    async resolve({ filePath }) {
        try {
            return {
                filePath: require.resolve(filePath),
            };
        }
        catch (e) {
            return null;
        }
    },
});
//# sourceMappingURL=main.js.map