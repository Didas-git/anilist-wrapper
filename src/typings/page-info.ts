export interface IPageInfo {
    total?: number | null;
    perPage?: number | null;
    currentPage?: number | null;
    lastPage?: number | null;
    hasNextPage?: boolean | null;
}