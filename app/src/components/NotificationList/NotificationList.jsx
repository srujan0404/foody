import styled from "styled-components";
import { Container } from "../../App";

const NotificationList = ({ notifications }) => {
  return (
    <NotificationListContainer>
      <Container>
        <Notifications>
          {notifications?.map(({ id, message, time }) => (
            <NotificationCard key={id}>
              <p>{message}</p>
              <span>{time}</span>
            </NotificationCard>
          ))}
        </Notifications>
      </Container>
    </NotificationListContainer>
  );
};

export default NotificationList;

const NotificationListContainer = styled.section`
  min-height: calc(100vh - 210px);
  background-image: url("/bg.png");
  background-size: cover;
  padding-top: 20px;
`;

const Notifications = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const NotificationCard = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  p {
    margin: 0;
    font-size: 16px;
  }

  span {
    display: block;
    margin-top: 10px;
    font-size: 12px;
    color: #888;
  }
`;
