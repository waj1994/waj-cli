import type { ProTableProps } from '@ant-design/pro-components'
import type { ParamsType } from '@ant-design/pro-provider'
import { ProTable } from '@ant-design/pro-components'
import clsx from 'clsx'
import { useRef } from 'react'
import { useTableHeight } from './hooks/useTableHeight'

export interface BaseTableProps<DataType, Params, ValueType>
  extends ProTableProps<DataType, Params, ValueType> {
  residual?: number
  containerClass?: string
  order?: boolean
}

export default function BaseTable<
  DataType extends Record<string, any>,
  Params extends ParamsType = ParamsType,
  ValueType = 'text',
>({
  containerClass,
  order = true,
  columns,
  residual = 0,
  request,
  ...props
}: BaseTableProps<DataType, Params, ValueType>) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const height = useTableHeight(
    containerRef,
    document.querySelector('.table-search'),
    residual
    ?? 16
    + (props.toolBarRender ? 64 : 48)
    + 47
    + 48
    + (props.search === false ? 0 : 16),
  )

  /**
   * 数据请求
   */
  const localRequest: ProTableProps<DataType, Params, ValueType>['request']
    = request
      ? async (params, sort, filter) => {
        return await request?.(
          params,
          sort,
          filter,
        )
      }
      : undefined

  return (
    <div
      ref={containerRef}
      className={clsx('h-full', containerClass)}
    >
      <ProTable
        search={{
          className: 'table-search',
        }}
        rowKey="id"
        request={localRequest}
        options={false}
        columns={
          order
            ? [
                {
                  dataIndex: 'index',
                  valueType: 'index',
                  width: 48,
                },
                ...(columns || []),
              ]
            : columns
        }
        scroll={{
          y: height,
          scrollToFirstRowOnChange: true,
        }}
        pagination={{
          size: 'default',
          showQuickJumper: true,
          showSizeChanger: true,
          pageSizeOptions: ['10', '20', '50', '100'],
        }}
        tableAlertRender={false}
        tableAlertOptionRender={false}
        {...props}
      />
    </div>
  )
}
