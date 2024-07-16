import styled from "styled-components";
import { BASE_URL, Button, Container } from "../../App";

const UserList = ({ users }) => {
  return (
    <UserListContainer>
      <Container>
        <Users>
          {users?.map(({ id, profileImage, name }) => (
            <UserCard key={id}>
              <div className="user_image">
                <img src={BASE_URL + profileImage} alt={name} />
              </div>
              <div className="user_info">
                <h3>{name}</h3>
                <Button>Follow</Button>
              </div>
            </UserCard>
          ))}
        </Users>
      </Container>
    </UserListContainer>
  );
};

export default UserList;

const UserListContainer = styled.section`
  min-height: calc(100vh - 210px);
  background-image: url("/bg.png");
  background-size: cover;
  padding-top: 20px;
`;

const Users = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
`;

const UserCard = styled.div`
  width: 240px;
  padding: 20px;
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
  text-align: center;

  .user_image {
    margin-bottom: 10px;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .user_info {
    h3 {
      margin: 10px 0;
      font-size: 18px;
    }
    button {
      font-size: 14px;
    }
  }
`;
