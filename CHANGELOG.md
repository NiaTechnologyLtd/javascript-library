# 代码变更说明
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
