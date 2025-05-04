// lib/auth/session.ts
export function generateSessionToken(): string {}

export async function createSession(
	token: string,
	userEmployeeId: string,
	userPasswordLastSet: Date,
	passwordChangeIntervalInMinutes: number,
): Promise<Session> {}
export async function validateSessionToken(
	token: string,
): Promise<SessionValidationResult> {}

export async function invalidateSession(sessionId: string): Promise<void> {}

export type SessionValidationResult =
	| { session: Session; user: User }
	| { session: null; user: null };

export function setSessionTokenCookie(
	event: RequestEvent,
	token: string,
	expiresAt: Date,
): void {}

export function deleteSessionTokenCookie(event: RequestEvent): void {}
