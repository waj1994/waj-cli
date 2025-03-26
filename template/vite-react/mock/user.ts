export default [
  {
    url: '/api/user/list',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          'list|20': [
            {
              id: '@id',
              name: '@cname',
              email: '@email',
              phone: '@phone',
              address: '@city',
              createTime: '@datetime',
            },
          ],
          'total': 200,
        },
        message: 'success',
      }
    },
  },
]
