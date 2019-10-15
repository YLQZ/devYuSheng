# vscode API

vscode api 以帮助 vscode 插件开发

## commands 命令

用于处理命令的命名空间

### executeCommand 执行命令

```
executeCommand<T>(command: string, ...rest: any[]): Thenable<T | undefined>
command：命令字符串
rest：传递的参数
```

### getCommands 获取命令列表

检索所有可用命令的列表。下划线开头的命令被视为内部命令。

```
getCommands(filterInternal?: boolean): Thenable<string[]>
filterInternal：布尔值  true时不查看每部命令

返回 命令ID列表
```

### registerCommand 注册命令

注册可以通过键盘快捷键，菜单项，操作或直接调用的命令。
使用现有命令标识符两次注册命令将导致错误。(重复注册同样的命令将导致错误)

```
registerCommand(command: string, callback: (args: any[]) => any, thisArg?: any): Disposable
command：命令字符串
callback： 命令的回调； 逻辑处理函数
```

### registerTextEditorCommand 注册文本编辑命令

注册可以通过键盘快捷键，菜单项，操作或直接调用的文本编辑器命令。

```
registerTextEditorCommand(command: string, callback: (textEditor: TextEditor, edit: TextEditorEdit, args: any[]) => void, thisArg?: any): Disposable
command：命令字符串
callback： 命令的回调； 逻辑处理函数
```

## comments 评论

## debug 调试

## env env 环境

## extensions 扩展

## languages 语言

## scm

## tasks 任务

## window 窗口

## workspace 工序区

## API Patterns API 模式
