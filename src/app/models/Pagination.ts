export interface Pagination {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
  }
  
  export class PaginatedResult<T> {
    result: T | null = null;
    pagination: Pagination = {currentPage:0,itemsPerPage:0,totalItems:0,totalPages:0};
  }