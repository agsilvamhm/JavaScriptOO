const user = {
    nome:'Adalberto',
    email:'agsilva.mhm@gmail.com',
    nascimento:'16/01/1974',
    role:'Admin',
    ativo:true,
    exibirinfos: function (){
        console.log(this.nome, this.email)
    }
}

user.exibirinfos();
