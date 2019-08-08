import Yox from 'yox'

import template from './template/Dialog.hbs'

import {
  BODY,
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
} from '../constant'

import {
  onTransitionEnd,
} from '../util'

const CLASS_OPEN = '${prefix}dialog-open'
const CLASS_FADE = '${prefix}dialog-fade'

export default Yox.define({

  template,

  model: 'open',

  propTypes: {
    title: {
      type: RAW_STRING,
      value: '温馨提示',
    },
    open: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    mask: {
      type: RAW_BOOLEAN,
      value: TRUE,
    },
    closable: {
      type: RAW_BOOLEAN,
      value: TRUE,
    },
    maskClosable: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    width: {
      type: RAW_NUMERIC,
      value: 320,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  watchers: {
    open(isOpen) {
      const me = this
      const element = me.$el
      if (isOpen) {
        Yox.dom.addClass(element, CLASS_OPEN)
      }
      else {
        Yox.dom.addClass(element, CLASS_FADE)
        // 动画一般作用在 wrapper 上面
        // 监听 $el 没用的
        onTransitionEnd(
          me.$refs.wrapper as HTMLElement,
          function () {
            Yox.dom.removeClass(element, CLASS_OPEN)
            Yox.dom.removeClass(element, CLASS_FADE)
            me.fire('close.dialog')
          }
        )
      }
    }
  },

  methods: {
    open() {
      this.set('open', TRUE)
    },
    close() {
      this.set('open', FALSE)
    }
  },

  afterMount() {
    const element = this.$el
    if (element.parentNode !== BODY) {
      Yox.dom.append(BODY, element)
    }
  },

  beforeDestroy() {
    Yox.dom.remove(BODY, this.$el)
  }

})
