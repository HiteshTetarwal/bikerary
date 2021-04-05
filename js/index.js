function sendEmail(name,body,emailid) {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "bloggin.manage@gmail.com",
	Password : "jxiisimwcszmuhbe",
	To : 'bikeraryofficials@gmail.com',
	From : "bloggin.manage@gmail.com",
	Subject : `Query form ${name} : ${emailid}`,
	Body : body,
	}).then(
	);
}