import { useState } from 'react';
import Header from './modules/Header';
import Formulario from './modules/Formulario';
import ListaPacientes from './modules/ListaPacientes';

function App() {
  const [pacientes, setPacientes] = useState([]);
  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className='mt-12 md:flex'>
      <Formulario
        pacientes = {pacientes}
        setPacientes = {setPacientes}
      />
      <ListaPacientes
        pacientes={pacientes}
      />
      </div>
    </div>
  )
}

export default App
