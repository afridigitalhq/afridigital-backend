import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/assets', express.static(path.join(__dirname,'public/assets')));
app.get('/', (req,res)=>res.sendFile(path.join(__dirname,'public/index.html')));
app.get('/*',(req,res)=>res.sendFile(path.join(__dirname,'public/index.html')));
app.listen(PORT,()=>console.log('Server running on http://127.0.0.1:'+PORT));