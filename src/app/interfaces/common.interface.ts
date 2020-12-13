export interface CommonResponse<T> {
  pagination: Pagination;
  items: T;
}

export interface StatusResponse {
  status: string;
}

export interface Pagination extends CommonParams {
  total: number;
}

export interface CommonParams {
  start?: number;
  limit?: number;
}

