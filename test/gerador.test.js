const Gerador = require('../lib/gerador');
const g = new Gerador();

describe('Gerador', () =>{

    test('faixa até 1000', () =>{

        const cliente = {
            nome: 'Chuck Norris',
            salario: 500.00,
            idade: 30,
            valorDoEmprestimo: 1000.00,
        };

        const props = g.montarPropostas(cliente);
        expect(props.length).toBe(2);

        expect(props[0].parcelas).toBe(2);
        expect(props[0].total).toBeCloseTo(2000.00);
        expect(props[0].valorDaPacela).toBeCloseTo(1000.00);

        expect(props[1].parcelas).toBe(3);
        expect(props[1].total).toBeCloseTo(2000.00);
        expect(props[1].valorDaPacela).toBeCloseTo(666.67);
    });

    test('faixa até 1000 até 5000', () =>{

        const cliente = {
            nome: 'Jean Claude Van Dame',
            salario: 2500.00,
            idade: 50,
            valorDoEmprestimo: 1000.00,
        };

        const props = g.montarPropostas(cliente);
        expect(props.length).toBe(3);

        expect(props[0].parcelas).toBe(2);
        expect(props[0].total).toBeCloseTo(1300.00);
        expect(props[0].valorDaPacela).toBeCloseTo(650.00);

        expect(props[1].parcelas).toBe(4);
        expect(props[1].total).toBeCloseTo(1500.00);
        expect(props[1].valorDaPacela).toBeCloseTo(375.00);

        expect(props[2].parcelas).toBe(10);
        expect(props[2].total).toBeCloseTo(1500.00);
        expect(props[2].valorDaPacela).toBeCloseTo(150.00);
    });


    test('faixa acima 5000.01', () =>{
        
        const cliente = {
            nome: 'Sylvester Stallone',
            salario: 7000.00,
            idade: 50,
            valorDoEmprestimo: 10000.00,
        };

        const props = g.montarPropostas(cliente);
        expect(props.length).toBe(4);

        expect(props[0].parcelas).toBe(2);
        expect(props[0].total).toBeCloseTo(11000.00);
        expect(props[0].valorDaPacela).toBeCloseTo(5500.00);

        expect(props[1].parcelas).toBe(4);
        expect(props[1].total).toBeCloseTo(13000.00);
        expect(props[1].valorDaPacela).toBeCloseTo(3250.00);

        expect(props[2].parcelas).toBe(10);
        expect(props[2].total).toBeCloseTo(13000.00);
        expect(props[2].valorDaPacela).toBeCloseTo(1300.00);

        expect(props[3].parcelas).toBe(20);
        expect(props[3].total).toBeCloseTo(14000.00);
        expect(props[3].valorDaPacela).toBeCloseTo(700.00);
    });


    test('cliente sem nome', () =>{
        
        const cliente = {
            salario: 7000.00,
            idade: 50,
            valorDoEmprestimo: 10000.00,
        };

        expect(() => {
            g.montarPropostas(cliente)
        }).toThrow('Nome não pode ser vazio.');

    });

});