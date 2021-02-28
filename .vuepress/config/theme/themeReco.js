module.exports = {
  type: 'HomePageOne',
  logo: '/icon.png',
  // 搜索设置
  search: true,
  searchMaxSuggestions: 5,
  // 自动形成侧边导航
  //sidebar: true,
  // 最后更新时间
  //lastUpdated: 'Last Updated', // string | boolean
  // 作者
  author: 'cnlimiter',
  //authorAvatar: '/head.png',
  // 备案号
  // record: '京ICP备17067634号-1',
  // 项目开始时间
  startYear: '2020',
  algolia: {
    apiKey: '2d8d21e6a769a5f97338e1ba1a84a18d',
    indexName: 'vuepress-theme-reco'
    // inputSelector: '### REPLACE ME ####',
    // algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
    // debug: false // Set debug to true if you want to inspect the dropdown
  },
  // valine 设置
  valineConfig: {
    appId: 'kukgVSz3sxp1NfNFF2BxvMXD-gzGzoHsz',
    appKey: 'bMT5c9AUh7IGMu7P1oC7Cpip',
    placeholder: '填写邮箱可以收到回复提醒哦！',
    verify: true, // 验证码服务
    // notify: true, // 
    recordIP: true,
    showComment: false
  },
 
  // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
  //repo: 'vuepress-reco/vuepress-reco.github.io',
  // // 假如文档不是放在仓库的根目录下：
  //docsDir: 'docs',
  // // 假如文档放在一个特定的分支下：
  //docsBranch: 'gh-pages-source',
  // // 默认是 false, 设置为 true 来启用
  editLinks: false,
  mode: 'light',
  codeTheme: 'tomorrow',
  noFoundPageByTencent: false
}