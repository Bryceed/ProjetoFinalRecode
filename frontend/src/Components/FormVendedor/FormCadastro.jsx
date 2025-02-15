import { useRef } from 'react'
import api from '../../services/api'
import 'bootstrap/dist/css/bootstrap.css';


// eslint-disable-next-line import/no-anonymous-default-export
const Formulario = () => {

    const nome = useRef()
    const telefone = useRef()
    const email = useRef()
    const senha = useRef()
    const logradouro = useRef()
    const numeroLogradouro = useRef()
    const bairro = useRef()
    const cidade = useRef()
    const estado = useRef()
    const cep = useRef()

    function enviarDados(event) {
        event.preventDefault()
        api.post("/vendedores/salvar/", {
            nome: nome.current.value,
            telefone: telefone.current.value,
            email: email.current.value,
            senha: senha.current.value,
            logradouro: logradouro.current.value,
            numeroLogradouro: numeroLogradouro.current.value,
            bairro: bairro.current.value,
            cidade: cidade.current.value,
            estado: estado.current.value,
            cep: cep.current.value,
        }).then((res) => console.log(res.data)).catch((err) => console.log(err))
    }

    return (
        <>
            <main className="vh-100 ">
                <form className="col-8 container" onSubmit={enviarDados}>
                    <h1 className="display-3 mt-4">Cadastrar Vendedor</h1>
                    <div className="input-group flex-nowrap mt-4">
                        <span className="input-group-text" id="addon-wrapping">Nome</span>
                        <input required type="text" className="form-control" ref={nome} placeholder="Nome" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>

                    <div className="input-group flex-nowrap mt-4">
                        <span className="input-group-text" id="addon-wrapping">Telefone</span>
                        <input required type="text" className="form-control" ref={telefone} placeholder="Nome" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <div className="input-group flex-nowrap mt-4">
                        <span className="input-group-text" id="addon-wrapping">email</span>
                        <input required type="text" className="form-control" ref={email} placeholder="Nome" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>

                    <div className="input-group flex-nowrap mt-4">
                        <span className="input-group-text" id="addon-wrapping">Senha</span>
                        <input required type="password" className="form-control" ref={senha} placeholder="Endereço" aria-label="Endereço" aria-describedby="addon-wrapping" />
                    </div>

                    <div className="input-group flex-nowrap mt-4">
                        <span className="input-group-text" id="addon-wrapping">Logradouro</span>
                        <input required type="text" className="form-control" ref={logradouro} placeholder="Nome" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <div className="input-group flex-nowrap mt-4">
                        <span className="input-group-text" id="addon-wrapping">numeroLoogradouro</span>
                        <input required type="text" className="form-control" ref={numeroLogradouro} placeholder="Nome" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>

                    <div className="input-group flex-nowrap mt-4">
                        <span className="input-group-text" id="addon-wrapping">bairro</span>
                        <input required type="text" className="form-control" ref={bairro} placeholder="Telefone" aria-label="Telefone" aria-describedby="addon-wrapping" />
                    </div>

                    <div className="input-group flex-nowrap mt-4">
                        <span className="input-group-text" id="addon-wrapping">cidade</span>
                        <input required type="text" className="form-control" ref={cidade} placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping" />
                    </div>

                    <div className="input-group flex-nowrap mt-4">
                        <span className="input-group-text" id="addon-wrapping">Estado</span>
                        <input required type="text" className="form-control" ref={estado} placeholder="Nome" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>

                    <div className="input-group flex-nowrap mt-4">
                        <span className="input-group-text" id="addon-wrapping">CEP</span>
                        <input required type="text" className="form-control" ref={cep} placeholder="CPF" aria-label="CPF" aria-describedby="addon-wrapping" />
                    </div>
                    <div className="col s12">
                        <button className="waves-light btn" type="submit">Enviar</button>
                    </div>
                </form>

            </main>
        </>
    );
}
export default Formulario;