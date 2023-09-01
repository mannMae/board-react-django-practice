import { Header } from 'components/Layout';
import { Box, BoxTitle, Buttons, Content, Wrapper } from './Post.style';
import { useEffect, useState } from 'react';
import { getPost } from '../api/getPost';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'components/Elements';
import { Form } from 'components/Form';
import { deletePost } from '../api/deletePost';

export const Post = () => {
  const [post, setPost] = useState();

  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPost(postId).then((res) => setPost(res.data));
  }, []);

  const handleClickDelete = () => {
    deletePost(postId)
      .then(() => navigate(-1))
      .catch((error) => console.error(error));
  };

  if (typeof post?.title !== 'string') {
    return;
  }
  return (
    <Wrapper>
      <Form>
        <Header
          title={post.title}
          leftItem={
            <Button onClick={() => navigate(-1)} type="button">
              뒤로가기
            </Button>
          }
          rightItem={
            <Buttons>
              <Button onClick={() => handleClickDelete()} type="button">
                삭제하기
              </Button>
              <Button onClick={() => navigate('./edit')} type="button">
                수정하기
              </Button>
            </Buttons>
          }
        />
      </Form>
      <Box>
        <BoxTitle>내용</BoxTitle>
        <Content>{post.title}</Content>
      </Box>
    </Wrapper>
  );
};
