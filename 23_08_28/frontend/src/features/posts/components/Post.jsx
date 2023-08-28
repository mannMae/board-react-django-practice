import { Box, Button } from 'components/Elements';
import { Content, Title, Wrapper } from './Post.style';
import { deletePost } from '../api/deletePost';
import { useEffect, useState } from 'react';
import { Form, InputField } from 'components/Form';
import { editPost } from '../api/editPost';

export const Post = ({ title, content, id, setPosts }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    initializeValues();
  }, [isEditable]);

  const initializeValues = () => {
    setNewTitle(title);
    setNewContent(content);
  };

  const handleClickDelete = () => {
    deletePost({ id })
      .then((res) => {
        setPosts((prev) => prev.filter((p) => p.id !== id));
      })
      .catch((error) => console.error(error));
  };

  const onSubmit = () => {
    if (!isEditable) {
      return;
    }
    editPost({ id, title: newTitle, content: newContent })
      .then((res) => {
        setPosts((prev) => {
          const index = prev.findIndex((post) => post.id === id);
          let newPosts = [...prev];
          newPosts.splice(index, 1, res.data);
          return newPosts;
        });
        setIsEditable(false);
      })
      .catch((error) => console.error(error));
  };

  return (
    <Wrapper>
      <Form onSubmit={() => onSubmit()}>
        <Box flexDirection="row" justifyContent="space-between">
          <Box gap="50px">
            {isEditable ? (
              <>
                <InputField
                  label="제목"
                  color="#fff"
                  value={newTitle}
                  setValue={setNewTitle}
                />
                <InputField
                  label="내용"
                  color="#fff"
                  value={newContent}
                  setValue={setNewContent}
                />
              </>
            ) : (
              <>
                <Title>제목 {title}</Title>
                <Content>내용 {content}</Content>
              </>
            )}
          </Box>
          <Box justifyContent="center">
            <Button type="submit">수정완료</Button>
            <Button onClick={() => setIsEditable(true)} type="button">
              수정하기
            </Button>
            <Button onClick={() => handleClickDelete()} type="button">
              삭제하기
            </Button>
          </Box>
        </Box>
      </Form>
    </Wrapper>
  );
};
