# express-reg-routers
获取express已注册的路由列表

## 安装
```
npm install --save express-reg-routers
```

##使用
```
const registerRouters = require('express-reg-routers');
registerRouters(app, methodPathSeparators) // app为express的app，methodPathSeparators 为method和path的分割符，不填则默认用$分割，如： get$/baseUrl/path
```
