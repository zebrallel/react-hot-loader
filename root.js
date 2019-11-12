if (process.env.NODE_ENV !== 'production') {
  var hot = require('./index').hot;
  if (module.hot) {
    //TODO: module 和 require 哪里来的
    var cache = require.cache;

    console.log(module.parents);

    // 这里的parents就是使用hot方法的文件路径
    // './src/components/App.js'
    // './src/components/Hook.js'
    if (!module.parents || module.parents.length === 0) {
      throw new Error(
        'React-Hot-Loader: `react-hot-loader/root` is not supported on your system. ' +
        'Please use `import {hot} from "react-hot-loader"` instead'
      );
    }
    // access parent
    var parent = cache[module.parents[0]];
    if (!parent) {
      throw new Error(
        'React-Hot-Loader: `react-hot-loader/root` is not supported on your system. ' +
        'Please use `import {hot} from "react-hot-loader"` instead'
      );
    }
    // remove self from a cache
    delete cache[module.id];
  }
  // setup hot for caller
  exports.hot = hot(parent);
} else {
  // prod mode
  exports.hot = function (a) {
    return a;
  };
}
