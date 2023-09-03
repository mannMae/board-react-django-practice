import { Header } from 'components/Layout';
import { Box, Content, Post, PostTitle, Wrapper } from './Posts.style';
import { useEffect, useState } from 'react';
import { getPosts } from '../api/getPosts';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button } from 'components/Elements';

export const Posts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((res) => setPosts(res.data));
  }, []);

  return (
    <Wrapper>
      <Header title="게시물 목록" />
      <Box>
        {posts.map((p, i) => (
          <Post key={i} onClick={() => navigate(`./${p.id}`)}>
            <PostTitle>{p.title}</PostTitle>
            <Content>{p.content}</Content>
          </Post>
        ))}
      </Box>
      <Button
        position="fixed"
        bottom="10%"
        right="10%"
        onClick={() => navigate('./write')}
      >
        게시물 작성
      </Button>
    </Wrapper>
  );
};
