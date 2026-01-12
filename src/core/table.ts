export type Query = {
  sorts: PageSort[]
  params: QueryParam
}

export type PageSort = {
  field: string
  way: 'desc' | 'asc'
}

/**
 *  分页查询参数
 */
export type PageQuery = {
  page: number
  size: number
  sorts: PageSort[]
  params: QueryParam
}

/**
 * 分页查询结果
 */
export type PageResult = {
  page: number
  size: number
  pageData: any[]
  total: number
  totalPages: number
}

type QueryMethod = |
  'JsonEq' |
  'JsonLike' |
  'DateRange' |
  'DateTimeRange' |
  'Eq' |
  'EqAndOr' |
  'In' |
  'InArray' |
  'Like' |
  'MultiLike' |
  'NotEq' |
  'NotIn' |
  'NotInArray' |
  'StringMultiAnyInArray' |
  'StringMultiInArray' |
  'LikeI'


export type QueryParam = {
  [key: string]: {
    queryMethod: QueryMethod
    value: any
  }
}

export type TableInfoForWindow = {
  show: boolean
  row: any
}

export type ScrollParams = {
  xAxisScrollDir: 'forward' | 'backward'
  scrollLeft: number
  yAxisScrollDir: 'forward' | 'backward'
  scrollTop: number
}


