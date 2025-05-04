// lib/utils/activeDirectoryUtils.ts
export function parseActiveDirectoryDate(activeDirectoryDate: string): Date {
	const truncatedPwdLastSet = activeDirectoryDate.substring(
		0,
		activeDirectoryDate.length - 4,
	);

	const windowsEpoch = Date.UTC(1601, 0, 1);
	return new Date(windowsEpoch + Number.parseInt(truncatedPwdLastSet));
}
