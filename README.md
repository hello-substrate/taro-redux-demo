# rmrk-front

## @路径别名配置

[@路径别名配置](https://taro-docs.jd.com/taro/docs/config-detail#alias)

1. `config/index.js` 新增

```
const path = require("path");
alias: {
  "@": path.resolve(__dirname, "..", "src"),
},
```

2. `tsconfig.json`

```
"compilerOptions": {
  "paths": {"@/*": ["./src/*"]}
}
```

## 全局变量

1. 在 `config/index.js/dev.js/prod.js` 文件中

```
defineConstants: {
  IS_DEBUG : process.env.NODE_ENV === 'development',
  IS_H5: process.env.TARO_ENV === "h5",
},
```

2. `types/global.d.ts`

```
declare const IS_DEBUG: any;
declare const IS_H5: any;
```
