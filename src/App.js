import React from 'react';
import './App.css';
import styled from 'styled-components';
import { React15 } from './components/react15';
import { React17 } from './components/react17';

const Container = styled.div`
    display: flex;
    flex: 1;
    background: black;
    height: 97.7vh;
    padding: 10px;
`;

const Column = styled.div`
    display: flex;
    flex: 1;
    background: white;
    padding: 20px;
    flex-direction: column;
`;

export const UserContext = React.createContext({});

function App() {
    return (
        <UserContext.Provider value={{ username: 'Can' }}>
            <div className="App">
                <Container>
                    <Column style={{ background: 'lightgray' }}>
                        <React15 style={{ overflow: 'hidden' }} />
                    </Column>
                    <Column>
                        <React17 />
                    </Column>
                </Container>
            </div>
        </UserContext.Provider>
    );
}

export default App;
