import { useAuth0 } from '@auth0/auth0-react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react'
import { format } from 'date-fns'
import React, { useState } from 'react'
import { PostAuthor } from '../PostDetails/PostAuthor'
import { DeleteDialog } from './DeleteDialog'

export const PostListTab = (props) => {
  const { user, getAccessTokenSilently } = useAuth0()
  const items = props.items
  const [deletePostId, setDeletePostId] = useState('')

  const deletePost = async (url) => {
    const token = await getAccessTokenSilently({
      audience: 'react-blog-api',
      scope: 'delete:posts',
    })

    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      referrerPolicy: 'no-referrer',
    })
    return response.json()
  }

  const refreshPage = () => {
    props.refresh()
  }

  const handleTabsChange = (index) => {
    props.handleTabsChange(index)
  }
  const handleEditButton = (item) => {
    props.handleEditButton(item)
  }

  const handleDelete = async (id) => {
    await deletePost(`api/posts/${id}`)
    refreshPage()
    handleTabsChange(3)
  }

  return (
    <React.Fragment>
      <ul>
        {items.map((item) => (
          <Box
            key={item._id}
            as="article"

            // borderWidth="1px"
            // rounded="md"
          >
            <Flex
            // align="center"
            >
              <Box w="100%">
                <Flex justifyContent="space-between">
                  <Box as="time" size="sm" dateTime={item.createdAt}>
                    {format(new Date(item.createdAt), 'dd.MM.yyyy HH:mm')}
                  </Box>
                  <PostAuthor author={item.author} src="" />
                </Flex>
                <Heading size="md" my="2">
                  {item.title}
                </Heading>
                <Text style={{ whiteSpace: 'pre-wrap' }}>
                  {item.shortContent}
                </Text>
              </Box>
              <Spacer />

              <VStack
                borderLeft="solid 1px"
                borderColor={'gray.200'}
                pl="1rem"
                ml="1rem"
                variant="outline"
                fontSize="20"
                // flexDirection="column"
                spacing="3"
                // display="block"
              >
                <IconButton
                  onClick={() => handleEditButton(item)}
                  colorScheme="blue"
                  aria-label="edit"
                  title="edit"
                  icon={<EditIcon />}
                />
                <IconButton
                  onClick={() => setDeletePostId(item._id)}
                  colorScheme="red"
                  aria-label="delete"
                  title="delete"
                  icon={<DeleteIcon />}
                />
              </VStack>
            </Flex>
          </Box>
        ))}
      </ul>
      <DeleteDialog
        isOpen={deletePostId}
        onClose={() => setDeletePostId('')}
        confirmation={(id) => handleDelete(id)}
      />
    </React.Fragment>
  )
}
