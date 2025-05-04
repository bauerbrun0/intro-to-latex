// lib/types/shiftViewData.ts
export type ProductionShiftViewDataIntervalDates = {
	shifts: {
		startDay: Date;
		endDay: Date;
		inFactoryIntervals: {
			startDate: Date;
			endDate: Date;
			inProductionIntervals: {
				startDate: Date;
				endDate: Date;
			}[];
		}[];
	}[];
	cardUsageAnomalies: {
		cardUsageIndex: number;
		error: string;
	}[];
};

export type OfficeShiftViewDataIntervalDates = {
	shifts: {
		day: Date;
		firstFactoryEntry: Date;
		lastFactoryExit: Date;
	}[];
};
