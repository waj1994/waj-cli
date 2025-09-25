import { useSize } from 'ahooks';
import type { RefObject } from 'react';

const defaultSize = {
	width: 0,
	height: 0
};

/**
 * 表格高度
 * @param containerRef 容器ref
 * @param arts 剩余的其他高度
 */
export function useTableHeight(
	containerRef: RefObject<HTMLDivElement | null>,
	...arts: (
		| number
		| RefObject<HTMLDivElement | null>
		| Element
		| null
		| string
	)[]
) {
	let { height: res } = useSize(containerRef) || defaultSize;
	arts.forEach(item => {
		if (!item) {
			return;
		}
		if (typeof item === 'string') {
			res -= document.querySelector(item)?.clientHeight || 0;
			return;
		}
		if (typeof item === 'number') {
			res -= item;
			return;
		}
		const tag = (item as RefObject<HTMLDivElement | null>)?.current || item;
		res -= (tag as Element)?.clientHeight || 0;
	});
	return res;
}
