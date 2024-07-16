import styled from "styled-components";
import { BASE_URL, Button, Container } from "../../App";

const PostDetail = ({ post }) => {
  return (
    <DetailContainer>
      <Container>
        <PostHeader>
          <div className="post_image">
            <img src={BASE_URL + post.image} alt="Post" />
          </div>
          <div className="post_info">
            <p>{post.description}</p>
            <span>{post.likes} likes</span>
          </div>
        </PostHeader>
        <CommentsSection>
          <h3>Comments</h3>
          {post.comments?.map((comment, index) => (
            <CommentCard key={index}>
              <p>{comment.text}</p>
              <span>— {comment.user}</span>
            </CommentCard>
          ))}
          <CommentForm>
            <textarea placeholder="Add a comment..." />
            <Button>Add Comment</Button>
          </CommentForm>
        </CommentsSection>
      </Container>
    </DetailContainer>
  );
};

export default PostDetail;

const DetailContainer = styled.section`
  min-height: calc(100vh - 210px);
  background-image: url("/bg.png");
  background-size: cover;
  padding-top: 20px;
`;

const PostHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  .post_image {
    width: 100%;
    max-width: 600px;
    img {
      width: 100%;
      height: auto;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }

  .post_info {
    margin-top: 10px;
    text-align: center;
    p {
      font-size: 16px;
      margin: 10px 0;
    }
    span {
      font-size: 14px;
      color: #888;
    }
  }
`;

const CommentsSection = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  margin: 0 auto;

  h3 {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
  }
`;

const CommentCard = styled.div`
  background: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  p {
    margin: 0;
    font-size: 14px;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 12px;
    color: #888;
  }
`;

const CommentForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  textarea {
    resize: none;
    padding: 10px;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin-bottom: 10px;
  }

  button {
    align-self: flex-end;
  }
`;
