const config = require("parcel-bundler/src/utils/config");

module.exports = async function(bundler) {
  const pkg = await config.load(bundler.mainFile, ["package.json"]);
  (pkg.parcelDisableLoaders || []).forEach(type => {
    delete bundler.bundleLoaders[type];
  });
};
