import { formatCPF } from "../src/utilities/cpf";

//test to check if cpf is valid
describe('CPF', () => {
    it('should format cpf correctly', () => {
        const cpf = '12345678909';
    
        const isValid = formatCPF(cpf);
    
        expect(isValid).toEqual('123.456.789-09');
    });
});
