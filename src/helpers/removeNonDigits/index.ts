export function removeNonDigits(value: string | number): string {
	//remove all non-digit characters from value and trim it
	value = String(value);
	return value.trim().replace(/\D/g, '');
}