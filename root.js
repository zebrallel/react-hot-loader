if (process.env.NODE_ENV !== 'production') {
  var hot = require('./index').hot;
  if (module.hot) {
    // 这里的cache其实就是webpack定义的installedModules，里面存放着所有加载过的模块
    var cache = require.cache;

    //module.parents: './src/components/App.js'
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

    // 这里把缓存里的模块删掉，使得更新过来的文件生效
    delete cache[module.id];
  }

  // 这里是把被hot包裹组件的父级当做参数，传入了，说明我们不应该在最外层去使用hot方法，具体为什么要把父级传入，我们往下看
  exports.hot = hot(parent);
} else {
  // prod mode
  exports.hot = function (a) {
    return a;
  };
}
