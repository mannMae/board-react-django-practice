import { Header } from 'components/Layout';
import { Inputs, Wrapper } from './Edit.style';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'components/Elements';
import { Form } from 'components/Form';
import { InputField } from 'components/Form/InputField';
import { useEffect, useState } from 'react';
import { getPost } from '../api/getPost';
import { editPost } from '../api/editPost';

export const Edit = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const navigate = useNavigate();
  const { postId } = useParams();

  useEffect(() => {
    getPost(postId)
      .then((res) => {
        initializePost(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const initializePost = (post) => {
    setTitle(post.title);
    setContent(post.content);
  };

  const handleSubmit = () => {
    editPost({ postId, title, content })
      .then((res) => navigate(-1))
      .catch((error) => console.error(error));
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Header
          title="수정하기"
          leftItem={
            <Button onClick={() => navigate(-1)} type="button">
              뒤로가기
            </Button>
          }
          rightItem={<Button type="submit">수정완료</Button>}
        />
        <Inputs>
          <InputField
            label="제목"
            placeholder="제목을 입력하세요"
            value={title}
            setValue={setTitle}
          />
          <InputField
            label="내용"
            placeholder="내용을 입력하세요"
            value={content}
            setValue={setContent}
          />
        </Inputs>
      </Form>
    </Wrapper>
  );
};
