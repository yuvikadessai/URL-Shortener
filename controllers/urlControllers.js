const shortid = require("shortid");
const db = require("../config/db");

const shortenUrl = (req, res) =>{
    const {url} = req.body;
    if(!url){
        return res.status(400).json({ error: "URL is required" });
    }
    const shortId = shortid.generate().slice(0, 7);

    const sql = "INSERT INTO urls(short_id, original_url) VALUES(?, ?)";
    db.query(sql, [shortId, url], (err)=>{
        if(err) return res.status(500).json({error:"Database error"});
        res.json({url:`http://localhost:8000/${shortId}`});
    });
};

const redirectUrl = (req, res) =>{
    const {shortId} = req.params;

    const sql = "SELECT original_url FROM urls WHERE short_id = ?";
    db.query(sql, [shortId], (err, result)=>{
        if(err) return res.status(500).send("Database error");
        if(result.length == 0) return res.status(400).send("Url not found");

        res.redirect(result[0].original_url)
    });
};

module.exports = {shortenUrl, redirectUrl};