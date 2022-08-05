import NormalizeStyles from './NormalizeStyles';
import BaseStyles from './BaseStyles';
import Tweet from './components/Tweet';
import { post } from './shared/constants/tweet';

function App() {
  return (
    <>
      <NormalizeStyles />
      <BaseStyles />
      <Tweet tweet={post} />
    </>
  );
}

export default App;
