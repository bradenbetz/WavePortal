import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {
  const [currentAccount, setCurrentAccount] = useState("");

  const isWalletConnected = async () => {
    try {
      const { ethereum } = window;
    
      if (!ethereum) {
        console.log("connect your wallet dummeh");
      } else {
        console.log("faka connected his wallet");
      }

      const accounts = await ethereum.request ({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found authorized account", account);
        setCurrentAccount(account);

      } else {
        console.log("no authorized account");
      }
  } catch (error) {
    console.log(error);
  }
}
  
const connectWallet = async () => {
    try {
      const {ethereum} = window;
      if (!ethereum) {
        console.log("Get Metamask cclown");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    isWalletConnected();
  }, [])
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        👋 Hey there!
        </div>

        <div className="bio">
        I am farza and I worked on self-driving cars so that's pretty cool right? Connect your Ethereum wallet and wave at me!
        </div>

        <button className="waveButton" onClick={null}>
          Wave at Me
        </button>
        {!currentAccount && (
          <button className="waveButton" onClick={connectWallet}>Connect Wallet</button>
        )}
      </div>
    </div>
  );
}
