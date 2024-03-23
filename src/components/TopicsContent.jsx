import { Introduction } from '../Topics/Introduction';
import Margin from '../Topics/utility_classes/Margin';
import Padding from '../Topics/utility_classes/Padding';
import Border from '../Topics/utility_classes/Border';
import Typography from '../Topics/utility_classes/Typography';
import Height from '../Topics/utility_classes/Height';
import Width from '../Topics/utility_classes/Width';
import Opacity from '../Topics/utility_classes/Opacity';
import Flexbox from '../Topics/utility_classes/Flexbox';
import Grid from '../Topics/utility_classes/Grid';
import BackgroundColor from '../Topics/utility_classes/BackgroundColor';
import TextColor from '../Topics/utility_classes/TextColor';
import BorderColor from '../Topics/utility_classes/BorderColor';
import Zindex from '../Topics/utility_classes/Zindex';
import AddOnUtilities from '../Topics/utility_classes/AddOnUtilities';
import Cards from '../Topics/utility_components/Cards';
import Forms from '../Topics/utility_components/Forms';
import Alerts from '../Topics/utility_components/Alerts';
import Badges from '../Topics/utility_components/Badges';
import Buttons from '../Topics/utility_components/Buttons';
import Images from '../Topics/utility_components/Images';
import Footers from '../Topics/utility_components/Footers';
import Navbars from '../Topics/utility_components/Navbars';

const TopicsContent = ({ activeTopicName }) => {
  return (
    <div className="app-content">
        { activeTopicName === 'Cards' && <Cards />}
        { activeTopicName === 'Forms' && <Forms />}
        { activeTopicName === 'Alerts' && <Alerts />}
        { activeTopicName === 'Badges' && <Badges />}
        { activeTopicName === 'Buttons' && <Buttons />}
        { activeTopicName === 'Images' && <Images />}
        { activeTopicName === 'Navbars' && <Navbars />}
        { activeTopicName === 'Footers' && <Footers />}


        { activeTopicName === 'Introduction' && <Introduction /> }
        { activeTopicName === 'Margin' && <Margin /> }
        { activeTopicName === 'Padding' && <Padding /> }
        { activeTopicName === 'Border' && <Border /> }
        { activeTopicName === 'Typography' && <Typography /> }
        { activeTopicName === 'Height' && <Height /> }
        { activeTopicName === 'Width' && <Width /> }
        { activeTopicName === 'Opacity' && <Opacity /> }
        { activeTopicName === 'Flexbox' && <Flexbox /> }
        { activeTopicName === 'Grid' && <Grid /> }
        { activeTopicName === 'Background Color' && <BackgroundColor /> }
        { activeTopicName === 'Text Color' && <TextColor /> }
        { activeTopicName === 'Border Color' && <BorderColor /> }
        { activeTopicName === 'Z-Index' && <Zindex /> }
        { activeTopicName === 'Add-on Utilities' && <AddOnUtilities /> }
    </div>
  )
}

export default TopicsContent;