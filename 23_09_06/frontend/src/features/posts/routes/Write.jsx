import { Header } from 'components/Layout';
import { Inputs, Label, Wrapper } from './Write.style';
import { Button } from 'components/Elements';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, InputField } from 'components/Form';
import { createPost } from '../api/createPostt';
import { useEffect, useState } from 'react';
import { getPost } from '../api/getPost';
import { editPost } from '../api/editPost';

export const Write = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    if (postId) {
      getPost(postId)
        .then((res) => setPost(res.data))
        .catch((error) => console.error(error));
    }
  }, []);

  const handleSubmit = ({ title, content }) => {
    if (postId) {
      title = title ? title : post.title;
      content = content ? content : post.content;
      editPost({ postId, title, content })
        .then(() => navigate(-1))
        .catch((error) => console.error(error));
    } else {
      createPost({ title, content })
        .then(() => navigate(-1))
        .catch((error) => console.error(error));
    }
  };
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        {({ register, formState }) => (
          <>
            <Header
              title="게시물 작성"
              leftItem={
                <Button onClick={() => navigate(-1)} type="button">
                  뒤로가기
                </Button>
              }
              rightItem={<Button type="submit">작성완료</Button>}
            />
            <Inputs>
              <Label>
                제목
                <InputField
                  defaultValue={post?.title}
                  placeholder="제목을 입력하세요"
                  registration={register('title')}
                  error={formState.errors['title']}
                />
              </Label>
              <Label>
                내용
                <InputField
                  defaultValue={post?.content}
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
