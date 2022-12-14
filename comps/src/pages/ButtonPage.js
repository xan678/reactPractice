import Button from "../components/Button";
import {GoBell, GoCloudDownload, GoDatabase} from 'react-icons/go';

const ButtonPage = () => {
    return (<div>
        <div>
            <Button success rounded >
                <GoBell/>    
                Click Me !
            </Button>
        </div>
        <div>
            <Button primary>
                <GoCloudDownload/>
                Buy Now !
            </Button>
        </div>
        <div>
            <Button warning outline>Hide Me !</Button>
        </div>
        <div>
            
            <Button secondary>
                <GoDatabase/>
                See Deal !    
            </Button>
        </div>
        <div>
            <Button danger rounded>Danger !</Button>
        </div>
    </div>)
}

export default ButtonPage;