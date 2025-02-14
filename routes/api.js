// routes/api.js
const express = require('express');
const router = express.Router();
const AV = require('leanengine');

// 定义 Travel 对象
const Travel = AV.Object.extend('Travel');

// 获取所有旅行数据
router.get('/travels', async (req, res) => {
  try {
    const query = new AV.Query(Travel);
    const travels = await query.find();
    res.json(travels);
  } catch (error) {
    console.error('Error fetching travels:', error);
    res.status(500).json({ error: 'Failed to fetch travels' });
  }
});

module.exports = router;
