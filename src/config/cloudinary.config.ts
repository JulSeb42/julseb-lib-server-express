import { v2 as cloudinary } from "cloudinary"
import { CloudinaryStorage } from "multer-storage-cloudinary"
import multer from "multer"
import "dotenv/config"

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_KEY,
	api_secret: process.env.CLOUDINARY_SECRET,
})

const storage = new CloudinaryStorage({
	cloudinary,
	params: {
		// @ts-expect-error => fix Object literal may only specify known properties, and 'allowed_formats' does not exist in type 'Params'
		allowed_formats: ["jpg", "png", "svg"],
		folder: "julseb-lib-boilerplate-fullstack",
	},
})

export const fileUploader = multer({ storage })
