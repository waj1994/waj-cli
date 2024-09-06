import mockjs from 'mockjs';

export default {
  'GET /api/demo': mockjs.mock({
      message: 'ok',
      data: {
        'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
      },
      code: 0,
  }),
};
