import {PropsEditMatch} from '../../../../Interface';
import NewEditMatch from '../../../../_Commons/MatchCreateUpdate';

const EditMatch: React.FC<PropsEditMatch> = ({navigation, route}) =>
  NewEditMatch({navigation, route});
export default EditMatch;
