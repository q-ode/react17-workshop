import React from 'react';
import { dummyText } from '../utils';

export const React15 = () => (
    <div style={{ height: '90%' }}>
        <h1>React 15</h1>
        <p style={{ maxHeight: '100%', overflow: 'auto' }}>{dummyText}</p>
    </div>
);
