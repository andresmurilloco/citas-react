import Header from './modules/Header';
import Formulario from './modules/Formulario';
import ListaPacientes from './modules/ListaPacientes';

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header></Header>
      <div className='mt-12 md:flex'>
      <Formulario></Formulario>
      <ListaPacientes></ListaPacientes>
      </div>
    </div>
  )
}

export default App
