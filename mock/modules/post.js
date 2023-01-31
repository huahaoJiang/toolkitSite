export default [
  {
    url: '/api/posts',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: [
          {
            id: 36,
            title: '使用纯css优雅配置移动端rem布局',
            author: 'Ronnie',
            category: '移动端,Css',
            description: '通常配置rem布局会使用js进行处理，比如750的设计稿会这样...',
            content: '通常配置rem布局会使用js进行处理，比如750的设计稿会这样',
            isRecommend: true,
            isPublish: true,
            createDate: '2021-11-04T04:03:36.000Z',
            updateDate: '2021-11-04T04:03:36.000Z'
          },
          {
            id: 35,
            title: 'Vue2&Vue3项目风格指南',
            author: 'Ronnie',
            category: 'Vue',
            description: '总结的Vue2和Vue3的项目风格',
            content: '### 1. 命名风格\n\n> 文件夹如果是由多个单词组成，应该始终是横线连接 ',
            isRecommend: true,
            isPublish: true,
            createDate: '2021-10-25T08:57:47.000Z',
            updateDate: '2022-02-28T04:02:39.000Z'
          },
          {
            id: 28,
            title: '如何优雅的给图片添加水印',
            author: '张传龙',
            category: 'JavaScript',
            description: '优雅的给图片添加水印',
            content: '我之前写过一篇文章记录了一次上传图片的优化史',
            isRecommend: true,
            isPublish: true,
            createDate: '2021-06-24T18:46:19.000Z',
            updateDate: '2021-09-23T07:51:22.000Z'
          },

          {
            id: 26,
            title: '前端缓存的理解',
            author: '张传龙',
            category: 'Http',
            description: '谈谈前端缓存的理解',
            content: '> 背景\n\n公司有个vue-cli3移动端web项目发版更新后发现部分用户手机在钉钉内置浏览器打开出现了缓存',
            isRecommend: true,
            isPublish: true,
            createDate: '2021-06-10T18:51:19.000Z',
            updateDate: '2021-09-17T09:33:24.000Z'
          },
          {
            id: 24,
            title: '使用jQuery的load方法帮女朋友实现套娃Html',
            author: '张传龙',
            category: 'JavaScript',
            description: '最近女朋友刚入职新公司，接到的第一个任务就是将一个网站所有的页面合并成一个页面',
            content: '最近女朋友刚入职新公司，接到的第一个任务就是将一个网站所有的页面合并成一个页面',
            isRecommend: true,
            isPublish: true,
            createDate: '2021-05-26T15:26:06.000Z',
            updateDate: '2021-09-17T09:33:24.000Z'
          },
          {
            id: 18,
            title: 'Promise的五个静态方法',
            author: '张传龙',
            category: 'JavaScript',
            description: '简单介绍下在 Promise 类中，有5 种静态方法及它们的使用场景',
            content: '## 1. Promise.all\n\n并行执行多个 promise，并等待所有 promise 都准备就绪。再对它们进行处理。',
            isRecommend: true,
            isPublish: true,
            createDate: '2021-02-22T22:37:06.000Z',
            updateDate: '2021-09-17T09:33:24.000Z'
          }
        ]
      }
    }
  }
]
