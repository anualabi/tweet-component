import { Button } from '../../shared/components/Button';
import { ITweet } from '../../shared/types/tweet';

type IRetweets = Pick<ITweet, 'retweets'>;

export const RetweetButton = ({ retweets }: IRetweets) => {
  return (
    <Button startIcon="repeat" size="sm">
      {retweets > 0 && retweets}
    </Button>
  );
};
