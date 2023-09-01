import { Header } from 'components/Layout';
import { Box, Post, PostContent, PostTitle, Wrapper } from './Posts.style';
import { useEffect, useState } from 'react';
import { getPosts } from '../api/getPosts';
import { useNavigate } from 'react-router-dom';
import { Button } from 'components/Elements';

export const Posts = () => {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

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
            <PostContent>{p.content}</PostContent>
          </Post>
        ))}
      </Box>
      <Button
        position="fixed"
        right="10%"
        bottom="10%"
        borderRadius="15px"
        onClick={() => navigate('./write')}
      >
        게시물 작성
      </Button>
    </Wrapper>
  );
};
