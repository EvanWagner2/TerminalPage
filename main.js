const services = document.querySelector('#services')
const prices = document.querySelector('#prices')
const contact = document.querySelector('#contact')
const servicesContent = document.querySelector('.services-content')
const pricesContent = document.querySelector('.prices-content')
const contactContent = document.querySelector('.contact-content')

services.addEventListener('click', () => {
	const servicesBox = new WinBox({
		title: 'Services',
		width: '400px',
		height: '400px',
		top: 50,
		right: 50,
		left: 50,
		bottom: 50,
		mount: servicesContent,
		onfocus: function () {
			this.setBackground('#00aa00')
		},
		onblur: function () {
			this.setBackground('#777')
		},
	})
})
prices.addEventListener('click', () => {
	const pricesBox = new WinBox({
		title: 'Prices',
		width: '400px',
		height: '400px',
		top: 250,
		right: 50,
		left: 250,
		bottom: 50,
		mount: pricesContent,
		onfocus: function () {
			this.setBackground('#00aa00')
		},
		onblur: function () {
			this.setBackground('#777')
		},
	})
})
contact.addEventListener('click', () => {
	const pricesBox = new WinBox({
		title: 'Contact',
		width: '400px',
		height: '400px',
		top: 350,
		right: 50,
		left: 550,
		bottom: 50,
		mount: contactContent,
		onfocus: function () {
			this.setBackground('#00aa00')
		},
		onblur: function () {
			this.setBackground('#777')
		},
	})
})
