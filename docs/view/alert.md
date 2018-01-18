> 基础用法

    export default {
        template: `
        <div>
            <Alert>An info prompt</Alert>
            <br>
            <Alert type="success">A success prompt</Alert>
            <br>
            <Alert type="warning">A warning prompt</Alert>
            <br>
            <Alert type="error">An error prompt</Alert>
        </div>
        `
    }

> 添加描述

    export default {
        template: `
        <div>
            <Alert>
                An info prompt
                <Desc>
                    Content of prompt. Content of prompt. Content of prompt. Content of prompt.
                </Desc>
            </Alert>
            <br>
            <Alert type="success">
                A success prompt
                <Desc>
                    Content of prompt. Content of prompt. Content of prompt. Content of prompt.
                </Desc>
            </Alert>
            <br>
            <Alert type="warning">
                A warning prompt
                <Desc>
                    Content of prompt. Content of prompt. Content of prompt. Content of prompt.
                </Desc>
            </Alert>
            <br>
            <Alert type="error">
                An error prompt
                <Desc>
                    Custom error description copywriting.
                    <i style="font-size: 18px; margin: 0 10px;" class="bell-icon bell-icon-help-circled"></i>
                </Desc>
            </Alert>
        </div>
        `
    }

> 显示 icon

    export default {
        template: `
        <div>
            <Alert showIcon>An info prompt</Alert>
            <br>
            <Alert type="success" showIcon>A success prompt</Alert>
            <br>
            <Alert type="warning" showIcon>A warning prompt</Alert>
            <br>
            <Alert type="error" showIcon>An error prompt</Alert>
            <br>
            <Alert showIcon>
                An info prompt
                <Desc>
                    Content of prompt. Content of prompt. Content of prompt. Content of prompt.
                </Desc>
            </Alert>
            <br>
            <Alert type="success" showIcon>
                A success prompt
                <Desc slot="desc">
                    Content of prompt. Content of prompt. Content of prompt. Content of prompt.
                </Desc>
            </Alert>
            <br>
            <Alert type="warning" showIcon>
                A warning prompt
                <Desc slot="desc">
                    Content of prompt. Content of prompt. Content of prompt.
                </Desc>
            </Alert>
            <br>
            <Alert type="error" showIcon>
                An error prompt
                <Desc slot="desc">
                    Custom error description copywriting.
                </Desc>
            </Alert>
            <br>
            <Alert showIcon closable>
                Custom icon

                <Desc slot="desc">Custom icon copywriting. Custom icon copywriting. Custom icon copywriting. </Desc>
            </Alert>
        </div>
        `
    }

> 显示关闭按钮

    export default {
        template: `
        <div>
            <Alert showIcon closable>An info prompt</Alert>
            <br>
            <Alert type="success" showIcon closable>A success prompt</Alert>
            <br>
            <Alert type="warning" showIcon closable>A warning prompt</Alert>
            <br>
            <Alert type="error" showIcon closable>An error prompt</Alert>
        </div>
        `
    }

> 自定义关闭按钮

    export default {
        template: `
        <div>
            <Alert showIcon closable closeText="No longer prompt">An info prompt</Alert>
            <br>
            <Alert type="success" showIcon closable closeText="No longer prompt">A success prompt</Alert>
            <br>
            <Alert type="warning" showIcon closable closeText="No longer prompt">A warning prompt</Alert>
            <br>
            <Alert type="error" showIcon closable closeText="No longer prompt">An error prompt</Alert>
        </div>
        `
    }

#### API

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
type | 主题 | string | info、success、warning、error | info
closable | 是否可以关闭 | boolean | - | true
center | 文字是否居中 | boolean | - | true
closeText | 关闭按钮自定义文本 | string | - | -
showIcon | 是否显示图标 | boolean | - | false

> Events

事件名称 | 说明 | 回调参数
---|---|---
close | 关闭 alert 时触发的事件 | -