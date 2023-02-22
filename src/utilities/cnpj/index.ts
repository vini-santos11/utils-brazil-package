import { removeNonDigits } from '../../helpers/removeNonDigits';

export function formatCNPJ(value: string | number): string | RangeError {
	const lengthError = new RangeError('Value must have 14 digits')
	
	value = String(value);

	removeNonDigits(value);

	//verify if value length is greater than 14 or less than 14 return lengthError
	if (value.length !== 14) return lengthError;

  	value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');

	return value;
}