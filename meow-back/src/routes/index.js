const { Router } = require('express');
const cats = require('../db')

const router = Router();

router.get("/", async (req, res) => {
    try {
        let {color} = req.query;

        //Validates whether the cat color is valid or not
        if(color === 'grey' || color === 'white' || color === 'brown'){
            let catJson = JSON.parse(cats)

            let selectedCat = catJson[color]

            return res.send({data: selectedCat}).status(200)
        }
    } catch (error) {
        return res.status(500).json(error);
    }
})

module.exports = router;