export interface IMember {
	id: string;
	first_name: string;
	last_name: string;
	email: string;
	phone_number: string;
	created_at?: Date;
	updated_at?: Date;
	role: string;
	is_staff?: boolean;
	gender: 'M' | 'F';
	verified?: boolean;
	password?: string;
	birthdate?: string;
	profile_image?: string;
	username?: string;
	address?: string;
	marital_status?: string;
	born_again?: boolean;
	employment_status?: string;
	occupation?: string;
}

export interface ITestimonials {
	id: string;
	first_name: string;
	last_name: string;
	email: string;
	testimony: string;
	phone_number: string;
	created_at: Date;
	member_id: string;
}
export interface IRequest {
	id: string;
	first_name: string;
	last_name: string;
	email: string;
	request: string;
	phone_number: string;
	created_at: Date;
	member_id: string;
}
export interface IReport {
	id: string;
	first_name: string;
	last_name: string;
	email: string;
	reason: string;
	created_at: Date;
	phone_number: string;
	member_id: string;
}

export interface IService {
	id: string;
	name: string;
	start_time: Date;
	end_time: Date;
}
