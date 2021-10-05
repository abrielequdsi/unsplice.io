import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
// Gql
import { useQuery } from '@apollo/client';
import { GET_CONTENT } from '../../utils/graphql';
// Redux
import { useSelector } from 'react-redux';
// Notion
import loadNotionContent from '../../utils/notionApi';
import { NotionRenderer } from 'react-notion';
import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css'; // only needed for code highlighting

import { State } from '../../interfaces';

const Content = () => {
  const { moduleId, contentId } = useSelector(
    (state: State) => state.subPage.id,
  );

  const { loading, data } = useQuery(GET_CONTENT, {
    variables: {
      moduleId: moduleId,
      contentId: contentId,
    },
  });

  // Notion Content
  const [notionPagedata, setNotionPagedata] = useState(null);
  const [notionLoading, setNotionLoading] = useState(false);

  useEffect(() => {
    if (!loading) {
      const notionContent = data.getContent.notionContent;
      const notionSlug = notionContent.split('-').slice(-1)[0];

      setNotionLoading(true);
      loadNotionContent(notionSlug)
        .then((res) => {
          console.log('res.data', typeof res.data);
          setNotionPagedata(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setNotionLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, notionPagedata as any); //notionPageData

  // Render Content
  let content;
  if (loading || notionLoading) {
    content = (
      <Box sx={{ ml: 'auto', mr: 'auto' }}>
        <CircularProgress />
      </Box>
    );
  } else {
    content = (
      <Container>
        {notionPagedata && <NotionRenderer blockMap={notionPagedata} />}
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            {content}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Content;
