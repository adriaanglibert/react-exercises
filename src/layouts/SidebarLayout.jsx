import { Outlet } from 'react-router-dom';
import React from 'react'
import styled from 'styled-components';

const Sidebar = styled.aside`
  padding: 1rem;
  margin: 2rem 0;
  margin-bottom: auto;
  background-color: #FAFAFA;
  border-radius: .5rem;
  box-shadow: 2px 2px 4px rgba(0,0,0,.15);
`;

const LayoutContainer = styled.div`
    display: grid;
    grid-template-columns: 300px 1fr;
`;

const ContentContainer = styled.div`
  margin: 1rem 3rem;
`

const SidebarLayout = () => {
  return (
      <LayoutContainer>
        <Sidebar>
          <strong>React Oefeningen</strong>

          <p>Dit is een oefening om een gedeelde layout te gebruiken voor meerdere pagina's. Deze sidebar layout zal gebruikt worden voor de Homepagina en de detailpagina van een Post. De BaseLayout is een parent en zal dus deze layout overkoepelen en dus nog steeds van toepassing zijn.</p>
        </Sidebar>
        <ContentContainer>
          <Outlet/>
        </ContentContainer>
      </LayoutContainer>
  )
}

export default SidebarLayout