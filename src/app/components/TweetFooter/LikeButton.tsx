import { Button } from '../../shared/components/Button';
import { ITweet } from '../../shared/types/tweet';

type ILikes = Pick<ITweet, 'likes'>;

const LikeButton = ({ likes }: ILikes) => {
  return (
    <Button startIcon="favorite_border" size="sm">
      {likes > 0 && likes}
    </Button>
  );
};

export default LikeButton;
