export interface CacheStore {
  list: ListPage,
}

export interface ListPage {
  search: string,
  length: number,
  pageSize: number,
  pageIndex: number,
}
