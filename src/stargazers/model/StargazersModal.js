import React from "react";
import { useQuery, gql } from "@apollo/client";
import StargazersList from "../components/StargazersList";

const GET_TOPICS_LIST = gql`
  query getTopics($name: String!) {
    search(query: $name, type: REPOSITORY, first: 5) {
      nodes {
        ... on Repository {
          repositoryTopics(first: 5) {
            nodes {
              topic {
                name
                stargazerCount
                relatedTopics(first: 5) {
                  name
                  stargazerCount
                }
              }
            }
          }
        }
      }
    }
  }
`;

function StargazersModal(node) {
  const name = node.node;
  const { loading, error, data } = useQuery(GET_TOPICS_LIST, {
    variables: { name },
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      {data && data.search.nodes
        ? data.search.nodes.map((node, i) => {
            return (
              <div key={i}>
                {node.repositoryTopics.nodes.map((stargazer, index) => {
                  return (
                    <StargazersList
                      stargazer={stargazer}
                      key={index}
                    ></StargazersList>
                  );
                })}
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default StargazersModal;
