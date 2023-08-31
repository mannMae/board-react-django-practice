import { Header } from 'components/Layout';
import { Box, BoxTitle, Content, Wrapper } from './Post.style';
import { useEffect, useState } from 'react';
import { getPost } from '../api/getPost';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'components/Elements';

export const Post = () => {
  const [post, setPost] = useState({});

  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPost({ postId }).then((res) => setPost(res.data));
  }, []);

  if (!post) {
    return;
  }

  return (
    <Wrapper>
      <Header
        title={post.title}
        leftItem={<Button onClick={() => navigate(-1)}>뒤로가기</Button>}
      />
      <Box>
        <BoxTitle>내용</BoxTitle>
        <Content>{post.content}</Content>
      </Box>
    </Wrapper>
  );
};
