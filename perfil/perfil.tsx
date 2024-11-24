import PerfilUsuario from "../src/app/interface/usuario";

const PaginaPerfil = () => {
    const usuario = {
        nome: 'José Lima',
        idade: 20,
        email: 'josé.lima@gmail.com'
    }

    return (
    <div>
        <h1>Perfil</h1>
        <PerfilUsuario usuario ={usuario} />
    </div>
    )
}
 
export default PaginaPerfil;