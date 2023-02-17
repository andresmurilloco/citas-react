import Paciente from "./Paciente";

function ListaPacientes({pacientes, setPaciente, eliminarPaciente}){
    return(
        <div className="md:w-1/2 md:h-screen overflow-y-scroll">
            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Lista de pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus{' '}
                        <span className="text-indigo-600 font-bold text-xl">Pacientes y citas</span>
                    </p>
                    {pacientes.map((paciente)=>{
                        return(
                            <Paciente
                                key={paciente.id}
                                paciente = {paciente}
                                setPaciente = {setPaciente}
                                eliminarPaciente = {eliminarPaciente}
                            />
                        )
                    })}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando pacientes{' '}
                        <span className="text-indigo-600 font-bold text-xl">apareceran aquí!</span>
                    </p>
                </>
            )}
            
        </div>
    )
}

export default ListaPacientes;