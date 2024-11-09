import ContainerScreen from '../../../../components/ContainerScreen';
import {PropsClients} from '../../../Interface';
import Card from './Card';
import useIndex from './useIndex';

const ClientsScreen: React.FC<PropsClients> = ({navigation, route}) => {
  const {isLoading, isMessage, setMessage, clients} = useIndex({
    navigation,
    route,
  });
  return (
    <ContainerScreen
      isLoading={isLoading}
      isMessage={isMessage}
      setMessage={setMessage}>
      {clients.map(item => (
        <Card key={item.clientId} client={item as any} />
      ))}
    </ContainerScreen>
  );
};

export default ClientsScreen;
