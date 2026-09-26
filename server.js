const WebSocket = require('ws');
const http = require('http');

const PORT = process.env.PORT || 8080;

// 通常のHTTPリクエスト（ブラウザで開いたとき）への応答を追加
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('✅ Wisp Proxy Server is running!\nWebSocket接続を待機しています。');
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('✅ Client connected via WebSocket');

    ws.on('message', (message) => {
        // 動作確認用の簡易エコーバック
        ws.send(message); 
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`🚀 Wisp proxy server is running on port ${PORT}`);
});
