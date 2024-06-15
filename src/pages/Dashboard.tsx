import EZ_Button from "../components/EZ_Button"
import 'bootstrap/dist/css/bootstrap.css'

function Dashboard() {

    const ff = () => {
        console.log('Free Real State')
    }

  return (
    <div>
      <EZ_Button label="Free State" className="btn btn-primary" click={ff}/>
    </div>
  )
}

export default Dashboard
