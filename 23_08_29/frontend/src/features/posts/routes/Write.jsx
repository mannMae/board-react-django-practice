import { Header } from 'components/Layout';
import { Inputs, Wrapper } from './Write.style';
import { Button } from 'components/Elements';
import { useNavigate } from 'react-router-dom';
import { Form } from 'components/Form';
import { createPost } from '../api/createPost';
import { useState } from 'react';
import { InputField } from 'components/Form/InputField';

export const Write = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const navigate = useNavigate();

  const handleSubmit = () => {
    createPost({ title, content })
      .then((res) => {
        console.log(res);
        if (res.data.id) {
          navigate(-1);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Header
          title="게시글 작성"
          leftItem={
            <Button onClick={() => navigate(-1)} type="button">
              취소
            </Button>
          }
          rightItem={<Button type="submit">작성완료</Button>}
        />
        <Inputs>
          <InputField
            label="제목"
            value={title}
            setValue={setTitle}
            placeholder="제목을 입력해주세요"
          />
          <InputField
            label="내용"
            value={content}
            setValue={setContent}
            placeholder="내용을 입력해주세요"
          />
        </Inputs>
      </Form>
    </Wrapper>
  );
};
