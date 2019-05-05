import template from './template/Menu.html'

export default {

  name: '${prefix}menu',

  propTypes: {
    mode: {
      type: 'string',
      value: 'horizontal'
    },
    theme: {
      type: 'string',
      value: 'dark'
    },
    isCollapsed: {
      type: 'boolean',
      value: false
    },
    activeName: {
      type: 'string'
    },
    openNames: {
      type: 'array',
      value: []
    },
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    }
  },

  template,

  watchers: {
    theme(theme) {
      this.fire(
        'themeChanged',
        { theme },
        true
      );
    },
    isCollapsed(isCollapsed) {
      this.fire(
        'isCollapsedChanged',
        { isCollapsed },
        true
      );
    }
  },

  events: {
    menuItemSelected(event, data) {
      if (event.phase > 0) {
        this.fire(
          'menuItemSelected',
          data,
          true
        );
      }
    }
  },

  methods: {
  },

  afterMount() {
    console.log(this.get('activeName'), this.get('openNames'))
  }
};