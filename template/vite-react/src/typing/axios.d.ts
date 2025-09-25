namespace API {
	/**
	 * 分页参数
	 */
	interface PageParams {
		current?: number;
		pageSize?: number;
	}
	/**
	 * 分页响应
	 */
	interface PageResponse<T> {
		list: T[];
		total: number;
	}
}
