import {useState, useEffect} from 'react';
import Error from './Error';

function Formulario({pacientes, setPacientes, paciente}){
    const [nombreMascota, setNombreMascota] = useState('');
    const [nombrePropietario, setNombrePropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        console.log(paciente);
    }, [paciente])

    const generarId=()=>{
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);
        return random+fecha;
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('Enviando formulario');
            //Validación del formulario
        if([nombreMascota, nombrePropietario, email, fecha, sintomas].includes('')){
            console.log('Todos los campos deben estar completados');
            setError(true);
            return;
        } else{
            setError(false);
            const objetoPaciente = {
                nombreMascota, 
                nombrePropietario, 
                email, 
                fecha, 
                sintomas,
                id: generarId()
            }
            setPacientes([...pacientes, objetoPaciente]);
            setNombreMascota('');
            setNombrePropietario('');
            setEmail('');
            setFecha('');
            setSintomas('')
        }
    }

    return(
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">Añadir pacientes y {''} 
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>
            <form onSubmit={handleSubmit} action="" autoComplete='false' className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-10 mr-0">
            {error && <Error><p>Por favor llene todos los campos.</p></Error>}
                <div className="mb-5">
                    <label htmlFor="nombreMascota" autoComplete='false' className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                    <input value={nombreMascota} onChange={(e)=> setNombreMascota(e.target.value)} type="text" id="nombreMascota" placeholder="Nombre de la mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="nombrePropietario" autoComplete='false' className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                    <input value={nombrePropietario} onChange={(e)=> setNombrePropietario(e.target.value)} type="text" id="nombrePropietario" placeholder="Nombre de la mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="email" autoComplete='false' className="block text-gray-700 uppercase font-bold">Email del propietario</label>
                    <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" id="email" placeholder="Nombre de la mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" autoComplete='false' className="block text-gray-700 uppercase font-bold">Dado de alta</label>
                    <input value={fecha} onChange={(e)=> setFecha(e.target.value)} type="date" id="alta" placeholder="Nombre de la mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" autoComplete='false' className="block text-gray-700 uppercase font-bold">Síntomas</label>
                    <textarea value={sintomas} onChange={(e)=> setSintomas(e.target.value)} id="sintomas" placeholder="Describe los síntomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"></textarea>
                </div>
                <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value="Agregar Paciente"/>
            </form>
        </div>
        
    )
}

export default Formulario;