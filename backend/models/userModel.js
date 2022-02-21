import bcryptjs from 'bcryptjs';
import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const usrerSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		isAdmin: {
			type: String,
			required: true,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

usrerSchema.methods.matchPassord = async function (enteredPassword) {
	return await bcryptjs.compare(enteredPassword, this.password);
};

usrerSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next();
	}
	const salt = await bcryptjs.genSalt(10);
	this.password = await bcryptjs.hash(this.password, salt);
});
const User = model('User', usrerSchema);

export default User;
