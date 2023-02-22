import { removeNonDigits } from '../../helpers/removeNonDigits';

export function formatCEP(value: string | number): string | RangeError {
	const lengthError = new RangeError('Value must have 8 digits')
	
	value = String(value);

	removeNonDigits(value);

	//verify if value length is greater than 8 or less than 8 return lengthError
	if (value.length !== 8) return lengthError;

  	value = value.replace(/(\d{5})(\d{3})/, '$1-$2');

	return value;
}