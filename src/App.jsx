import { useState, useEffect } from 'react';
import Header from './modules/Header';
import Formulario from './modules/Formulario';
import ListaPacientes from './modules/ListaPacientes';

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes])

  const eliminarPaciente = (id)=>{
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }
  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className='mt-12 md:flex'>
      <Formulario
        pacientes = {pacientes}
        setPacientes = {setPacientes}
        paciente = {paciente}
        setPaciente = {setPaciente}
      />
      <ListaPacientes
        pacientes={pacientes}
        setPaciente = {setPaciente}
        eliminarPaciente = {eliminarPaciente}
      />
      </div>
    </div>
  )
}

export default App
