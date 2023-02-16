import { ItemReview, List, AuthorReview } from './ReviewItem.styled';

const ReviewsItem = ({ reviews }) => {
  return (
    <List>
      {reviews.map(item => (
        <ItemReview key={item.id}>
          <AuthorReview> Author: {item.author}</AuthorReview>
          <p>{item.content}</p>
        </ItemReview>
      ))}
    </List>
  );
};

export default ReviewsItem;
