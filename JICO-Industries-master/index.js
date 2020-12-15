function sendEmail() {
    Email.send({
        Host: "mail.jicosolar.com",
        Username: "<noreply@jicosolar.com>",
        Password: "<2e12Axz_>",
        To: '<info@jicosolar.com>',
        From : "<divyapriyaub12@gmail.com>",
        Subject : "<hai>",
        Body : "<s>",
    }).then(
		message = alert("mail sent successfully")
	);
}