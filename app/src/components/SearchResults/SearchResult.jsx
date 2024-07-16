import styled from "styled-components";
import { BASE_URL, Button, Container } from "../../App";

const SearchResult = ({ data }) => {
  return (
    <FoodCardContainer>
      <Container>
        <FoodCards>
          {data?.map(({ name, image, text, price }) => (
            <FoodCard key={name}>
              <div className="food_image">
                <img src={BASE_URL + image} alt={name} />
              </div>
              <div className="food_info">
                <div className="info">
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
                <StyledButton>${price.toFixed(2)}</StyledButton>
              </div>
            </FoodCard>
          ))}
        </FoodCards>
      </Container>
    </FoodCardContainer>
  );
};

export default SearchResult;

const FoodCardContainer = styled.section`
  min-height: calc(100vh - 210px);
  background-image: url("/bg.png");
  background-size: cover;
  padding: 20px;
`;

const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;
  padding-top: 80px;
`;

const FoodCard = styled.div`
  width: 300px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  }

  .food_image img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;

    h3 {
      margin: 8px 0;
      font-size: 18px;
      font-weight: 600;
      color: #333;
    }

    p {
      margin: 4px 0 8px;
      font-size: 14px;
      color: #666;
    }
  }
`;

const StyledButton = styled(Button)`
  align-self: flex-end;
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 12px;
  background: #ff7e5f;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #ff5f5f;
  }
`;
