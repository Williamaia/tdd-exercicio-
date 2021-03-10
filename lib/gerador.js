class Gerador {

    montarPropostas(cliente){

        if(cliente.valorDoEmprestimo < 100.00){
            throw 'Valor do emprestimo tem que ser entre R$100,00 e R$100.000,00';
          }
          

        if(!cliente.nome){
            throw 'Nome não pode ser vazio.';
        }

        if(cliente.idade < 18 || cliente.idade > 70){
            throw 'Idade tem que ser entre 18 e 70 anos.';
        }
        
        if(cliente.salario <= 1000.00){
            return [
                this.gerarPropostas(2, 2, cliente.valorDoEmprestimo),
                this.gerarPropostas(3, 2, cliente.valorDoEmprestimo)
            ];
        }

        if(cliente.salario >= 1000.00 && cliente.salario <= 5000.00){
            return [
                this.gerarPropostas(2, 1.3, cliente.valorDoEmprestimo),
                this.gerarPropostas(4, 1.5, cliente.valorDoEmprestimo),
                this.gerarPropostas(10, 1.5, cliente.valorDoEmprestimo)
            ];
        }

        if(cliente.salario >= 5000.01){
            return [
                this.gerarPropostas(2, 1.1, cliente.valorDoEmprestimo),
                this.gerarPropostas(4, 1.3, cliente.valorDoEmprestimo),
                this.gerarPropostas(10, 1.3, cliente.valorDoEmprestimo),
                this.gerarPropostas(20, 1.4, cliente.valorDoEmprestimo) 
            ];
        }       
    }

    gerarPropostas(parcelas, fator, valorDoEmprestimo){
        return {
            parcelas,
            total: fator * valorDoEmprestimo, 
            valorDaPacela: (fator * valorDoEmprestimo) / parcelas
        }
    }
}

module.exports = Gerador;