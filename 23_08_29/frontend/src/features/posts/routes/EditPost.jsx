import { Header } from 'components/Layout';
import { Inputs, Wrapper } from './EditPost.styls';
import { Button } from 'components/Elements';
import { useNavigate, useParams } from 'react-router-dom';
import { InputField } from 'components/Form/InputField';
import { useEffect, useState } from 'react';
import { Form } from 'components/Form';
import { editPost } from '../api/editPost';
import { getPost } from '../api/getPost';

export const EditPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { postId } = useParams();
  const navigate = useNavigate();

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
          title="수정하기"
          leftItem={
            <Button onClick={() => navigate(-1)} type="button">
              취소
            </Button>
          }
          rightItem={<Button onClick={() => {}}>수정완료</Button>}
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
