import {comparePassword, hashPassword } from "./../helpers/authHelper.js";
import userModel from "../models/userModel.js";
// import { JWT } from "jsonwebtoken";
import JWT from 'jsonwebtoken';

// const { jsonwebtoken } = JWT;
// export const JWT = new jsonwebtoken();


// export const registerController=async(req,res)=>{
//     try{
//         const { name, email, password} = req.body;
//     //validations
//     if (!name) {
//       return res.send({ message: "Name is Required" });
//     }
//     if (!email) {
//       return res.send({ message: "Email is Required" });
//     }
//     if (!password) {
//       return res.send({ message: "Password is Required" });
//     }

//         const existingUser=await userModel.findOne({email})
//         if(existingUser){
//             return res.status(200).send({
//                 success:true,
//                 message:"Already register please login",
//             })
//         }

//         const hashedPassword = await hashPassword(password);
//         const user = await new userModel({
//             name,
//             email,
//             password: hashedPassword,
//           }).save();

//         res.status(201).send({
//             success:true,
//             message:"User register successfully",
//             user,
//         });

//     }catch(error){
//         console.log(error)
//         res.status(500).send({
//             success:false,
//             message:"Error in Registration",
//             error
//         });
//     }

// };

export const registerController = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      //validations
      if (!name) {
        return res.send({ error: "Name is Required" });
      }
      if (!email) {
        return res.send({ message: "Email is Required" });
      }
      if (!password) {
        return res.send({ message: "Password is Required" });
      }
    //   if (!phone) {
    //     return res.send({ message: "Phone no is Required" });
    //   }
    //   if (!address) {
    //     return res.send({ message: "Address is Required" });
    //   }
    //   if (!answer) {
    //     return res.send({ message: "Answer is Required" });
    //   }
      //check user
      const exisitingUser = await userModel.findOne({ email });
      //exisiting user
      if (exisitingUser) {
        return res.status(200).send({
          success: false,
          message: "Already Register please login",
        });
      }
      //register user
      const hashedPassword = await hashPassword(password);
      //save
      const user = await new userModel({
        name,
        email,
        password: hashedPassword,
        
      }).save();
  
      res.status(201).send({
        success: true,
        message: "User Register Successfully",
        user,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in Registeration",
        error,
      });
    }
  };

export const loginController=async(req,res)=>{
    try{
        const{email,password}=req.body

        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:"Invalid email or password"
            })
        }
        const user=await userModel.findOne({email})
        if(!user){
          return res.status(404).send({
            success:false,
            message:'Email is not registered'
          })
        }
        const match=await comparePassword( password,user.password)
        if(!match){
          return res.status(200).send({
            success:false,
            message:'Invalid Password'
          })
        }

        const token=await JWT.sign({_id: user.id}, process.env.JWT_SECRET, {
          expiresIn:"10d",
        });
        res.status(200).send({
          success:true,
          message:'login successfully',
          user:{
            name:user.name,
            email:user.email,
          },
          token,
        });

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in login',
            error
        })
    }
};
export const testController=(req,res)=>{
  console.log("protected Route")
};
