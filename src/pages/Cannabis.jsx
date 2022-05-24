import { API_DRUGS_URL } from "../api";
import List from '../components/List';
import ROUTES from '../routes';
import React from "react";
import useFetch from '../hooks/useFetch';

const Cannabis = () => {
  const [drugs, drugError, drugLoading] = useFetch(API_DRUGS_URL);

  return (
    <>
      {drugLoading && <p>Loading drugs...</p>}
      {drugError && <p>You overdosed...</p>}
      {drugs && (
        <>
          <h1>Drugs</h1>
          <List items={drugs} labelKey="strain" dynamicUrl={ROUTES.DRUG} dynamicKey="uid" />
        </>
      )}
    </>
  );
};

export default Cannabis;
