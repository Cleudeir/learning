import {PropsNewMatch} from '../../../Interface';
import NewEditMatch from '../../../_Commons/MatchCreateUpdate';

const NewMatch: React.FC<PropsNewMatch> = ({navigation, route}) =>
  NewEditMatch({navigation, route});

export default NewMatch;
