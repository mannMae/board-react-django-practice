import { Header } from 'components/Layout';
import { Inputs, Wrapper } from './Write.style';
import { Button } from 'components/Elements';
import { useNavigate } from 'react-router-dom';
import { Form, InputField } from 'components/Form';
import { useState } from 'react';
import { createPost } from '../api/createPost';

export const Write = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const navigate = useNavigate();

  const handleSubmit = () => {
    createPost({ title, content })
      .then((res) => navigate(-1))
      .catch((error) => console.error(error));
  };
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Header
          title="게시물 작성하기"
          leftItem={
            <Button onClick={() => navigate(-1)} type="button">
              뒤로가기
            </Button>
          }
          rightItem={<Button button="submit">작성완료</Button>}
        />
        <Inputs>
          <InputField
            label="제목"
            placeholder="제목을 입력해주세요"
            value={title}
            setValue={setTitle}
          />
          <InputField
            label="내용"
            placeholder="내용을 입력해주세요"
            value={content}
            setValue={setContent}
          />
        </Inputs>
      </Form>
    </Wrapper>
  );
};
