const Paciente = ({paciente})=>{
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
        </div>
    )
}

export default Paciente;