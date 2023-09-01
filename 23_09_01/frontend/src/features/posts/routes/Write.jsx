import { Header } from 'components/Layout';
import { Box, Wrapper } from './Write.style';
import { useNavigate } from 'react-router-dom';
import { Button } from 'components/Elements';
import { Form, InputField } from 'components/Form';
import { useState } from 'react';
import { createPost } from '../api/createPost';

export const Write = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    createPost({ title, content })
      .then(() => navigate(-1))
      .catch((error) => console.error(error));
  };
  return (
    <Wrapper>
      <Form onSubmit={() => handleSubmit()}>
        <Header
          title="게시글 작성"
          leftItem={
            <Button onClick={() => navigate(-1)} type="button">
              뒤로가기
            </Button>
          }
          rightItem={<Button type="submit">작성완료</Button>}
        />
        <Box>
          <InputField
            label="제목"
            value={title}
            setValue={setTitle}
            placeholder="제목을 입력하세요"
          />
          <InputField
            label="내용"
            value={content}
            setValue={setContent}
            placeholder="내용을 입력하세요"
          />
        </Box>
      </Form>
    </Wrapper>
  );
};
