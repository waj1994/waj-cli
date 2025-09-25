export default [
  {
    url: '/demo',
    method: 'get',
    response: () => ({
      code: 0,
      message: 'success',
      data: {
        name: '@cname'
      }
    })
  }
]
