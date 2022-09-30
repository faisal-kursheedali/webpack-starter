const {
  merge
} = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const crypto = require("crypto");
const crypto_orig_createHash = crypto.createHash;
crypto.createHash = algorithm => crypto_orig_createHash(algorithm == "md4" ? "sha256" : algorithm);
module.exports = (envVars) => {
  const {
    env
  } = envVars
  const envConfig = require(`./webpack.${env}.js`)
  const config = merge(commonConfig, envConfig)
  return config
}