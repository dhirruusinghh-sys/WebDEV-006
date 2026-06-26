import User from "../models/user.model.js";

export const LoginUser =  (req, res) => {
  res.json({ message: "login succcessfull" });
};

export const RegisterUser = async (req, res) => {
  try {

    console.log(req);
    
    const { fullName, email, password, phone, gender, dob } = req.body;

    if (!fullName || !email || !password || !phone || !gender || !dob) {
      res.status(400).json({ message: "all feild required" });
      return;
    }

    const existingUser = await User.findOne({email})

    if(existingUser){
        res.status(409).json({message:"Email already registered"})
        return;
    }

    const photourl = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`

    const photo = {
        url:photourl,
        publicId:null
    }

    const newUser = await User.create({
        fullName,
        email,
        gender,
        photo,
        password,
        dob
    })

    res.status(201).json({
        message:"User Created Sucessfully"
    })

  } catch (error) {
    console.log(error);
    
  }
};