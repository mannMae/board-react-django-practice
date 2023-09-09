import { Header } from 'components/Layout';
import { Inputs, Label, Wrapper } from './Write.style';
import { Form, InputField } from 'components/Form';
import { Button } from 'components/Elements';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../api/createPost';

export const Write = () => {
  const navigate = useNavigate();
  const handleSubmit = ({ title, content }) => {
    createPost({ title, content })
      .then(() => navigate(-1))
      .catch((error) => console.error(error));
  };
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        {({ register, formState }) => (
          <>
            <Header
              title="응원하기"
              leftItem={
                <Button type="button" onClick={() => navigate(-1)}>
                  뒤로가기
                </Button>
              }
              rightItem={<Button type="submit">작성완료</Button>}
            />
            <Inputs>
              <Label>
                제목
                <InputField
                  placeholder="제목을 입력하세요"
                  registration={register('title')}
                  error={formState.errors['title']}
                />
              </Label>
              <Label>
                내용
                <InputField
                  placeholder="내용을 입력하세요"
                  registration={register('content')}
                  error={formState.errors['content']}
                />
              </Label>
            </Inputs>
          </>
        )}
      </Form>
    </Wrapper>
  );
};
