import Paciente from "./Paciente";

function ListaPacientes(pacientes){
    return(
        <div className="md:w-1/2 md:h-screen overflow-y-scroll">
            <h2 className="font-black text-3xl text-center">Lista de pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Administra tus{' '}
                <span className="text-indigo-600 font-bold text-xl">Pacientes y citas</span>
            </p>
            <Paciente></Paciente>
        </div>
    )
}

export default ListaPacientes;