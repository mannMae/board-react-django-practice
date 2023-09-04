import { Header } from 'components/Layout';
import { Inputs, Wrapper } from './Write.style';
import { Button } from 'components/Elements';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, InputField } from 'components/Form';
import { useEffect, useState } from 'react';
import { createPost } from '../api/createPost';
import { getPost } from '../api/getPost';
import { editPost } from '../api/editPost';

export const Write = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (postId) {
      getPost(postId)
        .then((res) => {
          initializePost(res.data);
        })
        .catch((error) => console.error(error));
    }
  }, []);

  const initializePost = (post) => {
    setTitle(post.title);
    setContent(post.content);
  };

  const handleSubmit = () => {
    if (postId) {
      editPost({ postId, title, content })
        .then((res) => navigate(-1))
        .catch((error) => console.error(error));
    } else {
      createPost({ title, content })
        .then((res) => navigate(-1))
        .catch((error) => console.error(error));
    }
  };
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Header
          title={postId ? '수정하기' : '게시물 작성'}
          leftItem={
            <Button onClick={() => navigate(-1)} type="button">
              뒤로가기
            </Button>
          }
          rightItem={<Button type="submit">작성완료</Button>}
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
