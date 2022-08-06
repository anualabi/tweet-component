import { Button } from '../../shared/components/Button';
import { ITweet } from '../../shared/types/tweet';

type IComments = Pick<ITweet, 'comments'>;

export const ReplyButton = ({ comments }: IComments) => {
  return (
    <Button startIcon="message" size="sm">
      {comments > 0 && comments}
    </Button>
  );
};
