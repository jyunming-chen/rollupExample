
// Doc: https://github.com/rollup/rollup/wiki/JavaScript-API#format
export default { 
    entry: './src/js/main.js', 
    dest: './build/js/bundle.js', 
    format: 'umd',
	moduleName: 'NS',
    sourceMap: 'inline',
    plugins: []
};

