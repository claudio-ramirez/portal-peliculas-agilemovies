export interface IPagination {
	paginable: Array<any>;
	totalItems: number;
	itemsPerPage: number;
	itemsPerPageByDefault: number;
	totalPages: number;
	page: number;
	defaultPage: number;
	maximumSize: number;
	align: boolean;
}
