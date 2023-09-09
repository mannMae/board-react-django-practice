import { Header } from 'components/Layout';
import { Box, Content, Post, Title, Wrapper } from './Posts.style';
import { Button } from 'components/Elements';
import { useEffect, useState } from 'react';
import { getPosts } from '../api/getPosts';
import { useNavigate } from 'react-router-dom';

export const Posts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then((res) => setPosts(res.data));
  }, []);

  return (
    <Wrapper>
      <Header title="기러기의 선물" />
      <Box>
        {posts.map((post, i) => (
          <Post key={i} onClick={() => navigate(`./${post.id}`)}>
            <Title>{post.title}</Title>
            <Content>{post.content}</Content>
          </Post>
        ))}
      </Box>
      <Button
        position="fixed"
        right="10%"
        bottom="10%"
        onClick={() => navigate('./write')}
      >
        응원하기
      </Button>
    </Wrapper>
  );
};
