export default {
  data: [
    {
      name: '이메일',
      url: 'gksdnr89@naver.com',
      type: 'content'
    },
    {
      name: '깃헙',
      url: 'https://github.com/luke-hanwook',
      type: 'url'
    },
    {
      name: '블로그',
      url: 'https://blog.naver.com/gksdnr89',
      type: 'url'
    },
    {
      name: '코드샌드박스',
      url: 'https://codesandbox.io/u/luke-hanwook',
      type: 'url'
    }
  ],
  list() {
      return Promise.resolve(this.data)
  }
}
