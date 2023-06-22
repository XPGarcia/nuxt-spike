export interface Link {
  active: boolean;
  label: string;
  url: string;
}

export interface Page<T> {
  data: T[];
  links: Link[];
  perPage: number;
  currentPage: number;
  lastPage: number;
  from: number;
  to: number;
  total: number;
  nextPageUrl?: string;
  firstPageUrl: string;
  prevPageUrl?: string;
  lastPageUrl: string;
}
