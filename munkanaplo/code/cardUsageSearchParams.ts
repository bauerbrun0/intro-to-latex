export type CardUsageSearchParams = {
	pageNumber: number;
	pageSize: number;
	orderBy?: "id" | "userEmployeeId" | "gate" | "eventType" | "date";
	order?: "asc" | "desc";
	id?: string;
	userEmployeeId?: string;
	gate?: "Main" | "Production";
	eventType?: "Entry" | "Exit";
	startDate?: Date;
	endDate?: Date;
};
