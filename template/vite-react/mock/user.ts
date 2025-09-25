import { SUCCESS_CODE } from '../src/constants';

export default [
	{
		url: '/api/user/list',
		method: 'get',
		response: req => {
			return {
				code: SUCCESS_CODE,
				data: {
					[`list|${req.query.size}`]: [
						{
							id: '@id',
							name: '@cname',
							email: '@email',
							phone: '@phone',
							address: '@city',
							createTime: '@datetime'
						}
					],
					total: 200
				},
				message: 'success'
			};
		}
	}
];
