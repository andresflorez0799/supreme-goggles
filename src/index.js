const app = require('./app');
const config = require('./config/secrets');

const PORT = config.PORT || 3000;

//... inicializar el servidor en un puerto dado
app.listen(PORT, async () => {
    console.log(`Backend is ready on port ${PORT} !!`);

    //... Connect to database Logic
});
