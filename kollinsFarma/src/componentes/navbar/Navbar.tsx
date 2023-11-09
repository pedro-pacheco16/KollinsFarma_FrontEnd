import { Link} from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-4 p-10 ">
            
                <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2x1 font-bold">Kollins Farma </Link>

                    <div className='flex gap-4'>
                        <Link to='/categorias' className='hover:underline'>Categoria</Link>
                        <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar</Link>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar