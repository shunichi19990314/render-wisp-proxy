const WebSocket = require('ws');
const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', (message) => {
        // 簡易的なエコーサーバー（デモ用）
        // 本格的なWispサーバーにする場合は wisp-server-node などに置き換えてください
        ws.send(message); 
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Wisp proxy server is running on port ${PORT}`);
});
