import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard';
import AlexaImage from "../images/alexa.png"
import CortanaImage from "../images/cortana.png"
import SiriImage from "../images/siri.png"

function App (){
    return (
        <div>
            <div> Personal Digital Assitants</div>

            <ProfileCard title = "Alexa" handle = "@alexa99" image = {AlexaImage}/>
            <ProfileCard title = "Cortana" handle = "@cortana" image = {CortanaImage}/>
            <ProfileCard title = "Siri" handle = "@siri" image = {SiriImage}/>
        </div>
    )
}

export default App;