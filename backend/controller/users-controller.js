const Users = require('../models/users-model')

exports.createUser = async(req,res)=>{
    try {
        const newUser = await Users.create({
            name:req.body.name,
            email:req.body.email,
            age:req.body.age,
            mobile:req.body.mobile,
            work:req.body.work,
            add:req.body.add,
            desc:req.body.desc,
        })
        res.send(newUser)
        // res.status(201).json({
        //     success:true,
        //     messsage:"NEW USER CREATED SUCCESSFULLY!!!!",
        //     newUser
        // })
    } catch (error) {   
        res.send(error)
        // res.status(404).json({
        //     success:false,
        //     message:"SOMETHING WENT TO WRONG......"
        // })
    }
}


exports.getUsers = async(req,res)=>{
    try {
        const users = await Users.find()
        res.send(users)
        // res.status(200).json({
        //     success:true,
        //     message:"SHOW ALL USERS!!!!",
        //     data:users
        // })
    } catch (error) {
        res.status(404).json({
            success:false,
            message:"somethig went to wrong"
        })        
    }
}

exports.getUser = async(req,res)=>{
    try {
        const userId = req.params.id
        const userDetails = await Users.findById(userId)
        if(!userDetails){
            // res.status(404).json({
            //     success:false,
            //     message:"NOT FOUND USER FROM GIVEN ID...."
            // })
            res.send("something went to wrong")
        }
        res.send(userDetails)
        // res.status(200).json({
        //     success:true,
        //     message:`USER FIND BY GIVEN ID:-${userId}`,
        //     data:userDetails
        // })
    } catch (error) {
        res.status(404).json({
            success:false,
            message:"something went to wrong"
        })
    }
}

exports.updateUser = async(req,res)=>{
    const updateUser = await Users.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new:true
        }
    )
    res.status(200).json({
        success:true,
        messsage:"user updated successfully",
        data:updateUser
    })
}

exports.deleteUser = async(req,res) =>{
    try {
        const userId = req.params.id
        const deleteUser = await Users.findByIdAndDelete(userId)
        res.status(200).json({
            success:true,
            message:`user delete from given id:-${userId}`,
            data:deleteUser
        })
    } catch (error) {
        res.status(404).json({
            success:false,
            messsage:"something went to wrrong...."
        })
    }
}