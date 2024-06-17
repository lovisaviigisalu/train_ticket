// app.js or index.js
const express = require('express');
const app = express();

const ticketRoutes = require('./routes/ticketRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

// Define routes
app.use('/api/tickets', ticketRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
