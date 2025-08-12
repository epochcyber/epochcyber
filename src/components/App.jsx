import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}

function Avatar_2() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/x6sfmvs.jpeg"
      alt="Lin_2 Lanying"
      width={500}
      height={500}
    />
  );
}

export default function App() {
  return (
    <Avatar_2 />
  );
}
