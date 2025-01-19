const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

// 中间件
app.use(cors());
app.use(express.json());

// 静态文件服务
app.use(express.static('public'));

// API 路由
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// 所有其他路由返回 index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
