import mongoose from "mongoose";
import validator from  "validator";


const appointmentSchema =new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"First name must contain atleast 3 characters"],
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"last name must contain atleast 3 characters"],
    },
    email:{
        type:Number,
        required:true,
        validate:[validator.isEmail,"Please Provide a Valid email!"],
    },
    phone:{
        type:String,
        required:true,
        minLength:[11,"Phone number must contain 10 digit"],
        
        maxLength:[11,"Phone number must contain 10 digit"],
    },
    nic:{
        type:String,
        required:true,
        minLength:[11,"Phone number must contain exact 10 digits"],
        
        minLength:[11,"Phone number must contain 10 digits"],
    }, 
    dob:{
        type:Date,
        required: [true,"DOB is required!"],

    },
    gender:{
        required:true,
        enum: ["Male","Female"],
    },
    appointment_date:{
        type:String,
        required:true,

    },
    department:{
        type:String,
        rerquired:true,

    },
    doctor:{
        firstName:{
            type:String,
            required: true,
        },
        lastName:{
            type:String,
            required:true,

        },
    },
    hasVisited:{
        type:Boolean,
        default:false,
    },
    doctorId:{
        type:mongoose.Schema.ObjectId,
        required:true,
    },
    patientId:{
        type:mongoose.Schema.ObjectId,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum: ["Pending","Accepted","Rejected"],
        default: "Pending",
    },

});

export const Appointment = mongoose.model("Appointment",appointmentSchema);
