/* ---------------------------------------------------------------------- */
/*	SUSCRIPTION FORM MAILCHIMP
/* ---------------------------------------------------------------------- */
    
	var urlForm = 'http://creabox.us7.list-manage.com/subscribe/post';
	var u = 'a9b585106dde1e10e02b6aab4';
	var id = '0183be9d57';

    $('#mc-form').ajaxChimp({
    	url: urlForm+'?u='+u+'&amp;id='+id
	});