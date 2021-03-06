formhandler.basic.contact-form {

	# cat=Formhandler - Basic - Contact Form/basic/10; type=string; label=Root path: Path where the template was saved to.
	rootPath = fileadmin/templates/plugins/formhandler
	email {

		user {

			# cat=Formhandler - Basic - Contact Form/basic/20; type=string; label=User email sender: Email address to use as sender address for the user email.
			sender_email = {$constant.sender_email}
		}

		admin {

			# cat=Formhandler - Basic - Contact Form/basic/20; type=string; label=Admin email sender: Email address to use as sender address for the admin email.
			sender_email = email

			# cat=Formhandler - Basic - Contact Form/basic/20; type=string; label=Admin email recipient: Email address of an admin to receive the contact request.
			to_email = {$constant.to_email}
		}
	}

	# cat=Formhandler - Basic - Contact Form/basic/40; type=string; label=Redirect Page: Page ID to redirect after successful form submission.
	redirectPage = 35
}
