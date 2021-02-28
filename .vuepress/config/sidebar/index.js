module.exports = {
  'zh': Object.assign({}, {
    '/views/main/': [
      {
        title: '欢迎页',
        collapsable: false,
        children: [
          '',

        ]
      },
      {
        title: '教程',
        collapsable: true,
        children: [
          'reg-skin',
          'config-client',
        ]
      },
      {
        title: '服务器',
        collapsable: true,
        children: [
          'server',
          'mod',

        ]
      },
      {
        title: '常见问题',
        collapsable: true,
        children: [
          'question',
        ]
      }],



    }) ,
}