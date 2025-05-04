// lib/types/user.ts
import { Type } from "@sinclair/typebox";
import type { Static } from "@sinclair/typebox";

export const activeDirectoryUserSchema = Type.Object({
	employeeID: Type.String(),
	distinguishedName: Type.String(),
	sAMAccountName: Type.String(),
	employeeNumber: Type.String(),
	memberOf: Type.Union([Type.String(), Type.Array(Type.String())], {
		default: "",
	}),
	sn: Type.String(),
	givenName: Type.String(),
	displayName: Type.String(),
	pwdLastSet: Type.String(),
});

export type ActiveDirectoryUser = Static<typeof activeDirectoryUserSchema>;
export const activeDirectoryUserValidator: Validator<ActiveDirectoryUser> =
	createValidator<ActiveDirectoryUser>(activeDirectoryUserSchema);
