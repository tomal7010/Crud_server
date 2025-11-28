const db = require("../config/db");

//GET ALL Email list
const getEmails = async (req,res) => {
    try {
     const data = await db.query(' SELECT * FROM emails')
     if(!data){
        return res.status(404).send({
            success:false,
            message:'No Records Found'
        })
     }
     res.status(200).send({
        success:true,
        message:'All Emails Records',
        totalEmails: data[0].length,
        data: data[0],
     })
    } catch (error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Get All Email API',
            error
        })
    }
}

//create email
const createEmail = async (req,res) => {
    try{
        const {name, email} = req.body
        if(!name || !email){
            return res.status(500).send({
                success:false,
                message:'Please Provide all fields'
            })
        }

        const data = await db.query(`INSERT INTO emails (name, email) VALUES (? , ? )`,[name, email])
        if(!data) {
            return res.status(404).send({
                success:false,
                message:'Error In INSERT QUERY'
            })
        }

        res.status(201).send({
            success:true,
            message:'New Email Record Created',
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error In Create Email API',
            error
        })
    }
};

module.exports = { getEmails, createEmail };