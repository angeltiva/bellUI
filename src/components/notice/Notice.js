import { add } from './base'

let config = {};

let addNotice = function (type, arg) {
    let data = {};
    data.type = type;

    if (Yox.is.string(arg)) {
        data.content = arg;
    }
    else {
        Yox.object.extend(data, arg, config);
    }

    add(data);
}

let updateConfig = function (data) {
    if (data.duration) {
        config.duration = data.duration;
    }

    if (data.top) {
        config.top = data.top;
    }
}

let body = document.body;
let element = document.createElement('div');
element.setAttribute('id', 'bell-notice-wrapper');
body.append(element);

Yox.prototype.$notice = {
    success: function (arg) {
        addNotice('success', arg);
    },
    info: function (arg) {
        addNotice('info', arg);
    },
    warning: function (arg) {
        addNotice('warning', arg);
    },
    error: function (arg) {
        addNotice('error', arg);
    },
    loading: function (arg) {
        addNotice('loading', arg);
    },
    config: function (options) {
        updateConfig(options);
    },
    destroy: function () {
        console.log('destroy');
    }
};