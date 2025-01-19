const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

// 中间件
app.use(cors());
app.use(express.json());

// 静态文件服务
app.use(express.static(path.join(__dirname, 'public')));

// API 路由
app.get('/api/products', (req, res) => {
  // TODO: 从数据库获取商品列表
  res.json([]);
});

// 健康检查
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// 所有其他路由返回 index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
