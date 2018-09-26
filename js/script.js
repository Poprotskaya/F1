function searchField() {
	var tickets = document.getElementById("tickets");
	var event = document.getElementById("event");
	var guide = document.getElementById("guide");
	var history = document.getElementById("history");
	var news = document.getElementById("news");
	var contacts = document.getElementById("contacts");
	var faq = document.getElementById("faq");
	var search = document.getElementById("search");
	var sField = document.getElementById("sField");
	
	(tickets.style.display == "inline-block") ? (tickets.style.display = "none") :
	(tickets.style.display = "inline-block");

	(event.style.display == "inline-block") ? (event.style.display = "none") :
	(event.style.display = "inline-block");

	(guide.style.display == "inline-block") ? (guide.style.display = "none") :
	(guide.style.display = "inline-block");

	(history.style.display == "inline-block") ? (history.style.display = "none") :
	(history.style.display = "inline-block");

	(news.style.display == "inline-block") ? (news.style.display = "none") :
	(news.style.display = "inline-block");

	(contacts.style.display == "inline-block") ? (contacts.style.display = "none") :
	(contacts.style.display = "inline-block");

	(faq.style.display == "inline-block") ? (faq.style.display = "none") :
	(faq.style.display = "inline-block");

	(search.style.position == "relative") ? (search.style.display = "none") :
	(search.style.position = "relative");

	(sField.style.display == "none") ? (sField.style.display = "inline-block") :
	(sField.style.display = "none");
}

 


	