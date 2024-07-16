import styled from "styled-components";
import { BASE_URL, Container } from "../../App";

const UserProfile = ({ userData, posts }) => {
  return (
    <ProfileContainer>
      <Container>
        <ProfileHeader>
          <ProfileImage
            src={BASE_URL + userData.profileImage}
            alt={userData.name}
          />
          <UserInfo>
            <h2>{userData.name}</h2>
            <p>{userData.bio}</p>
          </UserInfo>
        </ProfileHeader>
        <PostsContainer>
          {posts?.map(({ id, image, description, likes }) => (
            <PostCard key={id}>
              <div className="post_image">
                <img src={BASE_URL + image} alt="User post" />
              </div>
              <div className="post_info">
                <p>{description}</p>
                <span>{likes} likes</span>
              </div>
            </PostCard>
          ))}
        </PostsContainer>
      </Container>
    </ProfileContainer>
  );
};

export default UserProfile;

const ProfileContainer = styled.section`
  min-height: calc(100vh - 210px);
  background-image: url("/bg.png");
  background-size: cover;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
  border: 2px solid #eabfff;
`;

const UserInfo = styled.div`
  h2 {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
  }
  p {
    margin: 5px 0 0;
    font-size: 16px;
  }
`;

const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
`;

const PostCard = styled.div`
  width: 340px;
  border: 0.66px solid;
  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;
  overflow: hidden;

  .post_image {
    width: 100%;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .post_info {
    padding: 10px;
    p {
      font-size: 14px;
      margin: 0 0 5px 0;
    }
    span {
      font-size: 12px;
      color: #888;
    }
  }
`;
