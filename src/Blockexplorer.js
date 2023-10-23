// src/BlockExplorer.js

import React, { useState } from 'react';
import Web3 from 'web3';

const BlockExplorer = ()  => {
  const [blockNumber, setBlockNumber] = useState('');
  const [blockData, setBlockData] = useState(null);
  const [error, setError] = useState(null);

  const getBlockData = async () => {
    try {
      const web3 = new Web3('https://stylish-bitter-leaf.ethereum-sepolia.quiknode.pro/74dee468593c6e0cd52cf840aebcecd29f858333/'); // Replace with your QuickNode RPC endpoint
      const block = await web3.eth.getBlock(blockNumber);
      setBlockData(block);
      setError(null);
    } catch (err) {
      setError('Error fetching block data. Please check the block number.');
      setBlockData(null);
    }
  };

  console.log("BlockExplorer.js");

  return (
    <div>
      <h2>Block Explorer</h2>
      <input
        type="text"
        value={blockNumber}
        onChange={(e) => setBlockNumber(e.target.value)}
        placeholder="Enter block number"
      />
      <button onClick={getBlockData}>Get Block Data</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {blockData && (
        <div>
          <h3>Block Number: {blockData.number}</h3>
          <p>Timestamp: {new Date(Number(blockData.timestamp) * 1000).toLocaleString()}</p>
          <p>Transactions: {blockData.transactions.length}</p>
          {/* Add more information as needed */}
        </div>
      )}
    </div>
  );
};

export default BlockExplorer;
