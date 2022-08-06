import NormalizeStyles from './NormalizeStyles';
import BaseStyles from './BaseStyles';
import Tweet from './components/Tweet';
import { tweet } from './shared/services/tweet';

function App() {
  return (
    <>
      <NormalizeStyles />
      <BaseStyles />
      <Tweet tweet={tweet} />
    </>
  );
}

export default App;
