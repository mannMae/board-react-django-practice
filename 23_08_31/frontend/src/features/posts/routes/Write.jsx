import { Header } from 'components/Layout';
import { Wrapper } from './Write.style';
import { Button } from 'components/Elements';
import { useNavigate } from 'react-router-dom';
import { Form, InputField } from 'components/Form';

export const Write = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Form>
        <Header
          title="게시물 작성하기"
          leftItem={<Button onClick={() => navigate(-1)}>뒤로가기</Button>}
          rightItem={<Button onClick={() => {}}>작성완료</Button>}
        />
        <InputField />
        <InputField />
      </Form>
    </Wrapper>
  );
};
