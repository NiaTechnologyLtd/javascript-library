# 代码变更说明
## [2.0.0-alpha.8](///compare/v2.0.0-alpha.7...v2.0.0-alpha.8) (2021-03-16)


### ⚠ BREAKING CHANGES

* 修改了 principal-interface.ts 接口中 Identity 属性的命名为 identity。

### 代码重构

* 删除不合理的代码。 ecc9ab9


### 新功能

* 新增匿名身份信息 anonymous-identity.ts。 12dda57
* 新增身份概要信息基类 principal-base.ts。 ffd4cca
* 新增身份信息本地存储接口 principal/principalstorage-interface.ts。 a58db13
* 新增身份信息点类型 claim.ts。 7878179
* 新增身份信息点枚举类型 claim-type.ts。 6c6e78f
* 新增身份信息基类 identity-base.ts。 6493238
* 新增身份信息接口 identity-interface.ts。 d0919b3
* 新增身份摘要信息接口 principal-interface.ts。 afed21f

## [2.0.0-alpha.7](///compare/v2.0.0-alpha.6...v2.0.0-alpha.7) (2021-03-15)


### ⚠ BREAKING CHANGES

* 删除了 LocaleStorageModes 枚举和 ILocaleStorage 接口的定义。

### 工具

* 新增 store2 npm 包依赖。 d7cec63
* 引入了新的 npm 包 js-cookie 和 @types/js-cookie。 892a5b8


### 代码重构

* 删除了不合理的枚举 localestore-modes.ts 和本地存储接口 localestore-interface.ts。 6a73d57


### 新功能

* 完善了本地存储类库 localestore.ts。 17bed93
* 为 app-context.ts 增加了内置默认实现的服务集合字段 defaultProviders。 6a88213
* 新增 Cookie 操作脚本。 16e8806
* 新增本地存储方法枚举类型 localestore-modes.ts。 186e008
* 新增本地存储接口 localestore-interface.ts。 1b2286c
* 新增本地存储实现 src/core/localestore.ts (未完待续)。 2932b81
* 新增身份信息点类型 claim.ts ( issue [#1](https://gitlab.com/NiaTechnologyLtd/javascript-library/-/issues/1) )。 9dac1b1
* 新增身份信息点枚举脚本 claim-types.ts ( issue [#1](https://gitlab.com/NiaTechnologyLtd/javascript-library/-/issues/1) )。 e09d23f
* 修改了 localestore-modes.ts 枚举类型，添加了 CookieStorage 字段值。 1f4d22d

## [2.0.0-alpha.6](///compare/v2.0.0-alpha.5...v2.0.0-alpha.6) (2021-03-10)

## [2.0.0-alpha.5](///compare/v2.0.0-alpha.4...v2.0.0-alpha.5) (2021-03-10)


### 新功能

* 新增 SHA1 哈希算法脚本 sha1.ts。 610e35b
* 新增 SHA256 哈希算法脚本 sha256.ts。 ee8da0e
* 新增 SHA512 哈希算法脚本 sha512.ts。 2d74046

## [2.0.0-alpha.4](///compare/v2.0.0-alpha.3...v2.0.0-alpha.4) (2021-03-08)


### 新功能

* 新增哈希算法接口 hashalgorithm-interface.ts。 033121d
* 新增哈希算法名称枚举类型 hashalgorithm-name.ts。 7eee781
* 新增基于 crypto-js 模块的哈希算法基类和 MD5 算法实现。 7d9d3e4

## [2.0.0-alpha.3](///compare/v2.0.0-alpha.2...v2.0.0-alpha.3) (2021-03-08)


### 文档变更

* 修改了项目自述文档。 d5e8039
* 重新生成了 API 说明文档。 67670e5

## [2.0.0-alpha.2](///compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2021-03-07)


### 工具

* 修改了 tsc 构建目标为 ES2015。 c72cb7e


### 代码重构

* 删除了不合理的 query-info.ts 类型。 f9b00ec


### 新功能

* 新增 npm 包 query-string 依赖。 85a45da
* 新增 URI 查询字符串参数信息类 uri-queryinfo.ts( issue [#3](https://gitlab.com/NiaTechnologyLtd/javascript-library/-/issues/3) )。 6505295
* 新增 URL 查询字符串类 query-info.ts ( issue [#3](https://gitlab.com/NiaTechnologyLtd/javascript-library/-/issues/3) )。 7972675
* 新增 Web 工具类 web-utilities.ts ( issue [#3](https://gitlab.com/NiaTechnologyLtd/javascript-library/-/issues/3) )。 e5dac00
* 新增键值对接口 IKeyValuePair。 a1f2ec9
* 新增键值对类型 kvp.ts ( issue [#3](https://gitlab.com/NiaTechnologyLtd/javascript-library/-/issues/3) )。 4cfe8e4

## 2.0.0-alpha.1 (2021-03-06)


### 代码重构

* 开始使用 TypeScript 对项目进行重构。 27a3e30


### 工具

* 新增 TypeDoc，用来为 API 生成说明文档。 a871746


### BUG 修复

* 修改了方法参数类型定义。 089ad9b


### 新功能

* 初始化项目，准备开始进行重构。 510cd8a, closes #4
* 初始化项目。 0f60d0f
* 初始化项目自述文件。 1e15aaa
* 为 guard.ts 增加了 isNullOrEmpty 方法。 5bcc22d
* 新增 configuratioin.ts 配置模块。 eec4601
* 新增 environment-names.ts 枚举类型。 5372ccc
* 新增 Guard 脚本文件。 0b40bef
* 新增 string-builder.ts 脚本模块。 beb3bda
* 新增配置信息接口。 f97c5c0
* 新增守护程序脚本 guard.ts。 7b36fcd
* 新增异常助手类型 exception-helper.ts。 82dc79a
* 新增应用程序上下文脚本 app-context.ts。 cfc6554
* 新增正则表达式接口 regex-interface.ts 5a7ff7e
* 新增正则表达式实现 regex.ts。 81df30f


### 文档变更

* 修改了项目自述文件。 02c705d
* 修改了项目自述文件中的错误文本。 b85c0f4
* 重新生成了脚本库说明文档。 4acbc14
* 重新生成了接口说明文档。 7d13e3d
