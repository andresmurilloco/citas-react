const Pacientes = ()=>{
    return(
        <div className="m-3 bg-white shadow-mt px-5 py-10 rounded-sm">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:{' '}
                <span className="font-normal normal-case">Hook</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:{' '}
                <span className="font-normal normal-case">Andrés Murillo Cortázar</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email:{' '}
                <span className="font-normal normal-case">andresmurillo@outlook.com</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta:{' '}
                <span className="font-normal normal-case">12 de Diciembre de 2022</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas:{' '}
                <span className="font-normal normal-case">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores beatae voluptatem deleniti incidunt sed, culpa numquam amet, quasi a odit recusandae unde laborum facilis hic vitae fugiat consequatur magnam in.</span>
            </p>
        </div>
    )
}

export default Pacientes;