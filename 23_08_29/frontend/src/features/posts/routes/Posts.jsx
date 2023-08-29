import { useEffect, useState } from 'react';
import { getPosts } from '../api/getPosts';
import {
  List,
  ListItem,
  ListItemContent,
  ListItemTitle,
  Wrapper,
} from './Posts.style';
import { Form } from 'components/Form';
import { useNavigate } from 'react-router-dom';
import { Button } from 'components/Elements';

export const Posts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((res) => setPosts(res.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Wrapper>
        <Form></Form>
        <List>
          {posts.map((p) => (
            <ListItem onClick={() => navigate(`./${p.id}`)}>
              <ListItemTitle>{p.title}</ListItemTitle>
              <ListItemContent>{p.content}</ListItemContent>
            </ListItem>
          ))}
        </List>
      </Wrapper>
      <Button
        onClick={() => navigate('write')}
        position="fixed"
        right="10%"
        bottom="10%"
        backgroundColor="#000"
        color="#fff"
      >
        게시글 작성
      </Button>
    </>
  );
};
