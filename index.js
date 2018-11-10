const Path = require("path");
const config = require("parcel-bundler/src/utils/config");

module.exports = async function(bundler) {
  const relative = Path.join(bundler.options.rootDir, "index");
  const pkg = await config.load(relative, ["package.json"]);
  (pkg.parcelDisableLoaders || []).forEach(type => {
    delete bundler.bundleLoaders[type];
    bundler.addBundleLoader(type, require.resolve("./url-loader"));
  });
};
