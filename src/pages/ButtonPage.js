import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary rounded>
          <GoBell />
          Click Me!
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button success rounded>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button warning>Hide Ads!</Button>
      </div>
      <div>
        <Button danger>Something!</Button>
      </div>
    </div>
  )
}

export default ButtonPage;