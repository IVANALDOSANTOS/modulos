const Aluno = function( nome, faltas, notas ){
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.calcularMedia = function () {
        let media = this.notas.reduce( function (acumulador , item ) {
            return acumulador + item;
        } );
        media = media  / this.notas.length ;
        return media;
    },
    this.marcarFalta = function (){
        this.faltas++;
    }
}
//  let al1 = new Aluno("Marcos", 0, [7,8,9]);
//  console.log( al1.faltas );
//  al1.marcarFalta();
// console.log( al1.faltas );

module.exports = Aluno;