import { Header } from 'components/Layout';
import { Inputs, Label, Wrapper } from './Write.style';
import { Form, InputField } from 'components/Form';
import { Button } from 'components/Elements';
import { useNavigate, useParams } from 'react-router-dom';
import { createPost } from '../api/createPost';
import { useEffect, useState } from 'react';
import { getPost } from '../api/getPost';
import { editPost } from '../api/editPost';

export const Write = () => {
  const { postId } = useParams();
  const [defaultTitle, setDefaultTitle] = useState();
  const [defaultContent, setDefaultContent] = useState();

  useEffect(() => {
    if (postId) {
      getPost(postId)
        .then((res) => initializePost(res.data))
        .catch((error) => console.error(error));
    }
  }, []);

  const initializePost = (post) => {
    setDefaultTitle(post?.title);
    setDefaultContent(post?.content);
  };

  const handleSubmit = ({ title, content }) => {
    if (postId) {
      title = title ? title : defaultTitle;
      content = content ? content : defaultContent;
      editPost({ postId, title, content })
        .then((res) => {
          if (res.data.id) {
            navigate(-1);
          }
        })
        .catch((error) => console.error(error));
    } else {
      createPost({ title, content })
        .then((res) => {
          if (res.data.id) {
            navigate(-1);
          }
        })
        .catch((error) => console.error(error));
    }
  };
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        {({ register, formState }) => (
          <>
            <Header
              title={postId ? '게시물 수정' : '게시물 작성'}
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
                  defaultValue={defaultTitle}
                  placeholder="제목을 입력하세요"
                  registration={register('title')}
                  error={formState.errors['title']}
                />
              </Label>
              <Label>
                내용
                <InputField
                  defaultValue={defaultContent}
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
