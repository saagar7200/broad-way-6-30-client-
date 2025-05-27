/* eslint-disable @typescript-eslint/no-explicit-any */

import { jwtDecode } from "jwt-decode";

export const parseToken = (token: string) => {
	try {
		const decodedData: { exp: number; role: string } = jwtDecode(token);

		const now = Math.floor(Date.now() / 1000);

		if (now > decodedData?.exp) {
			return {
				valid: false,
				role: null,
			};
		}

		return {
			valid: true,
			role: decodedData.role,
		};

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (error: any) {
		return { valid: false, role: null };
	}
};
