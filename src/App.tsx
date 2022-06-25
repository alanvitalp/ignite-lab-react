import { ApolloProvider, gql } from "@apollo/client";
import { BrowserRouter } from 'react-router-dom';
import { client } from "./lib/apollo";
import { Router } from "./router";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
    
  );
}

export default App;
