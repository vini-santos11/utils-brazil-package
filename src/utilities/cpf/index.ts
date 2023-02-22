import { removeNonDigits } from '../../helpers/removeNonDigits';

export function formatCPF(value: string | number): string | RangeError {
	const lengthError = new RangeError('Value must have 11 digits')
	
	value = String(value);

	removeNonDigits(value);

	//verify if value length is greater than 11 or less than 11 return lengthError
	if (value.length !== 11) return lengthError;

  	value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

	return value;
}