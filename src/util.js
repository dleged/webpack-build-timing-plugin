const path = require('path');

/**
 * Get relative path from process.cwd() to the given absolute path
 * @param {string} absolutePath - The absolute path to convert
 * @returns {string} The relative path from process.cwd()
 */
function getRelativePath(absolutePath) {
    return path.relative(process.cwd(), absolutePath);
}

/**
 * Extract loader name from full loader path
 * @param {string} loaderPath - The full loader path
 * @returns {string} The loader name (e.g., 'css-loader' from '.../node_modules/css-loader/...')
 */
function getLoaderName(loaderPath) {
    const nodeModulesIndex = loaderPath.lastIndexOf('node_modules/');
    if (nodeModulesIndex === -1) return loaderPath;
    
    const afterNodeModules = loaderPath.slice(nodeModulesIndex + 'node_modules/'.length);
    const nextSlashIndex = afterNodeModules.indexOf('/');
    
    return nextSlashIndex === -1 ? afterNodeModules : afterNodeModules.slice(0, nextSlashIndex);
}

module.exports = {
    getRelativePath,
    getLoaderName
};
