import React  from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';
import CountChart from './components/CountChart';
import TextInput from './components/TextInput';

import './App.css';

const _mockedResults = {
  status: 'VALID',
  types: [
    {
      name: 'Paragraphs', count: 2
    },
    {
      name: 'Sentences', count: 4
    },
    {
      name: 'Verbs', count: 4
    },
    {
      name: 'Nouns', count: 8
    },
    {
      name: 'Prepositions', count: 4
    }
  ],
  violations: [
    {
      name: 'Rule 1', count: 0
    },
    {
      name: 'Rule 2', count: 8
    },
    {
      name: 'Rule 3', count: 4
    },
    {
      name: 'Rule 4', count: 9
    },
    {
      name: 'Rule 5', count: 0
    },
    {
      name: 'Rule 6', count: 1
    }
  ]
}

const App = () => {
  return (
    <div className='App'>
      <Container>
        <Grid columns={2} padded>
          <Grid.Row>
            <Grid.Column width={16}>
              <Header as='h2'>Paragraph</Header>
              <TextInput />
            </Grid.Column>
          </Grid.Row>
          <React.Fragment>
              <Grid.Row>
              <Grid.Column width={16}>
                <Header as='h2'>Status: {_mockedResults.status}</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
                <Header as='h2'>Type vs Count</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <div>TODO: create a word count table here</div>
              </Grid.Column>
              <Grid.Column>
                <CountChart data={_mockedResults.types} label='Types' />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
                <Header as='h2'>Violation vs Count</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <div>TODO: create a violation table here</div>
              </Grid.Column>
              <Grid.Column>
                <CountChart data={_mockedResults.violations} label='Violations' />
              </Grid.Column>
            </Grid.Row>
          </React.Fragment>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
