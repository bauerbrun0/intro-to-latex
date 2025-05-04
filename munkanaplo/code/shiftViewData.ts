// lib/types/shiftViewData.ts
export type ProductionShiftViewData = {
	shifts: {
		startDay: Date;
		endDay: Date;
		firstProductionEntry: Date;
		lastProductionExit: Date;
		totalWorkedTimeMs: number;
		totalInFactoryTimeMs: number;
		totalInProductionTimeMs: number;
		overtimeMs: number;
		inFactoryIntervals: {
			startDate: Date;
			endDate: Date;
			timeInFactoryMs: number;
			totalProductionTimeMs: number;
			inProductionIntervals: {
				startDate: Date;
				endDate: Date;
				timeInProductionMs: number;
			}[];
		}[];
	}[];
	numberOfShifts: number;
	totalTimeWorkedMs: number;
	averageTimeWorkedMs: number;
	totalTimeInFactoryMs: number;
	averageTimeInFactoryMs: number;
	totalTimeInProductionMs: number;
	averageTimeInProductionMs: number;
	totalOvertimeMs: number;
	cardUsageAnomalies: {
		cardUsageIndex: number;
		error: string;
	}[];
};

export type OfficeShiftViewData = {
	shifts: {
		day: Date;
		firstFactoryEntry: Date;
		lastFactoryExit: Date;
		timeWorkedMs: number;
		overtimeMs: number;
	}[];
	numberOfShifts: number;
	totalTimeWorkedMs: number;
	averageTimeWorkedMs: number;
	mostTimeWorkedMs: number;
	leastTimeWorkedMs: number;
	totalOvertimeMs: number;
};
