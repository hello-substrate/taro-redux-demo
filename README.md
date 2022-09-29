# rmrk-front

## @路径别名配置

[@路径别名配置](https://taro-docs.jd.com/taro/docs/config-detail#alias)

1. `config/index.js` 新增

```
const path = require("path");
config.alias = {
  "@": path.resolve(__dirname, "..", "src")
};
```

2. `tsconfig.json`

```
"compilerOptions": {
  "paths": {"@/*": ["./src/*"]}
}
```

3. 运行遇到这个错误

```
BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
This is no longer the case. Verify if you need this module and configure a polyfill for it.

If you want to include a polyfill, you need to:
        - add a fallback 'resolve.fallback: { "path": require.resolve("path-browserify") }'
        - install 'path-browserify'
If you don't want to include a polyfill, you can use an empty module like this:
        resolve.fallback: { "path": false }
```

- 根据提示安装 `yarn add path-browserify`
- 在 `package.json` 中 设置 `{ "path": false }`
  ```
  "browser": {
    "path": false
  }
  ```

## 全局变量

1. 在 `config/index.js/dev.js/prod.js` 文件中
   字符串必须这样写 '"xxxx"'

```
defineConstants: {
  IS_DEBUG : process.env.NODE_ENV === '"development"',
  IS_H5: process.env.TARO_ENV === '"h5"',
},
```

2. `types/global.d.ts`

```
declare const IS_DEBUG: any;
declare const IS_H5: any;
```
