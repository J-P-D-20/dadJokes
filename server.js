import express from 'express';



const app = express();
app.use(express.static('public'))

app.get('/joke',async  (req,res) =>{
    try{
         const response = await fetch("https://icanhazdadjoke.com/",{
         headers: {accept: 'application/json'}
         });
         const data = await response.json();
         res.json(data);
    } catch (err) {
        res.status(500).json({error: 'failed to fetch joke'});
    }
})




app.listen(3000)