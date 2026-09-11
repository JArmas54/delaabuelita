function App() {
  return React.createElement('div', { style: { width: '100%', minHeight: '100vh', background: '#f0eee9' } },
    React.createElement(LandingFolklore));
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
