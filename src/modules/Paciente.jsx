const Paciente = ({paciente, setPaciente})=>{
    const {nombreMascota, nombrePropietario, email, fecha, sintomas} = paciente;
    return(
        <div className="m-3 bg-white shadow-mt px-5 py-10 rounded-sm">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:{' '}
                <span className="font-normal normal-case">{nombreMascota}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:{' '}
                <span className="font-normal normal-case">{nombrePropietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email:{' '}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta:{' '}
                <span className="font-normal normal-case">{fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas:{' '}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>
            <div className="flex justify-between mt-10">
                <button type="button" className="px-10 py-2 bg-indigo-600 hover:bg-indigo-800 text-white upper
                 rounded-md" onClick={() => setPaciente(paciente)}>
                    Editar
                </button>
                <button type="button" className="px-10 py-2 bg-red-600 hover:bg-red-800 text-white uppercase rounded-md">
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente;