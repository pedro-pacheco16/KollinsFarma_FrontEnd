import { Link} from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className='w-full bg-indigo-900 text-white
                flex justify-center py-4'>
            
                <div className="container flex justify-between text-lg">
                   Kollins Farma

                    <div className='flex gap-4'>
                        Produtos
                        <Link to='/categorias' className='hover:underline'>Categoria</Link>
                        
                        Deletar
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar