const path = require('path')
const themeConfig = require('./config/theme/')

module.exports = {
  dest: 'public',
  port: '8080',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'author', content: 'cnlimiter' }],
    ['meta', { name: 'keywords', content: 'vuepress,cnlimiter,' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#42b983' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icon.png' }],
    ['link', { rel: 'mask-icon', href: '/icon.svg', color: '#42b983' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icon.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  theme: 'reco',
  themeConfig,
  actionLink:'/views/main/',
  locales: {
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: "演变空间",
      description: '让我们一起建造新的家园，一个新的世界。',
      actionText: '加入'
    },
    // '/en/': {
    //   lang: 'en-US',
    //   title: "vuepress-theme-reco",
    //   description: 'A simple and beautiful vuepress Blog & Doc theme.'
    // }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    ['@vuepress-reco/comments', {
      solution: 'valine',
      options: {
        appId: 'kukgVSz3sxp1NfNFF2BxvMXD-gzGzoHsz',
        appKey: 'bMT5c9AUh7IGMu7P1oC7Cpip',
        placeholder: '填写邮箱可以收到回复提醒哦！',
        verify: true, // 验证码服务
        // notify: true,
        recordIP: true,
        showComment: false
      }
    }],
    [
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)咦！回来了！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)喔哟，别走啊！",
        recoverTime: 2000
      }
    ],
    ['nest', {
      color: '0,0,0', // color of lines, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
      pointColor: '0,0,0', // color of points, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
      opacity: 0.5, // the opacity of line (0~1), default: 0.5.
      count: 99, // the number of lines, default: 99.
      zIndex: -1, // z-index property of the background, default: -1.
      showInMobile: false // whether to display on the mobile side, default: false.
    }],
    [
      "cursor-effects",
      {
        size: 2,                    // size of the particle, default: 2
        shape: ['star'],  // shape of the particle, default: 'star'
        zIndex: 999999999           // z-index property of the canvas, default: 999999999
      }
    ],
    // [
    //   "ribbon",
    //   {
    //     size: 90,     // width of the ribbon, default: 90
    //     opacity: 0.8, // opacity of the ribbon, default: 0.3
    //     zIndex: -1    // z-index property of the background, default: -1
    //   }
    // ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    ],
    // [
    //   '@vuepress/google-analytics',
    //   {
    //     ga: 'UA-149716079-2'
    //   }
    // ],
    [
      '@vuepress/plugin-register-components',
      {
        components: [
          {
            name: 'home-page-one',
            path: path.resolve(__dirname, './components/HomePageOne.vue')
          }
        ],
        //componentsDir: path.resolve(__dirname, './demo')
      }
    ],
    '@vuepress-reco/extract-code',
    '@vuepress-reco/comments',
    'flowchart',
    'cursor-effects'
    ['sitemap', {
      hostname: 'https://mc.evolvefield.cn'
    }],
    // ['@vuepress-reco/rss', {
    //   site_url: 'https://vuepress-theme-reco.recoluan.com',
    //   copyright: ''
    // }],
    ['@vuepress-reco/bulletin-popover', {
      body: [
        {
          type: 'title',
          content: '欢迎加入QQ交流群 🎉🎉🎉',
          style: 'text-aligin: center;'
        },
        {
          type: 'text',
          content: 'QQ群：720975019',
          style: 'text-align: center;'
        },
        // {
        //   type: 'text',
        //   content: 'QQ群2：1061561395',
        //   style: 'text-align: center;'
        // },
        {
          type: 'image',
          src: '/qq.png'
        }
      ],
      footer: [
        {
          type: 'button',
          text: '赞助',
          link: '/views/others/donate.html'
        }
      ]
    }],
  ]
}  